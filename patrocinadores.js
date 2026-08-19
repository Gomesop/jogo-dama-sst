/* Prévias comerciais da Dama SST — uma por empresa prospectada.
   Acesse com ?p=<slug>. Todas nascem com `previa: true`: o selo diz
   "Espaço reservado para <Empresa>" e a tela explica que não há patrocínio
   firmado. Ao fechar contrato, remova `previa` e troque a marca tipográfica
   provisória pelo logotipo oficial enviado pela empresa.

   Textos derivados do que cada site realmente diz. Cores aproximadas por
   segmento: nenhum dos sites declara theme-color. */

window.HS_PATROCINADORES = {
  sq5: {
    marca: 'SQ5 Segurança + Qualidade', iniciais: 'SQ', segmento: 'Consultoria em SST · Vinhedo/SP',
    tagline: 'Inteligência que protege a vida de quem trabalha.',
    claim: 'PGR, PCMSO, laudos técnicos, treinamentos de NR e gestão de segurança do trabalho.',
    beneficios: ['PGR e PCMSO', 'Laudos técnicos', 'Treinamentos de NR'],
    cta: 'Conhecer a SQ5', url: 'https://www.sq5.com.br',
    cor1: '#0b3d6b', cor2: '#1565c0', cor3: '#38bdf8', previa: true
  },
  mna: {
    marca: 'MN&A Gestão Ocupacional', iniciais: 'MA', segmento: 'Consultoria em segurança do trabalho',
    tagline: 'Prevenção que reduz acidente e custo, não só papel.',
    claim: 'Consultoria prática em segurança do trabalho, com foco em conformidade legal e redução de acidentes.',
    beneficios: ['Prevenção de acidentes', 'Conformidade legal', 'Redução de custos'],
    cta: 'Conhecer a MN&A', url: 'https://mnaconsultoria.com.br',
    cor1: '#12324f', cor2: '#1d6fa5', cor3: '#5eead4', previa: true
  },
  camargodantas: {
    marca: 'Camargo Dantas', iniciais: 'CD', segmento: 'Medicina e segurança do trabalho',
    tagline: 'Engenharia de segurança feita por quem assina o laudo.',
    claim: 'Medicina e segurança do trabalho desde 2015, com equipe técnica própria e treinamentos de NR.',
    beneficios: ['Medicina do trabalho', 'Treinamentos de NR', 'Laudos e programas'],
    cta: 'Conhecer a Camargo Dantas', url: 'https://www.camargodantas.com.br',
    cor1: '#0f2f45', cor2: '#1f7a8c', cor3: '#7dd3fc', previa: true
  },
  altaseg: {
    marca: 'Altaseg Engenharia', iniciais: 'AE', segmento: 'Gestão e segurança do trabalho',
    tagline: 'As NRs cumpridas de ponta a ponta, sem pendência.',
    claim: 'Serviços de segurança e saúde ocupacional exigidos pelas NRs, do programa ao envio ao eSocial.',
    beneficios: ['PGR e PCMSO', 'eSocial SST', 'Saúde ocupacional'],
    cta: 'Conhecer a Altaseg', url: 'https://www.altasegrp.com.br',
    cor1: '#13293d', cor2: '#2a6f97', cor3: '#61a5c2', previa: true
  },
  metta: {
    marca: 'Grupo Metta', iniciais: 'GM', segmento: 'Segurança do trabalho e meio ambiente',
    tagline: 'Consciência sobre a vida e sobre o meio ambiente.',
    claim: 'Orientar, adequar e despertar a empresa para a proteção da vida e do meio ambiente.',
    beneficios: ['Segurança do trabalho', 'Meio ambiente', 'Adequação legal'],
    cta: 'Conhecer o Grupo Metta', url: 'https://www.grupometta.com.br',
    cor1: '#14532d', cor2: '#16a34a', cor3: '#a3e635', previa: true
  },
  excelencia: {
    marca: 'Excelência Segurança do Trabalho', iniciais: 'EX', segmento: 'Engenharia e medicina do trabalho · Curitiba/PR',
    tagline: 'Treinamento de NR que o trabalhador leva para a operação.',
    claim: 'Engenharia e medicina do trabalho com consultoria, cursos e treinamentos no Paraná e em Santa Catarina.',
    beneficios: ['Cursos e treinamentos', 'Medicina do trabalho', 'Consultoria em SST'],
    cta: 'Conhecer a Excelência', url: 'https://www.excelenciaseguranca.com.br',
    cor1: '#0b3d6b', cor2: '#1565c0', cor3: '#93c5fd', previa: true
  },
  valemed: {
    marca: 'ValeMed', iniciais: 'VM', segmento: 'Saúde e segurança do trabalho · SC e PR',
    tagline: 'Documentação de SST em dia, sem correria no fechamento.',
    claim: 'LTCAT, PPP, ASO, laudos e eSocial para empresas em Santa Catarina, Paraná e demais estados.',
    beneficios: ['LTCAT e PPP', 'ASO e exames', 'eSocial SST'],
    cta: 'Conhecer a ValeMed', url: 'https://www.valemedbrasil.com.br',
    cor1: '#0e3b43', cor2: '#12808f', cor3: '#67e8f9', previa: true
  },
  rpferreira: {
    marca: 'RP Ferreira Consultoria', iniciais: 'RP', segmento: 'Treinamentos de NR e consultoria',
    tagline: 'NR-11, NR-33, NR-35: turma formada e certificado válido.',
    claim: 'Treinamentos de normas regulamentadoras e consultoria em segurança do trabalho em todo o estado de São Paulo.',
    beneficios: ['Treinamentos de NR', 'Espaço confinado', 'Trabalho em altura'],
    cta: 'Conhecer a RP Ferreira', url: 'https://rpferreiraconsultoria.com.br',
    cor1: '#1e293b', cor2: '#0284c7', cor3: '#7dd3fc', previa: true
  },
  reviver: {
    marca: 'Grupo Reviver Saúde', iniciais: 'RS', segmento: 'Medicina e segurança do trabalho · PR',
    tagline: 'Trinta anos cuidando de quem faz a operação acontecer.',
    claim: 'Medicina e segurança do trabalho desde 1995, com estrutura própria para exames e programas legais.',
    beneficios: ['Exames ocupacionais', 'PCMSO e PGR', 'Mais de 30 anos'],
    cta: 'Conhecer a Reviver Saúde', url: 'https://www.reviversaude.com.br',
    cor1: '#134e4a', cor2: '#0d9488', cor3: '#5eead4', previa: true
  },
  leal: {
    marca: 'Leal Consultoria Ambiental', iniciais: 'LA', segmento: 'Licenciamento ambiental · BA',
    tagline: 'Licença ambiental sem surpresa no meio da obra.',
    claim: 'Rigor técnico e compromisso com a sustentabilidade na regularização de empreendimentos na Bahia.',
    beneficios: ['Licenciamento ambiental', 'Regularização', 'Acompanhamento'],
    cta: 'Conhecer a Leal', url: 'https://www.lealconsultoriaambiental.com.br',
    cor1: '#14532d', cor2: '#22c55e', cor3: '#bef264', previa: true
  },
  pernambucoambiental: {
    marca: 'Pernambuco Ambiental', iniciais: 'PA', segmento: 'Consultoria ambiental · PE',
    tagline: 'Do protocolo à licença, acompanhando cada exigência.',
    claim: 'Consultoria ambiental pernambucana com atuação na Região Metropolitana do Recife e no interior do estado.',
    beneficios: ['Licenciamento ambiental', 'Estudos e laudos', 'Atuação em todo o PE'],
    cta: 'Conhecer a Pernambuco Ambiental', url: 'https://pernambucoambiental.com.br',
    cor1: '#134e2a', cor2: '#15803d', cor3: '#86efac', previa: true
  },
  ambientalbahia: {
    marca: 'Ambiental Bahia', iniciais: 'AB', segmento: 'Assessoria ambiental · Porto Seguro/BA',
    tagline: 'Solução sustentável que cabe no cronograma do projeto.',
    claim: 'Assessoria ambiental para empresas e projetos em Porto Seguro e região, incluindo gestão de resíduos.',
    beneficios: ['Gestão de resíduos', 'Assessoria ambiental', 'Projetos sustentáveis'],
    cta: 'Conhecer a Ambiental Bahia', url: 'https://ambientalbahia.com',
    cor1: '#0f5132', cor2: '#198754', cor3: '#a7f3d0', previa: true
  },
  wes: {
    marca: 'WES Ergonomia', iniciais: 'WE', segmento: 'Ergonomia e higiene ocupacional',
    tagline: 'AET que vira ação, não relatório de gaveta.',
    claim: 'Ergonomia e higiene ocupacional desde 1992, com trabalho personalizado para cada posto de trabalho.',
    beneficios: ['AET e NR-17', 'Higiene ocupacional', 'Mais de 30 anos'],
    cta: 'Conhecer a WES', url: 'https://www.wesergonomia.com.br',
    cor1: '#1e1b4b', cor2: '#4f46e5', cor3: '#a5b4fc', previa: true
  },
  highquality: {
    marca: 'High Quality', iniciais: 'HQ', segmento: 'Ergonomia e qualidade de vida · Barueri/SP',
    tagline: 'Qualidade de vida medida, não presumida.',
    claim: 'Mais de 20 anos em qualidade de vida, ergonomia e segurança do trabalho, com laudos em todo o país.',
    beneficios: ['Laudo ergonômico', 'Insalubridade', 'Qualidade de vida'],
    cta: 'Conhecer a High Quality', url: 'https://highquality.com.br',
    cor1: '#3b0764', cor2: '#7e22ce', cor3: '#d8b4fe', previa: true
  },
  biopreve: {
    marca: 'Biopreve', iniciais: 'BP', segmento: 'Treinamentos e brigada de incêndio · MT',
    tagline: 'Brigada que sabe o que fazer nos primeiros três minutos.',
    claim: 'Credenciada ao Corpo de Bombeiros e ao CREA-MT para formação de brigada, NR-33, NR-35 e demais NRs.',
    beneficios: ['Brigada de incêndio', 'Espaço confinado', 'Trabalho em altura'],
    cta: 'Conhecer a Biopreve', url: 'https://bioprevemt.com.br',
    cor1: '#7c2d12', cor2: '#ea580c', cor3: '#fdba74', previa: true
  },
  tecnoseg: {
    marca: 'Tecnoseg', iniciais: 'TS', segmento: 'Gestão de SST e treinamentos de NR',
    tagline: 'Treinamento com fogo real, não com slide.',
    claim: 'Centro de treinamento com fogo real, casa de fumaça e simuladores, além de gestão de SST e cursos de NR.',
    beneficios: ['Brigada de incêndio', 'Treinamentos de NR', 'Gestão de SST'],
    cta: 'Conhecer a Tecnoseg', url: 'https://www.consultoriatecnoseg.com.br',
    cor1: '#7f1d1d', cor2: '#dc2626', cor3: '#fca5a5', previa: true
  },
  pms: {
    marca: 'PMS Consultoria', iniciais: 'PM', segmento: 'Treinamentos e equipamentos contra incêndio',
    tagline: 'Brigada formada e equipamento pronto para usar.',
    claim: 'Consultoria, treinamentos, mão de obra e equipamentos contra incêndio: NR-23, NR-05, NR-33 e NR-35.',
    beneficios: ['Brigada e NR-23', 'CIPA e NR-05', 'Equipamentos'],
    cta: 'Conhecer a PMS', url: 'https://pmsconsultoria.com.br',
    cor1: '#7c2d12', cor2: '#c2410c', cor3: '#fed7aa', previa: true
  },
  cdo: {
    marca: 'CDO Ocupacional', iniciais: 'CO', segmento: 'Medicina e segurança do trabalho · Londrina/PR',
    tagline: 'PCMSO gerenciado, sem exame vencido passando batido.',
    claim: 'Gestão de PCMSO, ASO, exames ocupacionais e consultoria para empresas em todo o Brasil.',
    beneficios: ['Gestão de PCMSO', 'Exames e ASO', 'eSocial SST'],
    cta: 'Conhecer a CDO', url: 'https://www.cdoocupacional.com.br',
    cor1: '#0c4a6e', cor2: '#0284c7', cor3: '#7dd3fc', previa: true
  },
  sanmedi: {
    marca: 'SanMedi', iniciais: 'SM', segmento: 'Saúde ocupacional e eSocial',
    tagline: 'O evento chega no eSocial no prazo, todo mês.',
    claim: 'Gestão de dados do eSocial, PGR, LTCAT e exames ocupacionais com preço competitivo.',
    beneficios: ['eSocial SST', 'PGR e LTCAT', 'Exames ocupacionais'],
    cta: 'Conhecer a SanMedi', url: 'https://www.sanmedi.com.br',
    cor1: '#0f3d3e', cor2: '#0e7490', cor3: '#67e8f9', previa: true
  },
  labortec: {
    marca: 'Labortec', iniciais: 'LT', segmento: 'Consultoria em SST e exames',
    tagline: 'Programa legal implantado, não apenas entregue.',
    claim: 'Elaboração e implementação dos programas legais de segurança e saúde exigidos do empregador.',
    beneficios: ['Programas legais', 'Exames ocupacionais', 'Consultoria em SST'],
    cta: 'Conhecer a Labortec', url: 'https://www.labortecconsultoria.com.br',
    cor1: '#1e293b', cor2: '#0369a1', cor3: '#7dd3fc', previa: true
  },
  medicinal: {
    marca: 'Medicinal', iniciais: 'MD', segmento: 'Medicina do trabalho · Ribeirão Preto/SP',
    tagline: 'Agilidade em medicina do trabalho e eSocial em dia.',
    claim: 'Estrutura completa para exames admissional, demissional e periódico, com adequação ao eSocial.',
    beneficios: ['Exames ocupacionais', 'eSocial', 'Estrutura própria'],
    cta: 'Conhecer a Medicinal', url: 'https://www.medicinalrp.com.br',
    cor1: '#134e4a', cor2: '#0d9488', cor3: '#99f6e4', previa: true
  },
  upper: {
    marca: 'Upper Medicina e Segurança do Trabalho', iniciais: 'UP', segmento: 'Medicina integrada e SST',
    tagline: 'Medicina do trabalho e NR-01 no mesmo fornecedor.',
    claim: 'Medicina integrada, exames ocupacionais e segurança do trabalho com foco na NR-01.',
    beneficios: ['Medicina do trabalho', 'Exames', 'NR-01'],
    cta: 'Conhecer a Upper', url: 'https://www.upper.med.br',
    cor1: '#1e1b4b', cor2: '#4338ca', cor3: '#c7d2fe', previa: true
  },
  ocupacional: {
    marca: 'Ocupacional', iniciais: 'OC', segmento: 'Saúde e segurança do trabalho · BH e Contagem/MG',
    tagline: 'Referência em SST na região desde 1990.',
    claim: 'Soluções completas em saúde e segurança do trabalho para empresas de todos os portes.',
    beneficios: ['Gestão de SST', 'Medicina do trabalho', 'Desde 1990'],
    cta: 'Conhecer a Ocupacional', url: 'https://ocupacional.com.br',
    cor1: '#0b3d6b', cor2: '#1565c0', cor3: '#93c5fd', previa: true
  },
  spepi: {
    marca: 'SP EPI', iniciais: 'SE', segmento: 'Equipamentos de proteção individual',
    tagline: 'O EPI certo chega antes da auditoria.',
    claim: 'Equipamentos de segurança com pronta entrega e orientação técnica para a indústria.',
    beneficios: ['Linha completa de EPI', 'Pronta entrega', 'Orientação técnica'],
    cta: 'Conhecer a SP EPI', url: 'https://www.spepi.com.br',
    cor1: '#78350f', cor2: '#d97706', cor3: '#fcd34d', previa: true
  },
  gruepi: {
    marca: 'GRUEPI', iniciais: 'GE', segmento: 'Soluções em EPI e proteção',
    tagline: 'EPI certificado, com quem sabe indicar o CA correto.',
    claim: 'Equipamentos de proteção individual certificados, com orientação técnica e entrega rápida.',
    beneficios: ['EPI certificado', 'Orientação técnica', 'Entrega rápida'],
    cta: 'Conhecer a GRUEPI', url: 'https://www.gruepi.com.br',
    cor1: '#7c2d12', cor2: '#ea580c', cor3: '#fed7aa', previa: true
  },
  visaoambiental: {
    marca: 'Visão Ambiental', iniciais: 'VA', segmento: 'Consultoria e gestão ambiental',
    tagline: 'Gestão ambiental que a auditoria consegue conferir.',
    claim: 'Consultoria e gestão ambiental para empresas, do diagnóstico ao acompanhamento das condicionantes.',
    beneficios: ['Gestão ambiental', 'Licenciamento', 'Monitoramento'],
    cta: 'Conhecer a Visão Ambiental', url: 'https://www.visaoambiental.com.br',
    cor1: '#14532d', cor2: '#16a34a', cor3: '#bbf7d0', previa: true
  },
  multisst: {
    marca: 'MultiSST', iniciais: 'MS', segmento: 'Software de gestão de SST',
    tagline: 'Toda a documentação de SST em um lugar só.',
    claim: 'PGR, laudos, ASOs e fichas de EPI centralizados, com controle de validade e conformidade com a NR-01.',
    beneficios: ['Documentação unificada', 'Controle de validade', 'Conformidade NR-01'],
    cta: 'Conhecer a MultiSST', url: 'https://multisst.com.br',
    cor1: '#111827', cor2: '#2563eb', cor3: '#93c5fd', previa: true
  },
  carneiropires: {
    marca: 'Carneiro Pires', iniciais: 'CP', segmento: 'Medicina e segurança do trabalho',
    tagline: 'Ambiente seguro é projeto, não sorte.',
    claim: 'Equipe de especialistas dedicada a criar ambientes de trabalho seguros e saudáveis.',
    beneficios: ['Medicina do trabalho', 'Segurança do trabalho', 'eSocial SST'],
    cta: 'Conhecer a Carneiro Pires', url: 'https://www.carneiropires.com.br',
    cor1: '#0f2f45', cor2: '#1f7a8c', cor3: '#a5f3fc', previa: true
  },
  sso: {
    marca: 'SSO Ocupacional', iniciais: 'SO', segmento: 'Laudos e saúde ocupacional · PR, RS e SC',
    tagline: 'LTCAT feito por quem vai ao posto de trabalho.',
    claim: 'Elaboração de LTCAT e laudos técnicos para empresas no Paraná, Rio Grande do Sul e Santa Catarina.',
    beneficios: ['LTCAT e laudos', 'Saúde ocupacional', 'Três estados do Sul'],
    cta: 'Conhecer a SSO', url: 'https://www.ssoocupacional.com.br',
    cor1: '#1e293b', cor2: '#0e7490', cor3: '#67e8f9', previa: true
  },
  philipin: {
    marca: 'Philipin Engenharia', iniciais: 'PH', segmento: 'Treinamentos de NR · SP',
    tagline: 'Norma explicada por engenheiro, no chão da fábrica.',
    claim: 'Treinamentos de segurança do trabalho com foco nas normas regulamentadoras, em todo o estado de São Paulo.',
    beneficios: ['Treinamentos de NR', 'Engenharia de segurança', 'Turmas na empresa'],
    cta: 'Conhecer a Philipin', url: 'https://philipinengenharia.com.br',
    cor1: '#172554', cor2: '#1d4ed8', cor3: '#93c5fd', previa: true
  }
};
