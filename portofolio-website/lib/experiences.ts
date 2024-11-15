import BB_qnx_ss from '@/public/images/BB_qnx_ss.png'
import cai_logo from '@/public/images/cai_logo.svg'

const experiences = [
    {
        title: "Software Development Student",
        company: "BlackBerry QNX",
        location: "Ottawa, ON",
        date: "January 2024 - August 2024",
        logo:  BB_qnx_ss,
        alt: "Blackberry QNX logo",
        background_color: '#000',
        Points: ["Achieved 100% test coverage by writing and executing black-box tests for QNX libc functions, ensuring a successful release of QNX OS QOS 2.2.7",
            "Enhanced QNX system functionality by identifying and resolving over 20 discrepancies in QNX documentation and libc functions, through raising JIRA tickets and collaborating with Core OS Development team",
            "Refined test accuracy by 8% by adhering to ISO 26262 functional safety standards and MISRA C guidelines, through updating and fixing 25+ existing tests to align with current QNX libc functions",
            "Improved testing strategies and practices through active participation in code reviews, reducing the time for tests to be committed to production from an average of 3 weeks to 1 week",
            "Accomplished high-quality assurance for QNX Everywhere by reporting over 5 bugs through testing of key components and functionalities, and suggested new features to improve user experience, prior to its public release"
        ],
    },
    {
        title: "Junior App Developer",
        company: "Correct-AI",
        location: "Ottawa, ON",
        date: "March 2023 - July 2023",
        logo:  cai_logo,
        alt: "Correct-AI logo",
        background_color: '#f3f4f6',
        Points: ["Boosted user satisfaction by 12% by implementing Nested Navigation with Stack Navigator inside Bottom Tab Navigator, resulting in a more seamless and intuitive navigation flow",
            "Implemented Client Credential Grant Flow using Azure to securely obtain access tokens, allowing for 50% more secure transactions daily and enhancing data protection",
            "Streamlined front-end development by 10% by building reusable React Native components, reducing development time",
            "Leveraged Microsoft Graph REST API to efficiently retrieve and integrate data into the application, enhancing data accessibility and improving functionality by reducing data retrieval time by 40%"
        ],
    },
];

export { experiences };