/* ==========================================================================
   MOTOR DE REGRAS E ESTADO DO JOGO DE DAMA (GAME ENGINE)
   ========================================================================== */

class CheckersGame {
    constructor() {
        this.board = Array(8).fill(null).map(() => Array(8).fill(null));
        this.turn = 'sst'; // 'sst' (jogador) ou 'risk' (máquina/IA)
        this.selectedPiece = null; // { row, col }
        this.validMoves = []; // Array de jogadas possíveis para a peça selecionada
        this.mustContinueCapture = null; // Se estiver em uma sequência de captura múltipla
        this.history = [];
        this.stats = {
            sstCaptured: 0,
            riskCaptured: 0,
            sstDamas: 0,
            riskDamas: 0,
            turnsCount: 0
        };

        this.initBoard();
    }

    initBoard() {
        this.board = Array(8).fill(null).map(() => Array(8).fill(null));
        this.turn = 'sst';
        this.selectedPiece = null;
        this.validMoves = [];
        this.mustContinueCapture = null;
        this.stats = {
            sstCaptured: 0,
            riskCaptured: 0,
            sstDamas: 0,
            riskDamas: 0,
            turnsCount: 0
        };

        const sstTypes = ['tsst', 'enfermeira', 'ambiental', 'cipeiro', 'brigadista', 'engenheiro'];
        const riskTypes = ['fogo', 'raio', 'fio', 'quimico', 'queda', 'maquina'];

        let sstIdx = 0;
        let riskIdx = 0;

        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                // Peças jogam apenas nas casas escuras (onde (r + c) % 2 === 1)
                if ((r + c) % 2 === 1) {
                    if (r < 3) {
                        // Linhas 0, 1, 2: Peças da Máquina (Riscos)
                        this.board[r][c] = {
                            side: 'risk',
                            type: riskTypes[riskIdx % riskTypes.length],
                            isKing: false,
                            id: `risk_${r}_${c}`
                        };
                        riskIdx++;
                    } else if (r > 4) {
                        // Linhas 5, 6, 7: Peças do Jogador (SST)
                        this.board[r][c] = {
                            side: 'sst',
                            type: sstTypes[sstIdx % sstTypes.length],
                            isKing: false,
                            id: `sst_${r}_${c}`
                        };
                        sstIdx++;
                    }
                }
            }
        }
    }

    // Retorna todos as peças ativas de um lado
    getPieces(side, currentBoard = this.board) {
        const pieces = [];
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const p = currentBoard[r][c];
                if (p && p.side === side) {
                    pieces.push({ piece: p, row: r, col: c });
                }
            }
        }
        return pieces;
    }

    // Calcula jogadas válidas para uma peça em (row, col)
    getValidMovesForPiece(r, c, currentBoard = this.board) {
        const p = currentBoard[r][c];
        if (!p) return [];

        const moves = [];
        const captures = [];

        // Direções diagonais
        const directions = p.isKing 
            ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
            : p.side === 'sst' ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]];

        // Direções de captura (peça normal pode capturar para trás também)
        const captureDirections = [[-1, -1], [-1, 1], [1, -1], [1, 1]];

        // 1. Verificar Capturas
        const searchDirs = p.isKing ? directions : captureDirections;

        for (const [dr, dc] of searchDirs) {
            if (p.isKing) {
                // Dama: pode voar pelas diagonais
                let nr = r + dr;
                let nc = c + dc;
                let enemyFound = null;

                while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                    const target = currentBoard[nr][nc];
                    if (target) {
                        if (target.side === p.side) {
                            break; // Bloqueado por peça amiga
                        } else {
                            if (enemyFound) break; // Não pode pular duas peças
                            enemyFound = { row: nr, col: nc, piece: target };
                        }
                    } else {
                        if (enemyFound) {
                            captures.push({
                                fromRow: r, fromCol: c,
                                toRow: nr, toCol: nc,
                                capturedRow: enemyFound.row, capturedCol: enemyFound.col
                            });
                        }
                    }
                    nr += dr;
                    nc += dc;
                }
            } else {
                // Peça Comum: salto de 2 casas
                const enemyR = r + dr;
                const enemyC = c + dc;
                const landR = r + dr * 2;
                const landC = c + dc * 2;

                if (landR >= 0 && landR < 8 && landC >= 0 && landC < 8) {
                    const enemy = currentBoard[enemyR][enemyC];
                    const landSquare = currentBoard[landR][landC];

                    if (enemy && enemy.side !== p.side && !landSquare) {
                        captures.push({
                            fromRow: r, fromCol: c,
                            toRow: landR, toCol: landC,
                            capturedRow: enemyR, capturedCol: enemyC
                        });
                    }
                }
            }
        }

        // Se houver capturas, a captura é obrigatória nas regras de Dama!
        if (captures.length > 0) {
            return captures;
        }

        // 2. Se não houver capturas e a peça não estiver travada em captura múltipla, calcula movimentos simples
        if (!this.mustContinueCapture) {
            for (const [dr, dc] of directions) {
                if (p.isKing) {
                    let nr = r + dr;
                    let nc = c + dc;
                    while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                        if (currentBoard[nr][nc]) break;
                        moves.push({
                            fromRow: r, fromCol: c,
                            toRow: nr, toCol: nc,
                            capturedRow: null, capturedCol: null
                        });
                        nr += dr;
                        nc += dc;
                    }
                } else {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                        if (!currentBoard[nr][nc]) {
                            moves.push({
                                fromRow: r, fromCol: c,
                                toRow: nr, toCol: nc,
                                capturedRow: null, capturedCol: null
                            });
                        }
                    }
                }
            }
        }

        return moves;
    }

    // Retorna todas as jogadas legais para o lado ativo (forçando captura se houver)
    getAllLegalMoves(side, currentBoard = this.board) {
        if (this.mustContinueCapture) {
            const { row, col } = this.mustContinueCapture;
            return this.getValidMovesForPiece(row, col, currentBoard).filter(m => m.capturedRow !== null);
        }

        const pieces = this.getPieces(side, currentBoard);
        let allCaptures = [];
        let allMoves = [];

        for (const { piece, row, col } of pieces) {
            const moves = this.getValidMovesForPiece(row, col, currentBoard);
            const captureMoves = moves.filter(m => m.capturedRow !== null);

            if (captureMoves.length > 0) {
                allCaptures.push(...captureMoves);
            } else {
                allMoves.push(...moves);
            }
        }

        // Regra de Ouro da Dama: Se existir qualquer captura, o jogador É OBRIGADO a capturar!
        return allCaptures.length > 0 ? allCaptures : allMoves;
    }

    // Executa uma jogada no tabuleiro
    makeMove(move) {
        const { fromRow, fromCol, toRow, toCol, capturedRow, capturedCol } = move;
        const p = this.board[fromRow][fromCol];

        // Mover a peça
        this.board[toRow][toCol] = p;
        this.board[fromRow][fromCol] = null;

        let wasCaptured = false;
        let wasPromoted = false;

        // Se capturou peça inimiga
        if (capturedRow !== null && capturedCol !== null) {
            const capturedPiece = this.board[capturedRow][capturedCol];
            this.board[capturedRow][capturedCol] = null;
            wasCaptured = true;

            if (p.side === 'sst') {
                this.stats.riskCaptured++;
            } else {
                this.stats.sstCaptured++;
            }
        }

        // Verificar Promoção a Dama
        if (!p.isKing) {
            if ((p.side === 'sst' && toRow === 0) || (p.side === 'risk' && toRow === 7)) {
                p.isKing = true;
                wasPromoted = true;
                if (p.side === 'sst') this.stats.sstDamas++;
                else this.stats.riskDamas++;
            }
        }

        // Verificar Captura Múltipla Sequencial
        if (wasCaptured && !wasPromoted) {
            const nextCaptures = this.getValidMovesForPiece(toRow, toCol).filter(m => m.capturedRow !== null);
            if (nextCaptures.length > 0) {
                this.mustContinueCapture = { row: toRow, col: toCol };
                this.selectedPiece = { row: toRow, col: toCol };
                this.validMoves = nextCaptures;
                return { success: true, continueTurn: true, wasCaptured, wasPromoted };
            }
        }

        // Passar o Turno
        this.mustContinueCapture = null;
        this.selectedPiece = null;
        this.validMoves = [];
        this.turn = this.turn === 'sst' ? 'risk' : 'sst';
        this.stats.turnsCount++;

        return { success: true, continueTurn: false, wasCaptured, wasPromoted };
    }

    // Checa se o jogo terminou
    checkGameOver() {
        const sstPieces = this.getPieces('sst');
        const riskPieces = this.getPieces('risk');

        if (sstPieces.length === 0) return { over: true, winner: 'risk' };
        if (riskPieces.length === 0) return { over: true, winner: 'sst' };

        const sstMoves = this.getAllLegalMoves('sst');
        const riskMoves = this.getAllLegalMoves('risk');

        if (sstMoves.length === 0 && this.turn === 'sst') return { over: true, winner: 'risk' };
        if (riskMoves.length === 0 && this.turn === 'risk') return { over: true, winner: 'sst' };

        return { over: false, winner: null };
    }
}
