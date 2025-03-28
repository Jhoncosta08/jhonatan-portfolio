import {ProjectsInterface} from './projects.interface';

export const projectsData: ProjectsInterface[] = [
  {
    projectName: 'Company Registration',
    startDate: 'fev - 2025',
    endDate: 'mar - 2025',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/abertura-de-empresa/master/src/assets/previews/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/abertura-de-empresa',
    skills: ['Angular', 'typeScript', 'Firebase', 'Bootstrap', 'HTML', 'CSS'],
    description: 'The Company Registration software is an intuitive and efficient platform that streamlines the process of ' +
      'submitting and managing new company applications. It features a dashboard for viewing and editing existing requests,' +
      ' as well as enabling the creation of new ones through a simple form divided into applicant and company details. ' +
      'The system validates the entered information, providing instant feedback on successful operations or errors to be corrected. ' +
      'Integrated with an API, it ensures security and agility in the process of formalizing businesses.'
  },
  {
    projectName: 'Anagram Search',
    startDate: 'mar - 2025',
    endDate: 'mar - 2025',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/search-anagram/master/src/assets/previews/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/search-anagram',
    skills: ['Angular', 'typeScript', 'Bootstrap', 'HTML', 'CSS'],
    description: 'This project was developed using Angular 19 and follows best practices in architecture and design. ' +
      'The system utilizes advanced features like Standalone Components and Lazy Loading, and is organized into views ' +
      'and components to ensure modularity and easy maintenance. The application is fully responsive, providing an optimized ' +
      'experience for both mobile devices and desktops. The main goal of the system is to allow the user to add a JSON ' +
      'containing strings, enabling the identification and grouping of anagrams within the dataset. The jsoneditor library ' +
      'is used for editing and manipulating the JSON, offering an intuitive interface. The system processes the input ' +
      'data to detect anagrams, which are words with the same letters in equal quantities but arranged in different orders, ' +
      'grouping them into a new output array.'
  },
  {
    projectName: 'Zig-Zag String',
    startDate: 'mar - 2025',
    endDate: 'mar - 2025',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/zig-zag/master/src/assets/previews/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/zig-zag',
    skills: ['Angular', 'typeScript', 'Bootstrap', 'HTML', 'CSS'],
    description: 'This system was developed using Angular 19, leveraging modern features like Standalone Components and Lazy Loading ' +
      'to optimize the user experience. It is fully responsive, adapting to various screen sizes to ensure seamless interaction on' +
      ' both mobile devices and desktops. The main functionality allows the user to input a string and an integer x, ' +
      'and the system processes the string by breaking it into lines of length x and reconstructing it ' +
      'according to a pattern called "Back and Forth." In this pattern, the original string is divided into lines of length x,' +
      ' and if the division isn\'t exact, the remaining characters are alternated between the beginning ' +
      'and end of the resulting string. Additionally, all even-numbered lines have their contents reversed before being' +
      ' used in the final string reconstruction, creating a reorganized string alternating between reversed and non-reversed lines. ' +
      'This approach allows the system to dynamically and efficiently rearrange the words, ' +
      'applying an interesting logic for string manipulation.'
  },
  {
    projectName: 'Average Color',
    startDate: 'feb - 2025',
    endDate: 'feb - 2025',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/average-color/master/average-color.png',
    projectLink: 'https://github.com/Jhoncosta08/average-color',
    skills: ['HTML', 'CSS', 'javaScript'],
    description: 'This system was developed using pure HTML, CSS, and JavaScript, ' +
      'offering a simple and interactive solution to calculate the average of two colors. ' +
      'The interface includes a form with two color selection fields, where the user ' +
      'can choose the desired colors through a visual color picker. After selecting ' +
      'the colors, the user clicks the "Calculate" button, and the system processes the information, displaying ' +
      'the resulting color that corresponds to the average of the two chosen colors. ' +
      'This application is perfect for designers and developers who need to combine colors in a practical and visual way.'
  },
  {
    projectName: 'School App',
    startDate: 'feb - 2025',
    endDate: 'feb - 2025',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/school-app/master/src/assets/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/school-app',
    skills: ['Vue.js', 'Vuetify', 'HTML', 'CSS', 'javaScript'],
    description: 'The project is a student management system that ' +
      'allows you to register and view information about students, subjects, and ' +
      'exams. It supports CRUD operations for students (add, view, and display grades), ' +
      'subjects (create and list subjects for grade assignment), and exams ' +
      '(assign, edit, and delete grades). The application was developed with Vue.js, ' +
      'using Vuetify for a modern and responsive interface, and Vue Router ' +
      'for route management and navigation within the app.'
  },
  {
    projectName: 'Wallit',
    startDate: 'jan - 2024',
    endDate: 'feb - 2025',
    banner: 'assets/img/projects/wallit.jpeg',
    projectLink: 'https://www.wallit.app/',
    skills: [
      'Angular', 'Ionic', 'Node', 'javaScript',
      'TypeScript', 'MicroFrontend', 'PostgreSQL', 'Stripe',
      'AWS Cognito', 'Firebase', 'LazyLoading', 'API Restful',
      'Kibana', 'HTML', 'CSS', 'Jira'
    ],
    description: 'In the Wallit project, I worked as a senior frontend developer, building three integrated systems ' +
      'with a focus on usability and cutting-edge technology:\n' +
      '\n' +
      '1. Digital Wallet App: A mobile system built with Angular and Ionic, ' +
      'allowing account, card, balance, and benefit management, such as gift ' +
      'cards and insurance. Integrated with Stripe for financial transactions and ' +
      'AWS Cognito for authentication.\n' +
      '\n' +
      '2. Super Admin: Developed with Angular and Node.js, it allowed centralized control of the ' +
      'platform, managing permissions and high-level access to maintain security.\n' +
      '\n' +
      '3. Team Management: Also built with Angular and Node.js, it enabled team management, ' +
      'allocation of benefits, and detailed reports via Kibana.\n' +
      '\n' +
      'The project used Jira for sprint management and Confluence for documentation, ' +
      'with daily communication in English, which strengthened my skills in ' +
      'technical leadership and managing complex integrations.'
  },
  {
    projectName: 'Workout Wizard',
    startDate: 'apr - 2024',
    endDate: 'jun - 2024',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/workout-wizard/master/src/assets/previews/preview-5.png',
    projectLink: 'https://github.com/Jhoncosta08/workout-wizard',
    skills: ['Angular', 'Ionic', 'TypeScript', 'LazyLoading', 'Firebase', 'HTML', 'CSS', 'Trello'],
    description: 'Workout Wizard is a mobile app that provides users with the ability ' +
      'to create and manage their own personalized workout plans for the gym. ' +
      'With an emphasis on individuality, users can choose from a variety of exercises ' +
      'and organize their workouts according to their needs and goals. Additionally, the ' +
      'app allows users to track their health, including calculating the Body ' +
      'Mass Index (BMI) and conducting physical assessments, ensuring they ' +
      'can monitor their progress effectively. In summary, Workout Wizard is ' +
      'an essential tool for those looking to maintain a personalized workout routine ' +
      'and track their health conveniently.'
  },
  {
    projectName: 'Apex Compliance',
    startDate: 'jan - 2023',
    endDate: 'jan - 2024',
    banner: 'assets/img/projects/kwf.png',
    projectLink: 'https://apexcomplianceprogram.com/',
    skills: [
      'Angular', 'TypeScript', 'Node.js', 'Python',
      'C#', 'Firebase', 'PostgreSQL', 'Cypress',
      'Husky', 'Conventional Commits', 'Regex',
      'HTML', 'CSS', 'Jira'
    ],
    description: 'In the Apex Compliance project, I was responsible for frontend development, ' +
      'using Angular and Firebase to build the system. I implemented search and keyword ' +
      'highlighting features for "risk" words, using regular expressions (regex) ' +
      'to ensure accuracy in content analysis. The project strictly followed ' +
      'best development practices, including Git Flow for version control, ' +
      'Husky for automating code checks, Cypress for automated testing, ' +
      'and Conventional Commits for standardization, ensuring organized and ' +
      'high-quality development. I collaborated on the integration with the backend, ' +
      'developed in Node.js, with additional support in Python and C# for ' +
      'specific functionalities. The project was international, and all communication with the ' +
      'team and the client was conducted in English, both in meetings and through messages, ' +
      'which enhanced my ability to work in global environments and collaborate effectively on ' +
      'international projects.'
  },
  {
    projectName: 'Lol Guide',
    startDate: 'jul - 2024',
    endDate: 'sep - 2024',
    banner: 'https://github.com/Jhoncosta08/lol-guide/raw/master/src/assets/preview-four.png',
    projectLink: 'https://github.com/Jhoncosta08/lol-guide',
    skills: ['Angular', 'TypeScript', 'Firebase', 'HTML', 'CSS', 'Trello'],
    description: 'The app is an interactive platform based on the game League of Legends, ' +
      'designed to provide a rich and detailed experience for the game’s fans. ' +
      'Users can create accounts and log in to access an extensive list of ' +
      'champions. Upon selecting a champion, detailed information is displayed, ' +
      'including the role the champion plays, their abilities with illustrative videos, ' +
      'the character’s lore, and available skins. This functionality allows ' +
      'players to deepen their knowledge about their favorite champions and explore new ' +
      'characters in an engaging and informative way.'
  },
  {
    projectName: 'Dynamic Table',
    startDate: 'mar - 2023',
    endDate: 'mar - 2023',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/angular-dynamic-table/master/src/assets/img/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/angular-dynamic-table',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    description: 'Project for creating a complete dynamic table built with Angular, featuring sorting, search, and CSV export.'
  },
  {
    projectName: 'Dynamic Button',
    startDate: 'mar - 2023',
    endDate: 'mar - 2023',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/angular-dynamic-button/main/src/assets/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/angular-dynamic-button',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    description: 'The app features a reusable dynamic button component that allows for ' +
      'complete customization of style, size, and behavior. This button can be ' +
      'configured through properties that can be adjusted in different parts of the system, ' +
      'ensuring visual and functional consistency. The component supports CSS customization, ' +
      'multiple sizes, and event binding such as clicks and keyboard interactions. Additionally, ' +
      'it is responsive and accessible, ensuring a good user experience across various devices and ' +
      'for people with different special needs.'
  },
  {
    projectName: 'Form Array',
    startDate: 'feb - 2023',
    endDate: 'feb - 2023',
    banner: 'https://raw.githubusercontent.com/Jhoncosta08/angular-form-array/master/src/assets/preview-one.png',
    projectLink: 'https://github.com/Jhoncosta08/angular-form-array',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
    description: 'A dynamic form that allows for the efficient and intuitive addition and removal of fields. ' +
      'Using a set of forms, the app enables users to add new fields through a button, ' +
      'with each new field instantly incorporated into the form structure. ' +
      'Additionally, when a field is deleted, the indexes are automatically adjusted, ensuring that the ' +
      'values of the remaining fields are preserved and properly organized. This functionality makes ' +
      'data management flexible and agile, making it ideal for apps that require variable and ' +
      'customized data input.'
  },
  {
    projectName: 'TAP - Travel Affiliate Partners',
    startDate: 'feb - 2022',
    endDate: 'jan - 2023',
    banner: 'assets/img/projects/tap.png',
    projectLink: 'https://travelaffiliatepartners.com/',
    skills: ['Angular', 'Node.js', 'PostgreSQL', 'Firebase', 'Adobe XD', 'Bootstrap', 'Linear'],
    description: 'I was responsible for leading the frontend development in the TAP Travel Affiliate Partners project, ' +
      'an innovative system that connected hotel booking companies, like Booking.com, to digital influencers. ' +
      'The system allowed influencers to register, search for hotels and inns, create ' +
      'referral links, and earn a share of the profit generated by bookings made through their followers. ' +
      'Developed with Angular on the frontend and Node.js on the backend, with a PostgreSQL database, ' +
      'my role included managing the frontend team, delegating tasks, organizing sprints ' +
      'and cards in Jira, and making strategic decisions about the technologies used. Additionally, since the project ' +
      'was international, I actively participated in daily meetings in English with the client, ensuring clear ' +
      'and efficient communication. This experience was crucial for enhancing my technical leadership, team coordination, ' +
      'and project management skills in a global environment.'
  },
  {
    projectName: 'Apparture',
    startDate: 'jan - 2020',
    endDate: 'feb - 2021',
    banner: 'assets/img/projects/apparture.jpg',
    projectLink: 'https://www.linkedin.com/in/jhonatan-silva-da-costa/details/projects/',
    skills: ['Angular','TypeScript','D3.js', 'Node.js', 'PostgreSQL', 'Adobe XD', 'Material Designer', 'Jira'],
    description: 'In the Apparture project, developed for monitoring the production and distribution of medicinal cannabis, ' +
      'my main responsibility was front-end development using Angular, with a strong focus on ensuring optimal application ' +
      'performance. The system handled a massive volume of data, processing over 1 million entries, which required the ' +
      'implementation of advanced techniques such as infinite scroll, lazy loading, and pagination. These solutions allowed ' +
      'for smooth and efficient navigation without compromising performance, even with large amounts of data being loaded in real-time.' +
      'In addition to front-end work, I actively collaborated on defining the communication between the front-end and the back-end, which ' +
      'was developed in Node.js, assisting the team in making critical architectural decisions to ensure efficient integration between both' +
      ' parts of the system. Throughout the development process, I participated in automated testing with Cypress, ensuring that features were' +
      ' rigorously tested and that the system maintained stability and quality.' +
      'I was also responsible for organizing sprints, managing tasks in Jira, and ensuring deadlines were met within 3-week cycles. ' +
      'The project demanded strong attention to performance and the ability to handle a large volume of data, and my role was ' +
      'essential in ensuring that the system remained fast, scalable, and reliable.'
  },
  {
    projectName: 'Agrinix - Smart Warehouse',
    startDate: 'mar - 2021',
    endDate: 'feb - 2022',
    banner: 'assets/img/projects/agrinix-warehouse.jpeg',
    projectLink: 'https://agrinix.com.br/',
    skills: ['Angular', 'TypeScript', 'Java', 'Android Studio', 'PostgreSQL', 'Firebase', 'Jira'],
    description: 'In the Smart Warehouse project, I contributed to the development of a logistics solution that ' +
      'optimized warehouse operations. The system was implemented on tablets mounted on forklifts, ' +
      'developed in Android Studio with a backend in Java. The tablets displayed a complete view of the warehouse layout, ' +
      'guiding workers along optimized routes for collecting and delivering bags, using RFID technology for accurate tracking. ' +
      'Additionally, there was a web-based management system that allowed for ' +
      'the creation and organization of warehouses, integrating with the Android system, enabling complete control ' +
      'over operations and increasing the efficiency of the logistics process.'
  },
  {
    projectName: 'Agrinix - Digital Forest',
    startDate: 'mar - 2021',
    endDate: 'feb - 2022',
    banner: 'assets/img/projects/agrinix-digital-forest.png',
    projectLink: 'https://agrinix.com.br/',
    skills: ['Angular', 'TypeScript', 'C#', 'PostgreSQL', 'Mapbox', 'Firebase', 'Jira'],
    description: 'I worked on the Digital Forest project, a platform that allowed companies ' +
      'to purchase carbon credit tokens by selecting specific areas of a forest through ' +
      'high-resolution aerial images. These images were managed using the ' +
      'Mapbox platform, enabling precise geographic selection and detailed visualization. ' +
      'The frontend was developed in Angular, ensuring an interactive and ' +
      'user-friendly experience, while the backend was built in C# to handle transactions ' +
      'and data management. The goal of this product was to make carbon offsetting ' +
      'more accessible and transparent, using technology to visualize and trade ' +
      'carbon credits directly from forest areas.'
  },
  {
    projectName: 'Eternal Magic Curitiba',
    startDate: 'jan - 2021',
    endDate: 'mar - 2021',
    banner: 'assets/img/projects/eterna-magia.jpeg',
    projectLink: 'https://eternamagiacuritiba.com.br/',
    skills: ['Wordpress', 'Woocommerce', 'Elementor', 'PHP'],
    description: 'Eternal Magic is a website developed using WordPress and Elementor, dedicated to providing a unique experience for ' +
      'women during the breastfeeding period. The project aims to offer practicality and sensuality through ' +
      'crafted and sophisticated clothing pieces, allowing women to balance the roles of mother, wife, and professional ' +
      'without compromising their own personal care and vanity.'
  },
  {
    projectName: 'Pharma Service',
    startDate: 'jan - 2021',
    endDate: 'jun - 2021',
    banner: 'assets/img/projects/pharma.png',
    projectLink: 'https://xd.adobe.com/view/5a776069-8889-4c25-8d99-c05d52ce5c9c-0f24/?fullscreen',
    skills: ['Adobe XD', 'Project management', 'Leadership', 'Team management', 'Trello'],
    description: 'The home medication delivery project, developed as a Graduation Thesis (TCC), ' +
      'was designed to facilitate quick and convenient access to medications through a mobile app. ' +
      'As the project manager, I took on the responsibility of leading and coordinating the project development, ' +
      'working alongside three classmates. Our goal was to create an efficient and secure solution, ' +
      'ensuring that users could easily request medications and receive deliveries at the comfort ' +
      'of their homes. The project was designed using Adobe XD for prototyping, aiming for an intuitive and ' +
      'user-friendly experience. Throughout the process, we considered aspects such as delivery logistics, data ' +
      'security, and integration with partner pharmacies. The final result is an app that meets ' +
      'the users’ needs, offering convenience and peace of mind in accessing essential medications.'
  },
  {
    projectName: 'Cherio Store',
    startDate: 'jan - 2020',
    endDate: 'jan - 2020',
    banner: 'assets/img/projects/cherio.jpeg',
    projectLink: 'https://cheriostore.com.br/',
    skills: ['Wordpress', 'Elementor', 'Woocommerce', 'PHP'],
    description: 'Store created to sell cosplay and accessories, directly from China to the world.'
  },
  {
    projectName: 'Gestar',
    startDate: 'jan - 2020',
    endDate: 'jan - 2020',
    banner: 'assets/img/projects/gestar.jpeg',
    projectLink: 'https://gestar.ong.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to address infertility issues and help people.'
  },
  {
    projectName: 'Schwankecasa',
    startDate: 'jan - 2020',
    endDate: 'jan - 2020',
    banner: 'assets/img/projects/schwanke-casa.jpeg',
    projectLink: 'https://schwankecasa.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to showcase the company’s products.'
  },
  {
    projectName: 'Arquitetare',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/arquitetare.jpeg',
    projectLink: 'https://www.arquitetare.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to showcase the company’s architecture work, aiming to attract clients and display their work to the world.'
  },
  {
    projectName: 'EduMedica',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/edumedica.jpeg',
    projectLink: 'https://edumedica.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to present content for healthcare professionals.'
  },
  {
    projectName: 'Estillo Mania',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/estillo-mania.jpeg',
    projectLink: 'https://estillomania.com.br/',
    skills: ['Wordpress', 'Woocommerce', 'Elementor', 'PHP'],
    description: 'Store associated with Estilo School, created to sell school supplies, uniforms, costumes, and more.'
  },
  {
    projectName: 'Intercroma',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/intercroma.jpeg',
    projectLink: 'https://www.intercroma.com/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to showcase the company’s products. The project features the option of a layout in 3 different languages: English, Spanish, and Portuguese, with the ability to switch between them.'
  },
  {
    projectName: 'Smile of Curitiba',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/sorriso-de-curitiba.jpeg',
    projectLink: 'https://www.sorrisodecuritiba.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to promote Curitiba’s bus line, as well as provide information to people.'
  },
  {
    projectName: 'Star Wars - Magic Way',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/star-wars.jpeg',
    projectLink: '',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Promotional project for selling travel packages to the Star Wars park at Disney through Magic Way.'
  },
  {
    projectName: 'Health Troupe',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/trupe.jpeg',
    projectLink: 'https://trupedasaude.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to promote the event of the clown team from Curitiba, as well as hospital visits and more.'
  },
  {
    projectName: 'Unicultura',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/unicultura.jpeg',
    projectLink: 'https://www.unicultura.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created to promote the perspective on the potential of art and culture as a driving force for local development.'
  },
  {
    projectName: 'Live More Retirement Plan',
    startDate: 'jan - 2019',
    endDate: 'jan - 2019',
    banner: 'assets/img/projects/viva-prev.jpeg',
    projectLink: 'https://vivamaisprev.com.br/',
    skills: ['Wordpress', 'Elementor', 'PHP'],
    description: 'Project created with the mission of providing health and pension benefits, contributing to the quality of life of the Saneparian family.'
  }
];
