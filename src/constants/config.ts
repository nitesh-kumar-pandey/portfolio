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
    p: ["AI Engineer | Generative AI | LLM Applications | RAG", "LangChain | LangGraph | AI Agents | MCP | Multi-Agent Systems"],
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
      content: `I build AI-powered applications with Python, Large Language Models, and retrieval-augmented generation. My work brings together LangChain, LangGraph, semantic search, and vector databases to create useful LLM experiences and agentic workflows. I also work with FastAPI, MCP, Agent-to-Agent (A2A) communication, and multi-agent orchestration to develop practical AI systems for real-world and enterprise use.`,
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
