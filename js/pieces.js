/* ==========================================================================
   REGISTRO, SVG HD ANIMADOS E NARRATIVAS DE CAMPO (SST VS RISCOS)
   ========================================================================== */

const PIECES_DATA = {
    // ----------------------------------------------------------------------
    // PEÇAS DO JOGADOR: EQUIPE DE SAÚDE, SEGURANÇA E MEIO AMBIENTE (SST)
    // ----------------------------------------------------------------------
    sst: {
        tsst: {
            name: "Técnico de Segurança",
            role: "Inspeção e Conformidade",
            desc: "Profissional responsável por orientar, inspecionar o cumprimento de EPIs e garantir normas de segurança.",
            tip: "💡 Realize DDS (Diálogo Diário de Segurança) antes de iniciar qualquer atividade de alto risco.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Rosto do Técnico -->
                    <circle cx="50" cy="52" r="22" fill="#fed7aa" stroke="#fdba74" stroke-width="1.5"/>
                    <circle cx="43" cy="50" r="2.5" fill="#1e293b"/>
                    <circle cx="57" cy="50" r="2.5" fill="#1e293b"/>
                    <path d="M44 59 C47 62 53 62 56 59" stroke="#9a3412" stroke-width="2" stroke-linecap="round"/>
                    
                    <!-- Capacete de Segurança VERDE HD -->
                    <path d="M18 45 C18 20 82 20 82 45 Z" fill="#16a34a" stroke="#14532d" stroke-width="3"/>
                    <path d="M12 45 C12 43 18 42 50 42 C82 42 88 43 88 45 C88 48 82 49 50 49 C18 49 12 48 12 45 Z" fill="#15803d" stroke="#14532d" stroke-width="2"/>
                    <rect x="42" y="24" width="16" height="12" rx="3" fill="#22c55e"/>
                    <path d="M50 27 V33 M47 30 H53" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>

                    <!-- Prancheta com Checkmark -->
                    <g transform="translate(60, 55)">
                        <rect x="0" y="0" width="22" height="28" rx="3" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
                        <rect x="5" y="-3" width="12" height="5" rx="1" fill="#94a3b8"/>
                        <path d="M4 8 L8 12 L18 4" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="4" y1="16" x2="18" y2="16" stroke="#94a3b8" stroke-width="2"/>
                        <line x1="4" y1="21" x2="14" y2="21" stroke="#94a3b8" stroke-width="2"/>
                    </g>
                </svg>
            `
        },
        enfermeira: {
            name: "Enfermeira do Trabalho",
            role: "Saúde Ocupacional",
            desc: "Especialista no atendimento de emergências medicinais, primeiros socorros e exames periódicos.",
            tip: "💡 Mantenha o estojo de Primeiros Socorros sempre equipado e com a validade em dia.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Rosto Feminino Enfermeira -->
                    <path d="M28 48 C28 30 72 30 72 48 C72 68 62 78 50 78 C38 78 28 68 28 48 Z" fill="#fecdd3"/>
                    <circle cx="50" cy="50" r="20" fill="#fed7aa"/>
                    <circle cx="43" cy="48" r="2.5" fill="#1e293b"/>
                    <circle cx="57" cy="48" r="2.5" fill="#1e293b"/>
                    <path d="M45 56 C48 59 52 59 55 56" stroke="#e11d48" stroke-width="2" stroke-linecap="round"/>

                    <!-- Chapéu de Enfermagem Branco HD -->
                    <path d="M25 40 L50 20 L75 40 L66 48 L34 48 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="44" y="27" width="12" height="12" rx="2" fill="#ef4444"/>
                    <path d="M50 29 V37 M46 33 H54" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>

                    <!-- Estetoscópio & Pulso ECG Animado -->
                    <path d="M32 60 C32 75 68 75 68 60" stroke="#0284c7" stroke-width="3" fill="none"/>
                    <circle cx="50" cy="74" r="5" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
                    <path class="anim-ecg" d="M12 85 L28 85 L33 72 L38 94 L43 78 L48 88 L88 88" stroke="#ef4444" stroke-width="3" fill="none"/>
                </svg>
            `
        },
        ambiental: {
            name: "Analista Ambiental",
            role: "Sustentabilidade & Meio Ambiente",
            desc: "Cuida da gestão de resíduos, prevenção de poluição e preservação dos recursos naturais da empresa.",
            tip: "💡 Segregue corretamente os resíduos perigosos para evitar contaminação do solo e da água.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Cabelo Castanho / Silhueta da Mulher -->
                    <path d="M25 46 C25 22 75 22 75 46 C78 65 74 82 66 88 H34 C26 82 22 65 25 46 Z" fill="#451a03"/>
                    <!-- Rosto Feminino -->
                    <circle cx="50" cy="44" r="18" fill="#fed7aa"/>
                    <!-- Franja de Cabelo -->
                    <path d="M32 38 C40 28 60 28 68 38 C58 32 42 32 32 38 Z" fill="#451a03"/>
                    <circle cx="43" cy="44" r="2.5" fill="#1e293b"/>
                    <circle cx="57" cy="44" r="2.5" fill="#1e293b"/>
                    <path d="M45 52 C48 55 52 55 55 52" stroke="#b45309" stroke-width="2" stroke-linecap="round"/>

                    <!-- Mulher Segurando uma Planta Verde Animada -->
                    <g class="anim-eco" transform="translate(0, 10)">
                        <path d="M50 48 C68 56 68 76 50 86 C32 76 32 56 50 48 Z" fill="#10b981" stroke="#047857" stroke-width="2.5"/>
                        <path d="M50 48 V86" stroke="#a7f3d0" stroke-width="2"/>
                        <path d="M50 60 L62 53 M50 72 L64 65 M50 66 L38 60" stroke="#a7f3d0" stroke-width="2" stroke-linecap="round"/>
                    </g>
                </svg>
            `
        },
        cipeiro: {
            name: "Cipeiro (Comissão da CIPA)",
            role: "Representante dos Trabalhadores",
            desc: "Membro eleito da CIPA encarregado de investigar incidentes e propor melhorias contínuas de segurança.",
            tip: "💡 Relate quase-acidentes à CIPA para prevenir futuros eventos graves.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Escudo CIPA Oficial HD: Círculo Branco com Cruz Verde no Meio -->
                    <circle cx="50" cy="50" r="38" fill="#ffffff" stroke="#15803d" stroke-width="5" class="anim-cipa"/>
                    <circle cx="50" cy="50" r="32" fill="#ffffff" stroke="#22c55e" stroke-width="2"/>
                    <!-- Cruz Verde Centrada -->
                    <path d="M50 20 V80 M20 50 H80" stroke="#16a34a" stroke-width="14" stroke-linecap="square"/>
                    <path d="M50 22 V78 M22 50 H78" stroke="#15803d" stroke-width="4" stroke-linecap="square" opacity="0.3"/>
                    <!-- Detalhe Central de Destaque -->
                    <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
                </svg>
            `
        },
        brigadista: {
            name: "Brigadista de Emergência",
            role: "Combate a Incêndio & Resgate",
            desc: "Treinado para atuar rapidamente em evacuações de área, principio de incêndio e pânico.",
            tip: "💡 Conheça as rotas de fuga e mantenha as saídas de emergência desobstruídas.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Capacete de Bombeiro/Brigadista Vermelho HD -->
                    <path d="M20 46 C20 22 80 22 80 46 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3"/>
                    <path d="M12 46 C12 44 18 43 50 43 C82 43 88 44 88 46 C88 49 82 50 50 50 C18 50 12 49 12 46 Z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
                    <!-- Crista do Capacete -->
                    <path d="M46 18 H54 V36 H46 Z" fill="#f59e0b"/>

                    <!-- Escudo com Chama Sob Controle -->
                    <g transform="translate(0, 10)">
                        <path d="M50 42 L72 54 V68 C72 80 50 90 50 90 C50 90 28 80 28 68 V54 Z" fill="#0284c7" stroke="#ffffff" stroke-width="2.5"/>
                        <path d="M50 54 C55 60 62 66 58 74 C54 80 44 80 41 74 C38 66 45 60 50 54 Z" fill="#fbbf24"/>
                        <path d="M50 62 C52 65 56 68 54 72 C52 75 47 75 45 72 C44 68 48 65 50 62 Z" fill="#ef4444"/>
                    </g>
                </svg>
            `
        },
        engenheiro: {
            name: "Engenheiro de Segurança",
            role: "Projetos & Proteção Coletiva (EPC)",
            desc: "Responsável por adequação técnica de máquinas (NR-12), Laudos Ergonômicos e Proteções Coletivas.",
            tip: "💡 Proteção Coletiva (EPC) deve sempre ser priorizada em relação à Proteção Individual (EPI).",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Rosto Engenheiro -->
                    <circle cx="50" cy="52" r="22" fill="#fed7aa" stroke="#fdba74" stroke-width="1.5"/>
                    <circle cx="43" cy="50" r="2.5" fill="#1e293b"/>
                    <circle cx="57" cy="50" r="2.5" fill="#1e293b"/>
                    <path d="M45 59 C48 61 52 61 55 59" stroke="#9a3412" stroke-width="2" stroke-linecap="round"/>

                    <!-- Capacete de Segurança BRANCO HD -->
                    <path d="M18 45 C18 20 82 20 82 45 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>
                    <path d="M12 45 C12 43 18 42 50 42 C82 42 88 43 88 45 C88 48 82 49 50 49 C18 49 12 48 12 45 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
                    <rect x="42" y="24" width="16" height="12" rx="3" fill="#0284c7"/>
                    <path d="M46 30 L54 30 M50 26 V34" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>

                    <!-- Óculos de Proteção Amplo com Reflexo -->
                    <rect x="28" y="44" width="44" height="16" rx="6" fill="#38bdf8" fill-opacity="0.65" stroke="#0284c7" stroke-width="2"/>
                    <line x1="32" y1="48" x2="68" y2="48" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
                </svg>
            `
        }
    },

    // ----------------------------------------------------------------------
    // PEÇAS DA MÁQUINA: RISCOS E PERIGOS OCUPACIONAIS
    // ----------------------------------------------------------------------
    risk: {
        fogo: {
            name: "Incêndio / Fogo",
            role: "Risco de Queimadura & Pânico",
            desc: "Princípio de incêndio por sobrecarga elétrica ou faíscas perto de inflamáveis.",
            tip: "🛡️ Ação: Use o extintor adequado (Água, Pó Químico ou CO2) conforme a classe do fogo.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g class="anim-flame">
                        <path d="M50 12 C68 32 86 52 78 74 C70 92 30 92 22 74 C14 52 32 32 50 12 Z" fill="#ef4444"/>
                        <path d="M50 30 C62 42 72 58 66 72 C60 82 40 82 34 72 C28 58 38 42 50 30 Z" fill="#f97316"/>
                        <path d="M50 46 C56 54 62 65 58 72 C54 79 46 79 42 72 C38 65 44 54 50 46 Z" fill="#facc15"/>
                    </g>
                </svg>
            `
        },
        raio: {
            name: "Choque Elétrico / Alta Tensão",
            role: "Risco de Parada Cardíaca & Fibrilação",
            desc: "Contato com painéis elétricos sem aterramento ou sem bloqueio de segurança (Lockout/Tagout).",
            tip: "🛡️ Ação: Aplique procedimentos LOTO (Bloqueio Elétrico) antes de qualquer manutenção.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon class="anim-spark" points="56,12 24,52 48,52 36,90 76,42 52,42" fill="#facc15" stroke="#ca8a04" stroke-width="2.5"/>
                </svg>
            `
        },
        fio: {
            name: "Fio Desencapado",
            role: "Risco de Curto-Circuito",
            desc: "Cabos elétricos desgastados expostos a superfícies metálicas ou umidade.",
            tip: "🛡️ Ação: Substitua fiações danificadas e isole cabos elétricos imediatamente.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 50 H38 M62 50 H88" stroke="#ef4444" stroke-width="9" stroke-linecap="round"/>
                    <path d="M38 50 L46 42 M38 50 L46 58" stroke="#fbbf24" stroke-width="4"/>
                    <path d="M62 50 L54 42 M62 50 L54 58" stroke="#fbbf24" stroke-width="4"/>
                    <circle cx="50" cy="50" r="12" fill="#facc15" class="anim-spark"/>
                </svg>
            `
        },
        quimico: {
            name: "Vazamento Químico",
            role: "Risco de Intoxicação & Queimadura",
            desc: "Derramamento de substância corrosiva ou tóxica sem contenção adequada.",
            tip: "🛡️ Ação: Consulte a FISPQ / FDS do produto e use luvas e respiradores adequados.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 28 H65 V38 L76 74 C78 82 72 88 60 88 H40 C28 88 22 82 24 74 L35 38 Z" fill="#84cc16" fill-opacity="0.45" stroke="#65a30d" stroke-width="3"/>
                    <circle cx="50" cy="64" r="8" fill="#ffffff"/>
                    <circle cx="46.5" cy="62.5" r="2" fill="#000"/>
                    <circle cx="53.5" cy="62.5" r="2" fill="#000"/>
                    <path d="M46 68 H54" stroke="#000" stroke-width="1.5"/>
                </svg>
            `
        },
        queda: {
            name: "Queda em Altura",
            role: "Risco de Fratura Severa / Fatalidade",
            desc: "Trabalho acima de 2 metros (NR-35) sem cinto de segurança do tipo paraquedista e linha de vida.",
            tip: "🛡️ Ação: Inspecione o cinto, linha de vida e ancoragem antes de subir em andaimes ou escadas.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50,15 88,82 12,82" fill="#f59e0b" stroke="#b45309" stroke-width="3.5"/>
                    <circle cx="50" cy="42" r="5" fill="#000"/>
                    <path d="M50 47 L45 64 M50 47 L55 62 M50 54 L38 48 M50 54 L62 50" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
                </svg>
            `
        },
        maquina: {
            name: "Máquina Sem Proteção",
            role: "Risco de Prensamento & Esmagamento",
            desc: "Engrenagens e roletes giratórios sem proteção física de enclausuramento (NR-12).",
            tip: "🛡️ Ação: Nunca opere equipamentos sem as proteções fixas ou móveis de segurança instaladas.",
            renderSVG: () => `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="24" stroke="#ef4444" stroke-width="8" stroke-dasharray="12 10" class="anim-flame"/>
                    <circle cx="50" cy="50" r="11" fill="#ef4444"/>
                </svg>
            `
        }
    }
};

// ==========================================================================
// BANCO DE DADOS DE HISTÓRIAS DE CAMPO CRUZADAS (NARRATIVA EM TEMPO REAL)
// ==========================================================================

const CROSSED_STORIES = {
    // 1. TÉCNICO DE SEGURANÇA (tsst)
    tsst: {
        fogo: "🚨 O Técnico de Segurança identificou um princípio de incêndio! Ele isolou a área imediatamente e acionou a Brigada de Emergência para realizar o combate com extintores.",
        raio: "🚨 O Técnico de Segurança detectou um painel energizado aberto sem sinalização! Ele interrompeu a atividade e exigiu a instalação do bloqueio elétrico LOTO.",
        fio: "🚨 O Técnico de Segurança encontrou um cabo elétrico com isolamento rompido. Ele paralisou o trabalho na máquina e chamou a manutenção elétrica.",
        quimico: "🚨 O Técnico de Segurança flagrou um tambor com vazamento de solvente. Ele orientou a equipe a usar EPIs respiratórios e aplicar a serragem de contenção.",
        queda: "🚨 O Técnico de Segurança avistou um operário em cima do andaime sem cinto travado na linha de vida. Ele ordenou a parada imediata e ajustou a ancoragem (NR-35).",
        maquina: "🚨 O Técnico de Segurança inspecionou a prensa e viu a engrenagem desprotegida. Ele interditou o equipamento até a instalação da proteção fixa (NR-12).",
        default: "🔍 O Técnico de Segurança está fazendo a ronda preventiva pelo setor, verificando se todos os trabalhadores estão utilizando os EPIs corretamente."
    },

    // 2. ENFERMEIRA DO TRABALHO (enfermeira)
    enfermeira: {
        fogo: "🚨 A Enfermeira do Trabalho preparou a maca de resgate e o kit de tratamento para queimaduras caso alguém inale fumaça do incêndio.",
        raio: "🚨 A Enfermeira do Trabalho trouxe o Desfibrilador (DEA) e o kit de primeiros socorros ao saber do risco de choque elétrico grave na subestação.",
        fio: "🚨 A Enfermeira do Trabalho orientou a equipe sobre os sintomas de choque e queimadura elétrica, mantendo o ambulatório de prontidão.",
        quimico: "🚨 A Enfermeira do Trabalho atendeu o trabalhador exposto ao vapor químico, lavando os olhos no chuveiro de emergência e aplicando o protocolo de descontaminação.",
        queda: "🚨 A Enfermeira do Trabalho imobilizou a vítima de uma queda e prestou o atendimento inicial de primeiros socorros até a chegada da ambulância.",
        maquina: "🚨 A Enfermeira do Trabalho preparou torniquetes e curativos de contenção de hemorragias ao identificar o perigo de prensamento de membros na máquina.",
        default: "🩺 A Enfermeira do Trabalho está conferindo os estojos de primeiros socorros e acompanhando a saúde ocupacional dos colaboradores."
    },

    // 3. ANALISTA AMBIENTAL (ambiental)
    ambiental: {
        fogo: "🚨 A Analista Ambiental agiu rápido para conter a fumaça tóxica do incêndio e evitar que os resíduos do combate contaminem a rede de esgoto.",
        raio: "🚨 A Analista Ambiental verificou a integridade dos para-raios da fábrica para proteger a fauna e o ecossistema local de descargas elétricas.",
        fio: "🚨 A Analista Ambiental alertou que faíscas perto do depósito de resíduos orgânicos podem gerar gases inflamáveis e contaminação.",
        quimico: "🚨 A Analista Ambiental acionou o plano de contenção de derramamento com mantas absorventes para que o produto químico não atinja o solo nem os rios.",
        queda: "🚨 A Analista Ambiental supervisionou a manutenção em altura dos filtros de chaminé para garantir emissão limpa na atmosfera.",
        maquina: "🚨 A Analista Ambiental inspecionou o descarte do óleo lubrificante da máquina sem proteção para evitar vazamentos no meio ambiente.",
        default: "🌿 A Analista Ambiental está inspecionando a coleta seletiva de resíduos e auditando o cumprimento das licenças ambientais da empresa."
    },

    // 4. CIPEIRO (cipeiro)
    cipeiro: {
        fogo: "🚨 O Cipeiro notou que o extintor perto do fogo estava com o lacre violado e acionou a equipe de manutenção para substituição urgente.",
        raio: "🚨 O Cipeiro relatou na reunião da CIPA o risco de choque elétrico na tomada da oficina, solicitando aterramento imediato.",
        fio: "🚨 O Cipeiro identificou um fio desencapado no corredor de pedestres, sinalizou o local com cones e comunicou o setor de segurança.",
        quimico: "🚨 O Cipeiro verificou que o produto químico estava sem a etiqueta FISPQ/FDS e solicitou a identificação correta da substância.",
        queda: "🚨 O Cipeiro identificou a falta de guarda-corpo no mezanino e levou a proposta de instalação de proteção à diretoria na reunião mensal.",
        maquina: "🚨 O Cipeiro colheu relatos de quase-acidentes de prensamento e solicitou o enclausuramento urgente das engrenagens da máquina.",
        default: "🛡️ O Cipeiro está ouvindo as sugestões de segurança dos colegas de trabalho e preparando a pauta da próxima reunião da CIPA."
    },

    // 5. BRIGADISTA DE EMERGÊNCIA (brigadista)
    brigadista: {
        fogo: "🚨 O Brigadista de Emergência avançou com o extintor de CO2 e combateu o princípio de incêndio antes que as chamas se alastrassem!",
        raio: "🚨 O Brigadista de Emergência desligou a chave geral da subestação antes de iniciar o resgate da vítima do choque elétrico.",
        fio: "🚨 O Brigadista de Emergência isolou o perímetro com fita zebrada perto do cabo partido faiscante para evitar a aproximação de terceiros.",
        quimico: "🚨 O Brigadista de Emergência vestiu o traje nível A de proteção química e estancou a válvula do vazamento de gás tóxico.",
        queda: "🚨 O Brigadista de Emergência montou o sistema de resgate com cordas e tripé para evacuar o trabalhador suspenso pelo cinto de segurança.",
        maquina: "🚨 O Brigadista de Emergência acionou o botão de parada de emergência da máquina para liberar o mecanismo engrenado.",
        default: "🚒 O Brigadista de Emergência está checando a pressão dos extintores e inspecionando as mangueiras de hidrante e saídas de emergência."
    },

    // 6. ENGENHEIRO DE SEGURANÇA (engenheiro)
    engenheiro: {
        fogo: "🚨 O Engenheiro de Segurança projetou o sistema automatizado de sprinklers e detectores de fumaça para proteger todo o pavilhão fabril.",
        raio: "🚨 O Engenheiro de Segurança elaborou o laudo de SPDA (Para-raios) e assinou a ART de adequação dos quadros elétricos de alta tensão (NR-10).",
        fio: "🚨 O Engenheiro de Segurança especificou o cabeamento blindado e os disjuntores DR para eliminar o risco de fuga de corrente elétrica.",
        quimico: "🚨 O Engenheiro de Segurança projetou a bacia de contenção estanque e o sistema de exaustão localizada para vapores químicos perigosos.",
        queda: "🚨 O Engenheiro de Segurança calculou a linha de vida rígida em viga I e dimensionou a resistência dos pontos de ancoragem para trabalho em altura.",
        maquina: "🚨 O Engenheiro de Segurança elaborou a apreciação de riscos da NR-12 e implementou cortinas de luz e relés de segurança intertravados.",
        default: "👷‍♂️ O Engenheiro de Segurança está revisando o PGR (Programa de Gerenciamento de Riscos) e elaborando laudos técnicos de engenharia."
    }
};

// Função para retornar a Coroa da Dama
function renderCrownSVG(isKingSST) {
    return `<div class="king-crown">👑</div>`;
}
