import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Hi! I'm Ramana Reddy — a Data Scientist focused on Generative AI, RAG systems, and MLOps. I ship reliable, measurable AI products.`;

export const ABOUT_TEXT = `Data Scientist and Generative AI engineer with 4+ years of experience delivering production ML systems across healthcare, finance and marketing. I design scalable data pipelines, fine‑tune LLMs, and operationalize models on AWS/GCP/Azure.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 – Present",
    role: "Data Scientist (AI/ML)",
    company: "Cardinal Health",
    description: `Deployed predictive models for chronic conditions; increased early intervention by 38% and saved $500K+. Built Clinical Query Assistant (RAG) cutting review time by 45%.`,
    technologies: ["Python", "SageMaker", "Airflow", "MLflow", "LangChain"],
  },
  {
    year: "May 2021 – Jun 2023",
    role: "Data Scientist",
    company: "TCS",
    description: `Customer segmentation on 50M+ records, propensity/LTV modeling, and real‑time fraud detection.`,
    technologies: ["XGBoost", "Snowflake", "SQL", "Power BI"],
  },
  {
    year: "Feb 2020 – Apr 2021",
    role: "Jr. Data Scientist",
    company: "S&P Global",
    description: `Built multi‑agent LLM chatbot (LoRA/QLoRA) and RAG retrieval systems; Dockerized deployments on AWS/GCP.`,
    technologies: ["PyTorch", "Hugging Face", "FAISS", "Docker"],
  },
];

export const PROJECTS = [
  {
    title: "Clinical Query Assistant (RAG)",
    image: project1,
    description:
      "RAG chatbot for clinicians; reduced review time by 45% with auditable retrieval and evaluation harness.",
    technologies: ["LangChain", "LlamaIndex", "Hugging Face", "AWS", "FAISS"],
  },
  {
    title: "Event‑Driven ML Platform",
    image: project2,
    description:
      "Real‑time pipelines for risk prediction with 99.9% uptime and continuous monitoring.",
    technologies: ["Airflow", "SageMaker", "MLflow", "Lambda", "Redshift"],
  },
  {
    title: "Customer Segmentation @ Scale",
    image: project3,
    description:
      "Behavioral clustering on 50M+ customers; +35% campaign ROI.",
    technologies: ["Snowflake", "SQL", "DBSCAN", "Power BI"],
  },
];

export const CONTACT = {
  address: "Jersey City, NJ, USA",
  phoneNo: "+1 813-426-1785",
  email: "ramanadata568@gmail.com",
};
