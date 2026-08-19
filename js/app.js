/* ==========================================================================
   APLICAÇÃO DA INTERFACE & INTEGRAÇÃO DE EVENTOS (APP CONTROLLER)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const game = new CheckersGame();
    const ai = new RiskAI(game);

    // Elementos do DOM
    const boardEl = document.getElementById('board');
    const turnBanner = document.getElementById('turn-banner');
    const turnText = document.getElementById('turn-text');
    const pieceInfoText = document.getElementById('piece-info-text');

    // Elementos de Placar
    const sstCountEl = document.getElementById('sst-count');
    const sstCapturedEl = document.getElementById('sst-captured');
    const sstDamasEl = document.getElementById('sst-damas');

    const riskCountEl = document.getElementById('risk-count');
    const riskCapturedEl = document.getElementById('risk-captured');
    const riskDamasEl = document.getElementById('risk-damas');

    // Botões e Modais
    const btnAudio = document.getElementById('btn-audio');
    const audioIcon = document.getElementById('audio-icon');
    const btnCodex = document.getElementById('btn-codex');
    const btnRestart = document.getElementById('btn-restart');
    const difficultySelect = document.getElementById('difficulty');

    const codexModal = document.getElementById('codex-modal');
    const btnCloseCodex = document.getElementById('btn-close-codex');
    const codexContent = document.getElementById('codex-content');

    const gameoverModal = document.getElementById('gameover-modal');
    const btnPlayAgain = document.getElementById('btn-play-again');
    const gameoverTitle = document.getElementById('gameover-title');
    const gameoverMsg = document.getElementById('gameover-msg');
    const gameoverIcon = document.getElementById('gameover-icon');

    const finalCaptures = document.getElementById('final-captures');
    const finalDamas = document.getElementById('final-damas');
    const finalTurns = document.getElementById('final-turns');

    let isAiThinking = false;
    let anuncioMeioMostrado = false;

    // O cadastro da Hora da Segurança vem antes da primeira jogada.
    setupEventListeners();
    renderBoard();
    updateStats();
    HS.exigirCadastro(() => {
        HS.novaPartida();
        initUI();
    });

    function initUI() {
        renderBoard();
        updateStats();
        updateTurnBanner();
    }

    // Pontuação enviada à planilha ao fim da partida.
    function pontuacao(venceu) {
        return game.stats.riskCaptured * 100
             + game.stats.sstDamas * 150
             + (venceu ? 500 : 0);
    }

    // Renderizar Tabuleiro 8x8
    function renderBoard() {
        boardEl.innerHTML = '';

        const legalMoves = game.getAllLegalMoves(game.turn);
        const forcedCaptures = legalMoves.filter(m => m.capturedRow !== null);

        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const square = document.createElement('div');
                const isDark = (r + c) % 2 === 1;
                square.className = `square ${isDark ? 'dark' : 'light'}`;
                square.dataset.row = r;
                square.dataset.col = c;

                // Destacar Peça Selecionada
                if (game.selectedPiece && game.selectedPiece.row === r && game.selectedPiece.col === c) {
                    square.classList.add('selected');
                }

                // Destacar Casas com Movimentos Válidos
                const moveMatch = game.validMoves.find(m => m.toRow === r && m.toCol === c);
                if (moveMatch) {
                    if (moveMatch.capturedRow !== null) {
                        square.classList.add('valid-capture');
                    } else {
                        square.classList.add('valid-move');
                    }
                }

                // Renderizar Peça na casa
                const piece = game.board[r][c];
                if (piece) {
                    const pieceEl = createPieceElement(piece, r, c);
                    square.appendChild(pieceEl);
                }

                // Evento de Clique na Casa do Tabuleiro
                square.addEventListener('click', () => handleSquareClick(r, c));

                boardEl.appendChild(square);
            }
        }
    }

    // Detecta se há um risco ambiental à frente da peça selecionada
    function getRiskFacingPiece(r, c) {
        const p = game.board[r][c];
        if (!p) return null;

        // 1. Checa se a peça pode capturar algum risco
        const validMoves = game.getValidMovesForPiece(r, c);
        const captureMove = validMoves.find(m => m.capturedRow !== null);
        if (captureMove) {
            const capturedPiece = game.board[captureMove.capturedRow][captureMove.capturedCol];
            if (capturedPiece && capturedPiece.side === 'risk') {
                return capturedPiece.type;
            }
        }

        // 2. Checa as diagonais à frente (para SST, r - 1)
        const forwardDirs = p.isKing 
            ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] 
            : [[-1, -1], [-1, 1]];

        for (const [dr, dc] of forwardDirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                const target = game.board[nr][nc];
                if (target && target.side === 'risk') {
                    return target.type;
                }
            }
        }

        return null;
    }

    // Exibe a História Cruzada de Campo entre a Peça e o Risco
    function showCrossedStory(r, c) {
        const piece = game.board[r][c];
        if (!piece) return;

        if (piece.side === 'sst') {
            const sstType = piece.type;
            const riskFacing = getRiskFacingPiece(r, c);
            const storyDict = CROSSED_STORIES[sstType] || CROSSED_STORIES.tsst;
            const storyText = riskFacing && storyDict[riskFacing] 
                ? storyDict[riskFacing] 
                : storyDict.default;

            const pieceData = PIECES_DATA.sst[sstType];
            const kingTitle = piece.isKing ? ' 👑 [SUPER PREVENCIONISTA]' : '';

            pieceInfoText.innerHTML = `
                <div class="story-banner">
                    <span class="story-badge">📖 HISTÓRIA DE CAMPO - ${pieceData.name.toUpperCase()}${kingTitle}</span>
                    <span class="story-text">${storyText}</span>
                </div>
            `;
        } else if (piece.side === 'risk') {
            const riskData = PIECES_DATA.risk[piece.type];
            const kingTitle = piece.isKing ? ' 👑 [RISCO CRÍTICO]' : '';

            pieceInfoText.innerHTML = `
                <div class="story-banner danger">
                    <span class="story-badge danger">⚠️ AMEAÇA DE CAMPO - ${riskData.name.toUpperCase()}${kingTitle}</span>
                    <span class="story-text"><strong>${riskData.role}:</strong> ${riskData.desc} <em>${riskData.tip}</em></span>
                </div>
            `;
        }
    }

    // Cria o elemento visual HTML + SVG para cada peça
    function createPieceElement(piece, r, c) {
        const pieceEl = document.createElement('div');
        pieceEl.className = `piece ${piece.side}-piece ${piece.isKing ? 'king' : ''}`;
        
        // Dados de renderização do personagem/risco
        const pieceData = PIECES_DATA[piece.side][piece.type];

        // Container SVG
        const svgContainer = document.createElement('div');
        svgContainer.className = 'piece-svg-container';
        svgContainer.innerHTML = pieceData ? pieceData.renderSVG() : '';
        pieceEl.appendChild(svgContainer);

        // Coroa de Dama se promovido
        if (piece.isKing) {
            const crownEl = document.createElement('div');
            crownEl.innerHTML = renderCrownSVG(piece.side === 'sst');
            pieceEl.appendChild(crownEl.firstElementChild);
        }

        // Hover para mostrar histórias cruzadas na barra inferior
        pieceEl.addEventListener('mouseenter', () => showCrossedStory(r, c));

        return pieceEl;
    }

    // Trata o clique no tabuleiro
    function handleSquareClick(r, c) {
        if (isAiThinking || game.turn !== 'sst') return;

        const pieceAtSquare = game.board[r][c];
        const legalMoves = game.getAllLegalMoves('sst');
        const hasForcedCaptures = legalMoves.some(m => m.capturedRow !== null);

        // Se clicou em uma casa válida para mover a peça selecionada
        if (game.selectedPiece) {
            const move = game.validMoves.find(m => m.toRow === r && m.toCol === c);
            if (move) {
                executePlayerMove(move);
                return;
            }
        }

        // Se clicou em uma de suas peças SST
        if (pieceAtSquare && pieceAtSquare.side === 'sst') {
            // Se estiver travado em captura múltipla, só pode usar aquela peça
            if (game.mustContinueCapture) {
                if (game.mustContinueCapture.row !== r || game.mustContinueCapture.col !== c) {
                    audio.playDefeat();
                    showCrossedStory(r, c);
                    return;
                }
            }

            const pieceMoves = game.getValidMovesForPiece(r, c);
            const pieceCaptures = pieceMoves.filter(m => m.capturedRow !== null);

            // Se existirem capturas obrigatórias no tabuleiro, proíbe selecionar peça sem captura
            if (hasForcedCaptures && pieceCaptures.length === 0) {
                audio.playDefeat();
                showCrossedStory(r, c);
                return;
            }

            game.selectedPiece = { row: r, col: c };
            game.validMoves = hasForcedCaptures ? pieceCaptures : pieceMoves;
            audio.playMove();
            showCrossedStory(r, c);
            renderBoard();
        } else {
            game.selectedPiece = null;
            game.validMoves = [];
            renderBoard();
        }
    }

    // Executa a jogada do jogador
    function executePlayerMove(move) {
        const result = game.makeMove(move);
        audio.playMove();

        if (result.wasCaptured) {
            audio.playCapture();
            triggerCaptureEffect(move.toRow, move.toCol);
        }

        if (result.wasPromoted) {
            audio.playPromotion();
            pieceInfoText.innerHTML = `🌟 <strong>PROMOÇÃO!</strong> Profissional promovido a Super Prevencionista (Dama)!`;
        }

        renderBoard();
        updateStats();

        // Checar fim de jogo
        const status = game.checkGameOver();
        if (status.over) {
            handleGameOver(status.winner);
            return;
        }

        if (result.continueTurn) {
            updateTurnBanner("Captura Múltipla! Continue neutralizando os riscos!");
        } else {
            updateTurnBanner();
            // Iniciar Turno da IA
            triggerAiTurn();
        }
    }

    // Executa o Turno da Máquina (IA)
    function triggerAiTurn() {
        if (game.turn !== 'risk') return;

        isAiThinking = true;
        updateTurnBanner("Vez da Máquina (Calculando riscos ambientais...)");

        setTimeout(() => {
            const difficulty = difficultySelect.value;
            const aiMove = ai.getBestMove(difficulty);

            if (aiMove) {
                const result = game.makeMove(aiMove);
                audio.playMove();

                if (result.wasCaptured) {
                    audio.playCapture();
                    triggerCaptureEffect(aiMove.toRow, aiMove.toCol);
                }

                if (result.wasPromoted) {
                    audio.playDefeat();
                }

                renderBoard();
                updateStats();

                const status = game.checkGameOver();
                if (status.over) {
                    handleGameOver(status.winner);
                    isAiThinking = false;
                    return;
                }

                if (result.continueTurn) {
                    // IA continua jogando em sequência de captura
                    triggerAiTurn();
                    return;
                }
            }

            isAiThinking = false;
            updateTurnBanner();
        }, 650);
    }

    // Efeito de Explosão Visual ao Capturar Peça
    function triggerCaptureEffect(r, c) {
        const square = document.querySelector(`.square[data-row="${r}"][data-col="${c}"]`);
        if (square) {
            const effect = document.createElement('div');
            effect.className = 'piece-captured-effect';
            square.appendChild(effect);
            setTimeout(() => effect.remove(), 400);
        }
    }

    // Atualiza o Banner do Turno
    function updateTurnBanner(customMsg = null) {
        if (customMsg) {
            turnText.textContent = customMsg;
            return;
        }

        if (game.turn === 'sst') {
            turnBanner.className = 'turn-banner sst-turn';
            turnText.textContent = 'Sua Vez! Selecione um profissional da SST para jogar';
        } else {
            turnBanner.className = 'turn-banner risk-turn';
            turnText.textContent = 'Vez da Máquina (Riscos Ambientais Ativos)';
        }
    }

    // Atualiza Painel de Placar
    function updateStats() {
        const sstPieces = game.getPieces('sst').length;
        const riskPieces = game.getPieces('risk').length;

        sstCountEl.textContent = sstPieces;
        sstCapturedEl.textContent = game.stats.riskCaptured;
        sstDamasEl.textContent = game.stats.sstDamas;

        riskCountEl.textContent = riskPieces;
        riskCapturedEl.textContent = game.stats.sstCaptured;
        riskDamasEl.textContent = game.stats.riskDamas;

        // intervalo comercial na metade da campanha de neutralização
        if (!anuncioMeioMostrado && game.stats.riskCaptured >= 6 && HS.jogador()) {
            anuncioMeioMostrado = true;
            HS.anuncio(() => {});
        }
    }

    // Trata Fim de Jogo — grava na planilha e mostra o patrocinador antes do resultado
    function handleGameOver(winner) {
        const venceu = winner === 'sst';
        HS.concluir(pontuacao(venceu),
            (venceu ? 'Vitória da segurança' : 'Os riscos prevaleceram') +
            ` · ${game.stats.riskCaptured} riscos neutralizados, ${game.stats.sstDamas} super prevencionistas, ${game.stats.turnsCount} jogadas`);
        HS.anuncio(() => mostrarResultado(winner));
    }

    function mostrarResultado(winner) {
        finalCaptures.textContent = game.stats.riskCaptured;
        finalDamas.textContent = game.stats.sstDamas;
        finalTurns.textContent = game.stats.turnsCount;

        if (winner === 'sst') {
            audio.playVictory();
            gameoverIcon.textContent = '🏆';
            gameoverTitle.textContent = 'Vitória da Segurança!';
            gameoverMsg.textContent = 'Parabéns! Todos os riscos ambientais e acidentes foram prevenidos com excelência!';
        } else {
            audio.playDefeat();
            gameoverIcon.textContent = '⚠️';
            gameoverTitle.textContent = 'Alerta de Insegurança!';
            gameoverMsg.textContent = 'Os riscos ambientais prevaleceram. Reforce os treinamentos de SST e tente novamente!';
        }

        gameoverModal.classList.remove('hidden');
    }

    // Preenche e abre o Codex SST
    function openCodex() {
        audio.playMove();
        codexContent.innerHTML = '';

        const grid = document.createElement('div');
        grid.className = 'codex-grid';

        // Coluna SST
        const sstCol = document.createElement('div');
        sstCol.className = 'codex-column sst';
        sstCol.innerHTML = '<h3>🛡️ Equipe SST & Prevenção</h3>';

        Object.values(PIECES_DATA.sst).forEach(item => {
            const el = document.createElement('div');
            el.className = 'codex-item';
            el.innerHTML = `
                <div class="codex-item-header">
                    <span style="width:24px;height:24px;display:inline-block">${item.renderSVG()}</span>
                    <span>${item.name}</span>
                </div>
                <p><strong>Papel:</strong> ${item.role}</p>
                <p>${item.desc}</p>
                <div class="codex-tip">${item.tip}</div>
            `;
            sstCol.appendChild(el);
        });

        // Coluna Riscos
        const riskCol = document.createElement('div');
        riskCol.className = 'codex-column risk';
        riskCol.innerHTML = '<h3>⚠️ Riscos Ocupacionais</h3>';

        Object.values(PIECES_DATA.risk).forEach(item => {
            const el = document.createElement('div');
            el.className = 'codex-item';
            el.innerHTML = `
                <div class="codex-item-header">
                    <span style="width:24px;height:24px;display:inline-block">${item.renderSVG()}</span>
                    <span>${item.name}</span>
                </div>
                <p><strong>Perigo:</strong> ${item.role}</p>
                <p>${item.desc}</p>
                <div class="codex-tip">${item.tip}</div>
            `;
            riskCol.appendChild(el);
        });

        grid.appendChild(sstCol);
        grid.appendChild(riskCol);
        codexContent.appendChild(grid);

        codexModal.classList.remove('hidden');
    }

    // Configurar Eventos da UI
    function setupEventListeners() {
        btnAudio.addEventListener('click', () => {
            const enabled = audio.toggleMute();
            audioIcon.textContent = enabled ? '🔊' : '🔇';
        });

        btnCodex.addEventListener('click', openCodex);
        btnCloseCodex.addEventListener('click', () => codexModal.classList.add('hidden'));

        btnRestart.addEventListener('click', () => {
            if (confirm('Deseja reiniciar a partida de Dama SST?')) {
                reiniciarPartida();
            }
        });

        btnPlayAgain.addEventListener('click', () => {
            gameoverModal.classList.add('hidden');
            reiniciarPartida();
        });
    }

    function reiniciarPartida() {
        game.initBoard();
        isAiThinking = false;
        anuncioMeioMostrado = false;
        HS.novaPartida();
        initUI();
    }
});
