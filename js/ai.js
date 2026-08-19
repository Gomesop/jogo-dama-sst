/* ==========================================================================
   INTELIGÊNCIA ARTIFICIAL (IA DA MÁQUINA DOS RISCOS AMBIENTAIS)
   ========================================================================== */

class RiskAI {
    constructor(game) {
        this.game = game;
    }

    // Retorna a melhor jogada segundo a dificuldade configurada
    getBestMove(difficulty = 'medium') {
        const legalMoves = this.game.getAllLegalMoves('risk');
        if (legalMoves.length === 0) return null;

        // Se houver apenas 1 jogada (ex: captura obrigatória), executa imediatamente
        if (legalMoves.length === 1) return legalMoves[0];

        if (difficulty === 'easy') {
            // Nível Fácil: Escolha aleatória com prioridade simples para capturas
            const captures = legalMoves.filter(m => m.capturedRow !== null);
            if (captures.length > 0) {
                return captures[Math.floor(Math.random() * captures.length)];
            }
            return legalMoves[Math.floor(Math.random() * legalMoves.length)];
        }

        const depth = difficulty === 'hard' ? 4 : 2;
        let bestMove = null;
        let bestScore = -Infinity;

        for (const move of legalMoves) {
            // Simular a jogada em uma cópia do tabuleiro
            const boardCopy = this.cloneBoard(this.game.board);
            this.applySimulatedMove(boardCopy, move);

            const score = this.minimax(boardCopy, depth - 1, false, -Infinity, Infinity);
            if (score > bestScore) {
                bestScore = score;
                bestMove = move;
            }
        }

        return bestMove || legalMoves[0];
    }

    minimax(board, depth, isMaximizing, alpha, beta) {
        if (depth === 0) {
            return this.evaluateBoard(board);
        }

        const currentSide = isMaximizing ? 'risk' : 'sst';
        const legalMoves = this.game.getAllLegalMoves(currentSide, board);

        if (legalMoves.length === 0) {
            return isMaximizing ? -1000 : 1000;
        }

        if (isMaximizing) {
            let maxEval = -Infinity;
            for (const move of legalMoves) {
                const boardCopy = this.cloneBoard(board);
                this.applySimulatedMove(boardCopy, move);
                const evalVal = this.minimax(boardCopy, depth - 1, false, alpha, beta);
                maxEval = Math.max(maxEval, evalVal);
                alpha = Math.max(alpha, evalVal);
                if (beta <= alpha) break; // Alpha-Beta Pruning
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            for (const move of legalMoves) {
                const boardCopy = this.cloneBoard(board);
                this.applySimulatedMove(boardCopy, move);
                const evalVal = this.minimax(boardCopy, depth - 1, true, alpha, beta);
                minEval = Math.min(minEval, evalVal);
                beta = Math.min(beta, evalVal);
                if (beta <= alpha) break; // Alpha-Beta Pruning
            }
            return minEval;
        }
    }

    // Função de Avaliação Heurística do Tabuleiro
    evaluateBoard(board) {
        let score = 0;

        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const p = board[r][c];
                if (p) {
                    let pieceValue = p.isKing ? 25 : 10;

                    // Bônus de Posição Estratégica (Centro do tabuleiro)
                    if (r >= 2 && r <= 5 && c >= 2 && c <= 5) {
                        pieceValue += 2;
                    }

                    // Bônus de Proteção nas Bordas (Peças nas colunas 0 ou 7 não podem ser capturadas pelas laterais)
                    if (c === 0 || c === 7) {
                        pieceValue += 1.5;
                    }

                    // Bônus de Avanço (Riscos avançando em direção à promoção Dama)
                    if (p.side === 'risk' && !p.isKing) {
                        pieceValue += (r * 0.5);
                    } else if (p.side === 'sst' && !p.isKing) {
                        pieceValue += ((7 - r) * 0.5);
                    }

                    if (p.side === 'risk') {
                        score += pieceValue;
                    } else {
                        score -= pieceValue;
                    }
                }
            }
        }

        return score;
    }

    cloneBoard(board) {
        return board.map(row => row.map(cell => cell ? { ...cell } : null));
    }

    applySimulatedMove(board, move) {
        const { fromRow, fromCol, toRow, toCol, capturedRow, capturedCol } = move;
        const p = board[fromRow][fromCol];

        board[toRow][toCol] = p;
        board[fromRow][fromCol] = null;

        if (capturedRow !== null && capturedCol !== null) {
            board[capturedRow][capturedCol] = null;
        }

        if (!p.isKing) {
            if ((p.side === 'sst' && toRow === 0) || (p.side === 'risk' && toRow === 7)) {
                p.isKing = true;
            }
        }
    }
}
