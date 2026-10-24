export const profile = {
  name: 'Aryan Luitel', email: 'aryan.luitelbola@bulldogs.aamu.edu',
  github: 'https://github.com/Aryanluitel10',
  linkedin: 'https://www.linkedin.com/in/aryanluitel18/',
};
export const projects = [
  { name: 'Academic Research Assistant', category: 'AI & Data', number: '04', description: 'Built a multi-agent research assistant with LangGraph for planning, paper retrieval, and summarization. Added conditional routing and a self-critique retry loop, with OpenAI function calling to extract structured paper data for literature reviews.', stack: ['Python', 'LangGraph', 'OpenAI API', 'Function calling'], visual: 'research', caption: 'From papers to perspective.', status: 'May 2025' },
  { name: 'CampusConnect', category: 'Full stack', number: '01', description: 'A campus platform connecting students through a React interface and a Python API, with authentication and PostgreSQL data storage.', stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'], visual: 'campus', caption: 'Connecting a campus.', status: 'In progress' },
  { name: 'MovieMatch', category: 'AI & Data', number: '02', description: 'A hybrid movie recommendation application bringing together machine learning and a responsive web experience.', stack: ['Python', 'scikit-learn', 'React', 'AWS'], visual: 'movies', caption: 'Find your next favorite.', status: 'Project' },
  { name: 'Real-Time Bus Arrival', category: 'AI & Data', number: '03', description: 'Developed a live transit data platform for bus arrival predictions with Python, React, Azure, and Apache Spark. Built distributed pipelines and CI/CD workflows for scalability, fault tolerance, data reliability, and consistent deployments.', stack: ['Python', 'React', 'Azure', 'Spark'], visual: 'transit', caption: 'Less waiting. More going.', status: 'Project' },
  { name: 'Explore Nepal', category: 'Full stack', number: '05', description: 'A Nepal travel guide web app covering destinations, food, culture, history, travel tips, gallery, and news — with multi-language support. Built with React, Vite, Tailwind CSS, and Framer Motion.', stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'], visual: 'nepal', caption: 'Discover Nepal.', status: 'Project', link: 'https://github.com/Aryanluitel10/Explore-Nepal' },
];
export const experience = [
  { company: 'Adobe', logo: 'logos/adobe.png', url: 'https://www.adobe.com', role: 'Software Development Engineer Intern', date: 'May – Aug 2026 · San Jose, CA', description: 'Developed an Adobe Express AI editing agent using Claude Opus, Amazon Bedrock, and RAG to translate natural-language requests into structured document updates. Improved editing reliability by approximately 15% through 50+ evaluation scenarios, failure analysis, and end-to-end testing; redesigned the ECS workflow for stronger regression protection.', tags: ['Claude Opus', 'Amazon Bedrock', 'RAG', 'ECS', 'E2E testing'] },
  { company: 'Alabama A&M University', logo: 'logos/aamu.png', url: 'https://www.aamu.edu', role: 'Teaching Assistant', date: 'Aug 2024 – Present · Huntsville, AL', description: 'Develop individualized technical support strategies for 50+ student-athletes in Python, C++, algorithms, and Calculus. Collect student feedback and collaborate with academic stakeholders to prioritize support needs and improve the tutoring experience.', tags: ['Python', 'C++', 'Algorithms', 'Teaching'] },
  { company: 'National Science Foundation', logo: 'logos/nsf.png', url: 'https://www.nsf.gov', role: 'Quantum Computing & Machine Learning Intern', date: 'Jan – Apr 2025 · Remote', description: 'Designed and executed Python and Qiskit experiments on real superconducting quantum hardware to characterize readout errors. Modeled qubit readout as a supervised classification problem, measured asymmetric errors with confusion matrices, and built a reproducible Jupyter pipeline for data collection, validation, and analysis.', tags: ['Qiskit', 'Machine learning', 'Python', 'Jupyter'] },
];
export const skillGroups = [
  { title: 'Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'MATLAB', 'Go'] },
  { title: 'Frameworks & libraries', items: ['React', 'React Native', 'NestJS', 'Flask', 'pandas', 'NumPy', 'Polars', 'Streamlit', 'LangChain'] },
  { title: 'Cloud & tools', items: ['AWS', 'GCP / Vertex AI', 'Docker', 'PostgreSQL', 'Prisma', 'Git', 'GitLab CI', 'CUDA', 'Linux'] },
];
export const recognition = [
  { title: 'Fellow & Campus Ambassador', organization: 'Sharing the Power Foundation', logo: 'logos/stp.png', url: 'https://www.sharingthepower.org/', date: 'June 2026 – Present' },
  { title: 'AWS Certified Cloud Practitioner', organization: 'Amazon Web Services', logo: 'logos/aws.png', url: 'https://aws.amazon.com/', date: 'March 2026' },
  { title: 'Google Cloud Certified: Generative AI Leader', organization: 'Google', logo: 'logos/google.png', url: 'https://cloud.google.com', date: 'March 2026' },
  { title: 'NRF Foundation Ray Greenly Scholar', organization: 'NRF Foundation', logo: 'logos/nrf.svg', url: 'https://nrf.com/', date: 'January 2026' },
];
