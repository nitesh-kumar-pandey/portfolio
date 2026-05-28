type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
    tech: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Nitesh Pandey",
    fullName: "Nitesh Pandey",
    email: "pandeykumarnitesh14@gmail.com",
  },
  hero: {
    name: "Nitesh",
    p: ["I build AI applications, machine learning", "pipelines, and intelligent agent workflows."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am an AI Application Developer and Data Science enthusiast with a Bachelor of Technology in Artificial Intelligence and Data Science. I specialize in building intelligent applications using Large Language Models (LLMs), LangChain, Retrieval-Augmented Generation (RAG), and agentic workflows with LangGraph. I develop and deploy robust APIs with FastAPI and Flask, create data visualization dashboards, and design predictive machine learning pipelines. I am passionate about automating workflows and solving real-world challenges with cutting-edge AI technologies.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and build scalable AI pipelines.`,
    },
    tech: {
      p: "What I have learned so far",
      h2: "Technology Stack.",
      content: `The following technologies are what I have learned so far. Each technology is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and build scalable AI pipelines.`,
    },
  },
};
