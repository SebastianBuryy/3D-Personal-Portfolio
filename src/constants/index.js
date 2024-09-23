export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Pictopia - AI Image Transformation',
        number: 1,
        desc: 'Pictopia is a Software-as-a-Service application that empowers users to create stunning image transformations. Features include AI-powered image editing, a payments system, and a credits-based model.',
        subdesc:
            'Developed with Next.js, and TypeScript, Pictopia leverages Cloudinary for image processing, Stripe for payments, and MongoDB for data storage.',
        href: 'https://pictopia-ai.vercel.app',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/pictopiaailogo.png',
        logoStyle: {
            backgroundColor: '#0e3438',
            border: '0.2px solid #124549',
            boxShadow: '0px 0px 60px 0px rgba(35, 175, 155, 0.4)',
        },
        spotlight: '/assets/spotlightpictopia.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs-circle.png',
            },
            {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 5,
                name: 'Cloudinary',
                path: '/assets/cloudinary.png',
            },
            {
                id: 6,
                name: 'Stripe',
                path: '/assets/stripepng.png',
            },
            {
                id: 7,
                name: 'MongoDB',
                path: '/assets/mongodb.png',
            },
        ],
    },
    {
        title: 'FlashcardFrenzy - Dynamic Flashcard Generator',
        number: 2,
        desc: 'FlashcardFrenzy is a dynamic flashcard learning platform that utilises OpenAI’s GPT-4o LLM to generate flashcards from text and file input. Users can create their own downloadable flashcards with ease.',
        subdesc:
            'With a React and Next.js frontend, FlashcardFrenzy integrates Firebase for data storage, Clerk for user authentication, and Stripe for payments.',
        href: 'https://github.com/SebastianBuryy/AI-Flashcards',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/flashcardai.png',
        logoStyle: {
            backgroundColor: '#58310E',
            border: '0.2px solid #834A17',
            boxShadow: '0px 0px 60px 0px rgba(195, 111, 20, 0.45)',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Next.js',
                path: '/assets/nextjs-circle.png',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'OpenAI',
                path: '/assets/openai.png',
            },
            {
                id: 5,
                name: 'Stripe',
                path: '/assets/stripepng.png',
            },
            {
                id: 6,
                name: 'Clerk',
                path: '/assets/clerk.png',
            },
            {
                id: 7,
                name: 'Firebase',
                path: '/assets/firebase.png',
            },
        ],
    },
    {
        title: 'SmartAssurance - Life Insurance Automation',
        desc: 'SmartAssurance is a comprehensive life insurance platform that leverages Ethereum blockchain technology for dynamic risk assessment. By utilising self-executing smart contracts, SmartAssurance ensures that all transactions are automated, transparent, and immutable.',
        subdesc:
            'Developed with React, Python (Flask), Solidity, and Alchemy, SmartAssurance is a secure, efficient, and user-friendly solution for life insurance providers and policyholders.',
        href: 'https://github.com/SebastianBuryy/SwEng-Group23-LifeInsurancePlatform',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/smartassurance.png',
        logoStyle: {
            backgroundColor: '#231B35',
            border: '0.2px solid #32264C',
            boxShadow: '0px 0px 60px 0px rgba(92, 69, 138, 0.4)',
        },
        spotlight: '/assets/spotlightmre.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: '/assets/css.png',
            },
            {
                id: 3,
                name: 'Python',
                path: 'assets/python-logo.png',
            },
            {
                id: 4,
                name: 'Flask',
                path: 'assets/flask.png',
            },
            {
                id: 5,
                name: 'Hardhat',
                path: '/assets/hardhat.png',
            },
            {
                id: 6,
                name: 'Solidity',
                path: '/assets/solidity.png',
            },
            {
                id: 7,
                name: 'Alchemy',
                path: '/assets/alchemy.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Headstarter',
        pos: 'Software Engineer Fellow',
        duration: 'July 2024 - September 2024',
        title: [
            'Built five AI projects using React, NextJS, Firebase, Clerk, and Vercel, adhering to agile methodologies with weekly sprints and implementing CI/CD practices for continuous deployment.',
            'Developed and deployed an AI-powered image transformation SaaS platform using NextJS and Cloudinary, enabling advanced image editing capabilities, including restoration, object recoloring, and background removal, resulting in a seamless full-stack application.',
            'Led a team of 3 to create a dynamic flashcard generation platform using the GPT-4o LLM via OpenAI’s API, integrating backend functionality and user authentication with Firebase.',
            'Implemented a web scraper to automatically extract data from Rate My Professor and update a Pinecone index, integrating a Retrieval-Augmented Generation (RAG) pipeline using GPT-4o LLM for real-time query responses.',
            'Engaged in weekly mentoring sessions with engineers from Amazon, Google, and Meta, gaining insights into industry practice.',
        ],
        icon: '/assets/headstarterwhite.png',
        animation: 'salute',
    },
    {
        id: 2,
        name: 'Munich Re Automation Solutions Ltd',
        pos: 'Frontend Engineer Intern',
        duration: 'January 2024 - April 2024',
        title: [
            'Collaborated with students through the Software Engineering Project 2024 to develop a blockchain-based smart contract solution for dynamic risk assessment in life insurance using React, Python, and Solidity, automating actions such as premium payments and claim settlements.',
            'Designed and integrated various frontend UI components with the backend via REST APIs, enabling efficient data transmission and improving user experience.',
            'Engaged in pair programming sessions to optimise code performance, and worked closely with cross-functional teams to resolve technical issues as they arose.',
            'Demonstrated the project to over 100 students and assisted in pitching the final product to the Chief Product Officer of Munich Re Automations Solutions, showcasing its functionality.',
            'Enforced Agile Scrum methodology, actively participated in weekly sprint planning sessions, and occasionally served as Scrum Master to enhance team coordination and workflow.',
        ],
        icon: '/assets/mrewhite.png',
        animation: 'victory',
    },
];