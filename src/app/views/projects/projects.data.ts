import {ProjectsInterface} from './projects.interface';

export const projectsData: ProjectsInterface[] = [
  {
    projectName: 'Average Color',
    startDate: 'fev de 2025',
    endDate: 'fev de 2025',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/average-color/master/average-color.png',
    projectLink: 'https://github.com/Jhoncosta08/average-color',
    skills: ['HTML', 'CSS', 'javaScript'],
    description: 'Este sistema foi desenvolvido utilizando HTML, CSS e JavaScript puros, ' +
      'oferecendo uma solução simples e interativa para calcular a média de duas cores. ' +
      'A interface inclui um formulário com dois campos de seleção de cor, onde o usuário ' +
      'pode escolher as cores desejadas por meio de um seletor visual de cores. Após selecionar ' +
      'as cores, o usuário clica no botão "Calcular", e o sistema processa as informações, exibindo ' +
      'a cor resultante que corresponde à média das duas cores escolhidas. Este aplicativo é ' +
      'perfeito para designers e desenvolvedores que precisam combinar cores de maneira prática e visual.'
  },
  {
    projectName: 'School App',
    startDate: 'fev de 2025',
    endDate: 'fev de 2025',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/school-app/master/src/assets/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/school-app',
    skills: ['Vue.js', 'Vuetify', 'HTML', 'CSS', 'javaScript'],
    description: 'O projeto é um sistema de gerenciamento de alunos que ' +
      'permite registrar e visualizar informações sobre alunos, disciplinas e ' +
      'exames. Ele suporta operações CRUD para alunos (adicionar, visualizar e exibir notas),' +
      ' disciplinas (criar e listar disciplinas para atribuição de notas) e exames ' +
      '(atribuir, editar e excluir notas). A aplicação foi desenvolvida com Vue.js, ' +
      'utilizando Vuetify para uma interface moderna e responsiva, e Vue Router ' +
      'para o gerenciamento de rotas e navegação dentro do app.'
  },
  {
    projectName: 'Wallit',
    startDate: 'jan de 2024',
    endDate: 'fev de 2025',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQFkoj7LreCD-g/profile-treasury-image-shrink_1920_1920/B4DZUHfCF7GkAc-/0/1739587330884?e=1740870000&v=beta&t=7nC1QTcMt5WfMen25cYopU0ctoaHAAp4tFpYHIx-1kI',
    projectLink: 'https://www.wallit.app/',
    skills: [
      'Angular', 'Ionic', 'Node', 'javaScript',
      'TypeScript', 'MicroFrontend', 'PostgreSQL', 'Stripe',
      'AWS Cognito', 'Firebase', 'LazyLoading', 'API Restful',
      'Kibana', 'HTML', 'CSS', 'Jira'
    ],
    description: 'No projeto Wallit, atuei como frontend sênior, desenvolvendo três sistemas integrados ' +
      'com foco em usabilidade e tecnologia de ponta:\n' +
      '\n' +
      '1. Aplicativo de Carteira Digital: Sistema móvel em Angular com Ionic, ' +
      'permitindo gerenciamento de contas, cartões, saldo e benefícios, como gift ' +
      'cards e seguros. Integrado com Stripe para transações financeiras e ' +
      'AWS Cognito para autenticação.\n' +
      '\n' +
      '2. Super Admin: Desenvolvido em Angular e Node.js, permitia controle centralizado da ' +
      'plataforma, gerenciando permissões e acessos de alto nível para manter a segurança.\n' +
      '\n' +
      '3. Gerenciamento de Equipes: Também em Angular e Node.js, permitia a gestão de equipes, ' +
      'alocação de benefícios e relatórios detalhados via Kibana.\n' +
      '\n' +
      'O projeto utilizava Jira para gerenciamento de sprints e Confluence para documentação, ' +
      'com comunicação diária em inglês, o que fortaleceu minhas habilidades em ' +
      'liderança técnica e gestão de integrações complexas.'
  },
  {
    projectName: 'Mago do Treino',
    startDate: 'abr de 2024',
    endDate: 'jun de 2024',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/workout-wizard/master/src/assets/previews/preview-5.png',
    projectLink: 'https://github.com/Jhoncosta08/workout-wizard',
    skills: ['Angular', 'Ionic', 'TypeScript', 'LazyLoading', 'Firebase', 'HTML', 'CSS', 'Trello'],
    description: 'O Workout Wizard é um aplicativo móvel que oferece aos usuários a capacidade ' +
      'de criar e gerenciar seus próprios planos de treino personalizados para a academia. ' +
      'Com uma ênfase na individualidade, os usuários podem escolher entre uma variedade de exercícios ' +
      'e organizar seus treinos de acordo com suas necessidades e objetivos. Além disso, o ' +
      'aplicativo permite aos usuários monitorar sua saúde, incluindo o cálculo do Índice ' +
      'de Massa Corporal (IMC) e a realização de avaliações físicas, garantindo que ' +
      'possam acompanhar seu progresso de forma eficaz. Em resumo, o Workout Wizard é ' +
      'uma ferramenta essencial para aqueles que buscam manter uma rotina de ' +
      'exercícios personalizada e acompanhar sua saúde de maneira conveniente.'
  },
  {
    projectName: 'Apex Compliance',
    startDate: 'jan de 2023',
    endDate: 'jan de 2024',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQEADwc1KrMH-Q/profile-treasury-image-shrink_800_800/B4DZUHcfxmG4AY-/0/1739586665973?e=1740870000&v=beta&t=LK5KaiUS2zDXj5vpXLnHvyvjO9UuiZUwU6kvpyigMr4',
    projectLink: 'https://apexcomplianceprogram.com/',
    skills: [
      'Angular', 'TypeScript', 'Node.js', 'Python',
      'C#', 'Firebase', 'PostgreSQL', 'Cypress',
      'Husky', 'Conventional Commits', 'Regex',
      'HTML', 'CSS', 'Jira'
    ],
    description: 'No projeto Apex Compliance, era responsável pelo desenvolvimento do frontend, ' +
      'utilizando Angular e Firebase para construir o sistema. Implementei funcionalidades ' +
      'de busca e destaque de palavras-chave de "risco", com expressões regulares (regex) ' +
      'para garantir a precisão na análise de conteúdo. O projeto usou rigorosamente as ' +
      'melhores práticas de desenvolvimento, incluindo Git Flow para controle de versionamento, ' +
      'Husky para automação de verificações de código, Cypress para testes automatizados, ' +
      'e Conventional Commits para padronização, garantindo o desenvolvimento organizado e ' +
      'de qualidade. Trabalhei de forma colaborativa na integração com o backend, ' +
      'desenvolvido em Node.js, com suporte adicional em Python e C# para ' +
      'funcionalidades específicas. O projeto era internacional, toda a comunicação com a ' +
      'equipe e o cliente foi realizada em inglês, tanto em reuniões quanto por mensagens, ' +
      'o que reforçou minha capacidade de atuar em ambientes globais e colaborar de ' +
      'forma eficaz em projetos internacionais.'
  },
  {
    projectName: 'Lol-Guide',
    startDate: 'jul de 2024',
    endDate: 'set de 2024',
    banner: 'https://github.com/Jhoncosta08/lol-guide/raw/master/src/assets/preview-four.png',
    projectLink: 'https://github.com/Jhoncosta08/lol-guide',
    skills: ['Angular', 'TypeScript', 'Firebase', 'HTML', 'CSS', 'Trello'],
    description: 'O aplicativo é uma plataforma interativa baseada no jogo League of Legends, ' +
      'projetada para fornecer uma experiência rica e detalhada para os fãs do jogo. ' +
      'Os usuários podem criar contas e fazer login para acessar uma extensa lista de ' +
      'campeões. Ao selecionar um campeão, informações detalhadas são apresentadas, ' +
      'incluindo a rota onde o campeão joga, suas habilidades com vídeos ilustrativos, ' +
      'a história do personagem e as skins disponíveis. Essa funcionalidade permite aos ' +
      'jogadores aprofundar seu conhecimento sobre seus campeões favoritos e explorar novos ' +
      'personagens de uma maneira envolvente e informativa.'
  },
  {
    projectName: 'Dynamic table',
    startDate: 'mar de 2023',
    endDate: 'mar de 2023',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/angular-dynamic-table/master/src/assets/img/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/angular-dynamic-table',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    description: 'Projeto de criação de uma tabela completa dinâmica feita em Angular, com sorting, search e csv export.'
  },
  {
    projectName: 'Dynamic-button',
    startDate: 'mar de 2023',
    endDate: 'mar de 2023',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/angular-dynamic-button/main/src/assets/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/angular-dynamic-button',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    description: 'O aplicativo apresenta um componente de botão dinâmico reutilizável que permite a ' +
      'personalização completa do estilo, tamanho e comportamento. Este botão pode ser ' +
      'configurado através de propriedades que podem ser ajustadas em diferentes partes do sistema, ' +
      'garantindo consistência visual e funcional. O componente suporta personalização CSS, ' +
      'vários tamanhos e a vinculação de eventos como cliques e interações de teclado. Além disso, ' +
      'é responsivo e acessível, garantindo uma boa experiência do usuário em diversos dispositivos e ' +
      'para pessoas com diferentes necessidades especiais.'
  },
  {
    projectName: 'FormArray',
    startDate: 'fev de 2023',
    endDate: 'fev de 2023',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/angular-form-array/master/src/assets/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/angular-form-array',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
    description: 'Um formulário dinâmico que permite a adição e remoção eficiente e intuitiva de campos. ' +
      'Utilizando um conjunto de formulários, o aplicativo permite que os usuários adicionem novos campos ' +
      'através de um botão, sendo que cada novo campo é instantaneamente incorporado à estrutura do formulário. ' +
      'Além disso, quando um campo é excluído, os índices são automaticamente ajustados, garantindo que os ' +
      'valores dos campos restantes sejam preservados e organizados corretamente. Essa funcionalidade torna ' +
      'a gestão de dados flexível e ágil, sendo ideal para aplicativos que requerem entrada de ' +
      'dados variável e personalizada.'
  },
  {
    projectName: 'TAP - Travel Affiliate Partners',
    startDate: 'fev de 2022',
    endDate: 'jan de 2023',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQHmQiCzMJ8tfQ/profile-treasury-image-shrink_800_800/B4DZUHbCZLHIAY-/0/1739586284065?e=1740870000&v=beta&t=JrM7v-rr8gBfcrsiPjKgY_oIId0VcEqgW6YB_ruqhuo',
    projectLink: 'https://travelaffiliatepartners.com/',
    skills: ['Angular', 'Node.js', 'PostgreSQL', 'Firebase', 'Adobe XD', 'Bootstrap', 'Linear', 'Adobe XD'],
    description: 'Fui responsável pela liderança do desenvolvimento do frontend no projeto TAP Travel Affiliate Partners, ' +
      'um sistema inovador que conectava empresas de reservas de hotéis, como Booking.com, a influenciadores digitais. ' +
      'O sistema permitia que influenciadores se cadastrassem, buscassem por hotéis e pousadas, criassem ' +
      'links de recomendação e recebessem uma parte do lucro gerado pelas reservas realizadas por seus seguidores. ' +
      'Desenvolvido com Angular no frontend e Node.js no backend, com banco de dados PostgreSQL, ' +
      'minha atuação incluiu o gerenciamento da equipe de frontend, delegação de tarefas, organização de sprints ' +
      'e cards no Jira, e tomada de decisões estratégicas sobre as tecnologias empregadas. Além disso, como o projeto ' +
      'era internacional, participei ativamente de reuniões diárias em inglês com o cliente, garantindo uma comunicação clara ' +
      'e eficiente. Essa experiência foi fundamental para aprimorar minhas habilidades de liderança técnica, coordenação de ' +
      'equipes e gestão de projetos em um ambiente global.'
  },
  {
    projectName: 'Agrinix - Armazém Inteligente',
    startDate: 'mar de 2021',
    endDate: 'fev de 2022',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQHne9BBGERadg/profile-treasury-image-shrink_800_800/B4DZUHZpXNHkAc-/0/1739585918854?e=1740870000&v=beta&t=82sDw71OBftXCmwWqf7mRZ0subzth5N-tQ2d9CJJ6s0',
    projectLink: 'https://agrinix.com.br/',
    skills: ['Angular', 'TypeScript', 'Java', 'Android Studio', 'PostgreSQL', 'Firebase', 'Jira'],
    description: 'No projeto Armazém Digital, contribui para o desenvolvimento de uma solução logística que ' +
      'otimizava as operações de armazém. O sistema foi implementado em tablets acoplados a empilhadeiras, ' +
      'desenvolvido em Android Studio com backend em Java. Os tablets exibiam uma visão completa do layout do armazém, ' +
      'orientando os trabalhadores em rotas otimizadas para a coleta e entrega de bags, utilizando tecnologia ' +
      'RFID para rastreamento preciso. Além disso, havia um sistema de gerenciamento baseado na web, que permitia ' +
      'a criação e organização de armazéns, integrando-se com o sistema Android, possibilitando um controle total ' +
      'das operações e aumentando a eficiência do processo logístico.'
  },
  {
    projectName: 'Agrinix - Floresta Digital',
    startDate: 'mar de 2021',
    endDate: 'fev de 2022',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQGKn864bsbKUQ/profile-treasury-image-shrink_800_800/B4DZUHaSuNHkAY-/0/1739586088400?e=1740870000&v=beta&t=98I-L-arqdyNRPaiYay5Zh34MFHCmzoq6Z-Cx-Nb1so',
    projectLink: 'https://agrinix.com.br/',
    skills: ['Angular', 'TypeScript', 'C#', 'PostgreSQL', 'Mapbox', 'Firebase', 'Jira'],
    description: 'Trabalhei no projeto Floresta Digital, uma plataforma que permitia a empresas ' +
      'comprarem tokens de crédito de carbono ao selecionar áreas específicas de uma floresta por ' +
      'meio de imagens aéreas de alta resolução. Essas imagens eram gerenciadas utilizando a ' +
      'plataforma Mapbox, possibilitando uma seleção geográfica precisa e visualização detalhada. ' +
      'O frontend foi desenvolvido em Angular, garantindo uma experiência interativa e ' +
      'amigável para o usuário, enquanto o backend foi construído em C# para lidar com transações' +
      ' e gerenciamento de dados. Esse produto tinha como objetivo tornar a compensação de carbono' +
      ' mais acessível e transparente, usando tecnologia para visualizar e comercializar créditos' +
      ' de carbono diretamente de áreas florestais.'
  },
  {
    projectName: 'Eterna Magia Curitiba',
    startDate: 'jan de 2021',
    endDate: 'mar de 2021',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQHTEbpSoNKvsw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719360989762?e=1740870000&v=beta&t=sfSoXp8f04FnonBShZ4eO-IJKQMshEgqGMTY4PplI4E',
    projectLink: 'https://eternamagiacuritiba.com.br/',
    skills: ['Wordpress', 'Woocommerce', 'Elementor', 'PHP'],
    description: 'A Eterna Magia é um website desenvolvido utilizando WordPress e Elementor, dedicado a oferecer uma experiência única para ' +
      'mulheres durante o período de amamentação. O projeto visa proporcionar praticidade e sensualidade por meio de peças ' +
      'de vestuário elaboradas e sofisticadas, permitindo que as mulheres conciliem os papéis de mãe, esposa e profissional ' +
      'sem abrir mão de seu próprio cuidado pessoal e vaidade.'
  },
  {
    projectName: 'Pharma Service',
    startDate: 'jan de 2021',
    endDate: 'jun de 2021',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQGTj9Xf8piVkg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719365519211?e=1740870000&v=beta&t=y1HeJ6C_krmXqOLG9ofO1nnl_P4sV0H3vSISJunXp_8',
    projectLink: 'https://xd.adobe.com/view/5a776069-8889-4c25-8d99-c05d52ce5c9c-0f24/?fullscreen',
    skills: ['Adobe XD', 'Gestão de projetos', 'Liderança', 'Gestão de equipes', 'Trello'],
    description: 'O projeto de entrega de medicamentos à domicílio desenvolvido como Trabalho de Conclusão de Curso (TCC)' +
      ' foi concebido para facilitar o acesso a medicamentos de forma rápida e conveniente, através de um aplicativo móvel. ' +
      'Como gerente de projetos, assumi a responsabilidade de liderar e coordenar o desenvolvimento do projeto, ' +
      'trabalhando em conjunto com três colegas de classe. Nosso objetivo foi criar uma solução eficiente e segura, ' +
      'garantindo que os usuários pudessem solicitar medicamentos com facilidade e receber as entregas no conforto ' +
      'de suas casas. O projeto foi elaborado utilizando o Adobe XD para prototipagem, visando uma experiência de ' +
      'usuário intuitiva e amigável. Ao longo do processo, consideramos aspectos como logística de entrega, segurança ' +
      'na transação de dados e integração com farmácias parceiras. O resultado final é um aplicativo que atende ' +
      'às necessidades dos usuários, oferecendo conveniência e tranquilidade no acesso aos medicamentos essenciais.'
  },
  {
    projectName: 'Cherio Store',
    startDate: 'jan de 2020',
    endDate: 'jan de 2020',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQHG4vcefT2tRw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719366154562?e=1740870000&v=beta&t=cg_oPuzMYeFkQ9y1kDTVweWhab3IT2wH3G76mwFo4zg',
    projectLink: 'https://cheriostore.com.br/',
    skills: ['Wordpress', 'Elementor', 'Woocommerce', 'PHP'],
    description: 'Loja criada para vender cosplay e acessórios, diretamente da china para todo o mundo.'
  },
  {
    projectName: 'Gestar',
    startDate: 'jan de 2020',
    endDate: 'jan de 2020',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQFuga8VR9XHaw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719370929746?e=1740870000&v=beta&t=BuQJyPrLnadruai7MSSK6AYHpa9kd57nQZabPIKozBc',
    projectLink: 'https://gestar.ong.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para abordar situações de infertilidade e poder ajudar as pessoas.'
  },
  {
    projectName: 'Schwankecasa',
    startDate: 'jan de 2020',
    endDate: 'jan de 2020',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQFAeAwIVs7CDQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719373710838?e=1740870000&v=beta&t=fywZ9xHy-FgV11XYM_zm1w2IT3-icg2mrxa_-A7_Yq0',
    projectLink: 'https://schwankecasa.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para mostrar os produtos da empresa.'
  },
  {
    projectName: 'Arquitetare',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQEfsMfVKxkgJg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719361385532?e=1740873600&v=beta&t=msAQ8GuaqVXSPowYxiGuR4-zuQ5ogkh7rd42WpjwB58',
    projectLink: 'https://www.arquitetare.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para exibir os trabalhos de arquitetura da empresa, com o objetivo de captar clientes e mostrar ao mundo seu trabalho.'
  },
  {
    projectName: 'EduMedica',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQF1uEhVn3V9CQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719374551397?e=1740873600&v=beta&t=VteIpX4GftmSuvkP8cXzh-04QZGuBgFnH2tHniNlCxY',
    projectLink: 'https://edumedica.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para apresentar conteúdo para profissionais da área da saúde.'
  },
  {
    projectName: 'Estillo Mania',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQEq8q-edAdDfg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719365181482?e=1740873600&v=beta&t=DGsvPc4WxX3gP8Jm5McjPp5sxFKS5lIUmckzLMRO4P8',
    projectLink: 'https://estillomania.com.br/',
    skills: ['Wordpress', 'Woocommerce', 'Elementor', 'PHP'],
    description: 'Loja associada ao colégio Estilo, criada para vender material escolar, uniformes, fantasias e etc.'
  },
  {
    projectName: 'Intercroma',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQFjE6tjtbPlZw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719374026332?e=1740873600&v=beta&t=t3PjZzO45Emavbcotj1rbioaI5yufCCXP7DS5l-41e4',
    projectLink: 'https://www.intercroma.com/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para apresentar os produtos da empresa. O projeto conta com a opção de layout em 3 línguas diferentes, O Inglês, Espanhol e Português, podendo trocar entre eles.'
  },
  {
    projectName: 'Sorriso de Curitiba',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQEdcTI2H1CtqA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719373640333?e=1740873600&v=beta&t=Cp_m8O_wfEJCbDhjydNKDZoh16tQ5FVH48sU5hOy1f8',
    projectLink: 'https://www.sorrisodecuritiba.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para promover a linha de ônibus de Curitiba, bem como trazer informações para as pessoas.'
  },
  {
    projectName: 'Star Wars - Magic Way',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQEqEyQns_bkaQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719374473929?e=1740873600&v=beta&t=qTDm2ZqRSkpLc-fYaFwTXQv9T_6qMIksK2xpQFPX3sA',
    projectLink: '',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto de divulgação, para vendas de pacotes de viagem para o parque do star wars na disney através da magic way.'
  },
  {
    projectName: 'Trupe da saúde',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQEM0WNKccqT5A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719365653762?e=1740873600&v=beta&t=5tMveN1uyMCkrcEjFsvxwcQS8q9u4y4_Uwymm9zRihE',
    projectLink: 'https://trupedasaude.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para divulgar evento da equipe de palhaços de Curitiba, bem como visitas em hospitais e etc.'
  },
  {
    projectName: 'Unicultura',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQGhXVZFMzEjDg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719364410942?e=1740873600&v=beta&t=RPkHzV6JXOqHj9L0NQl8qXzmZy5-tFE0sjUv9jHNJv0',
    projectLink: 'https://www.unicultura.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado para promover a perspectiva sobre o potencial da arte e cultura como força geradora de desenvolvimento local'
  },
  {
    projectName: 'Viva mais previdência',
    startDate: 'jan de 2019',
    endDate: 'jan de 2019',
    banner: 'https://media.licdn.com/dms/image/v2/D4D2DAQE3uKCugKHhQQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719364797555?e=1740873600&v=beta&t=fMb2-nZlEzPPL5ESzoyxuHIsO9H49xe-nOT2PcWznjc',
    projectLink: 'https://vivamaisprev.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Projeto criado com a missão de proporcionar saúde e benefícios previdenciários, contribuindo para a qualidade de vida da família sanepariana.'
  }
];
