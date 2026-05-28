import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  git,
  virtuowhiz,
  bootes,
  upflairs,
  finai_pro,
  infowave_ai,
  restaurant_rating,

  python,
  sql,
  pandas,
  numpy,
  sklearn,
  langchain,
  langgraph,
  rag,
  ai,
  github,
  jupyter,
  vscode,
  mysql,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI Application Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
  {
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Scikit-learn",
    icon: sklearn,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "LangGraph",
    icon: langgraph,
  },
  {
    name: "RAG",
    icon: rag,
  },
  {
    name: "LLMs",
    icon: ai,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences: TExperience[] = [
  {
    title: "AI Application Developer",
    companyName: "Virtuowhiz Consulting Pvt. Ltd",
    icon: virtuowhiz,
    iconBg: "#383E56",
    date: "Apr 2026 - Present",
    points: [
      "Built AI applications using LLMs (GPT, Claude), LangChain, and RAG to extract insights from unstructured data.",
      "Developed and deployed APIs with FastAPI, automating workflows and reducing manual effort by 40%.",
      "Designed RAG-based pipelines (FAISS, embeddings) for efficient data retrieval and contextual responses.",
      "Applied prompt engineering and model optimization to improve output accuracy and relevance.",
    ],
  },
  {
    title: "Data Analyst",
    companyName: "Bootes Impex Tech Limited",
    icon: bootes,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Dec 2025",
    points: [
      "Led development of Power BI dashboards to analyze cost centers, revenue flow, and sales trends, enabling data-driven budgeting and strategic decisions.",
      "Automated reporting pipelines in Power BI, reducing reporting time by 40% and improving operational efficiency.",
      "Leveraged LLMs (GPT, Claude) to analyze unstructured text data and presented actionable insights to leadership, influencing financial planning.",
    ],
  },
  {
    title: "Data Science with ML & AI",
    companyName: "Upflairs Technology",
    icon: upflairs,
    iconBg: "#383E56",
    date: "July 2024 - Sep 2024",
    points: [
      "Cleaned and engineered features from large datasets to improve model performance and accuracy.",
      "Evaluated predictive models using accuracy, precision, recall, and F1-score, providing actionable recommendations to senior engineers.",
      "Collaborated with peers to build analytical solutions for classification and forecasting problems.",
    ],
  },
  {
    title: "AIML Intern",
    companyName: "Upflairs Technology",
    icon: upflairs,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developed a Flask-based web app for bike price prediction, integrating SQL database storage for inputs and predictions.",
      "Implemented preprocessing pipelines in Python to improve efficiency of computer vision applications.",
      "Facilitated client learning by creating interactive Jupyter Notebook demonstrations of real-time face and smile detection workflows.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Nitesh has an outstanding ability to build intelligent pipelines. His work on automating our FastAPI backend saved our team hours of manual verification.",
    name: "Virtuowhiz Team Lead",
    designation: "Senior AI Engineer",
    company: "Virtuowhiz Consulting",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Collaborating with Nitesh was seamless. His Power BI dashboards and data analysis provided key insights that directly influenced our budgeting strategy.",
    name: "Bootes Manager",
    designation: "Finance Director",
    company: "Bootes Impex Tech",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    testimonial:
      "Nitesh demonstrated great analytical capability during his internship. He successfully built a predictive Flask app and was quick to adopt new ML concepts.",
    name: "Upflairs Supervisor",
    designation: "Data Science Lead",
    company: "Upflairs Technology",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "FinAI Pro",
    description:
      "A multi-user full-stack personal finance assistant featuring JWT authentication, REST APIs, and an LLM-powered RAG pipeline for conversational financial query handling. Displays real-time data visualizations of spending trends, budgets, and net worth forecasting.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "orange-text-gradient",
      },
    ],
    image: finai_pro,
    sourceCodeLink: "https://github.com/nitesh-kumar-pandey",
  },
  {
    name: "Infowave AI",
    description:
      "Advanced research and information assistant utilizing LangGraph agent workflows for multi-step reasoning. Integrates Tavily API for real-time web searches and implements structured LLM outputs with validation loops for high-accuracy responses.",
    tags: [
      {
        name: "langgraph",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "llms",
        color: "pink-text-gradient",
      },
    ],
    image: infowave_ai,
    sourceCodeLink: "https://github.com/nitesh-kumar-pandey",
  },
  {
    name: "Restaurant Rating Prediction",
    description:
      "End-to-end machine learning regression pipeline involving exploratory data analysis, data cleaning, feature engineering, and model training (Random Forest, Decision Tree). Deployed using Flask for real-time rating predictions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant_rating,
    sourceCodeLink: "https://github.com/nitesh-kumar-pandey",
  },
];

export { services, technologies, experiences, testimonials, projects };
