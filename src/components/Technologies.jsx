import { motion } from "framer-motion";

// EDIT these items to your stack (colors are Tailwind classes)
const TOOLKIT = [
  { title: "Languages", items: [
    { name: "Python", color: "bg-blue-600 text-white" },
    { name: "SQL", color: "bg-sky-600 text-white" },
    { name: "Java", color: "bg-blue-700 text-white" },
    { name: "R", color: "bg-indigo-500 text-white" },
    { name: "JavaScript", color: "bg-yellow-400 text-black" },
    { name: "Bash", color: "bg-green-600 text-white" },
  ]},
  { title: "ML & MLOps", items: [
    { name: "Scikit-learn", color: "bg-orange-400 text-white" },
    { name: "XGBoost", color: "bg-blue-400 text-white" },
    { name: "TensorFlow", color: "bg-orange-500 text-white" },
    { name: "PyTorch", color: "bg-red-500 text-white" },
    { name: "MLflow", color: "bg-indigo-700 text-white" },
    { name: "SageMaker", color: "bg-blue-600 text-white" },
    { name: "Docker", color: "bg-blue-500 text-white" },
    { name: "Kubernetes", color: "bg-blue-400 text-white" },
    { name: "GitHub Actions", color: "bg-blue-700 text-white" },
    { name: "Jenkins", color: "bg-red-600 text-white" },
  ]},
  { title: "GenAI & NLP", items: [
    { name: "OpenAI", color: "bg-purple-700 text-white" },
    { name: "Claude", color: "bg-yellow-500 text-black" },
    { name: "Hugging Face", color: "bg-yellow-400 text-black" },
    { name: "LangChain", color: "bg-emerald-600 text-white" },
    { name: "LlamaIndex", color: "bg-blue-500 text-white" },
    { name: "RAG", color: "bg-gray-600 text-white" },
    { name: "Whisper", color: "bg-teal-500 text-white" },
    { name: "spaCy", color: "bg-teal-400 text-white" },
    { name: "Prompt Engineering", color: "bg-gray-500 text-white" },
  ]},
  { title: "Data Analysis", items: [
    { name: "Pandas", color: "bg-purple-800 text-white" },
    { name: "NumPy", color: "bg-green-500 text-white" },
    { name: "Excel", color: "bg-green-600 text-white" },
  ]},
  { title: "Visualization & BI", items: [
    { name: "Power BI", color: "bg-yellow-500 text-black" },
    { name: "Tableau", color: "bg-blue-500 text-white" },
    { name: "Looker", color: "bg-blue-600 text-white" },
    { name: "Matplotlib", color: "bg-blue-400 text-white" },
    { name: "Seaborn", color: "bg-blue-300 text-white" },
  ]},
  { title: "Databases & Warehouses", items: [
    { name: "PostgreSQL", color: "bg-blue-700 text-white" },
    { name: "MySQL", color: "bg-blue-500 text-white" },
    { name: "SQL Server", color: "bg-red-500 text-white" },
    { name: "Snowflake", color: "bg-sky-500 text-white" },
    { name: "Amazon Redshift", color: "bg-purple-500 text-white" },
    { name: "BigQuery", color: "bg-indigo-500 text-white" },
  ]},
  { title: "Cloud & ETL", items: [
    { name: "AWS", color: "bg-stone-900 text-yellow-400" },
    { name: "Google Cloud", color: "bg-blue-600 text-white" },
    { name: "Azure", color: "bg-blue-700 text-white" },
    { name: "Airflow", color: "bg-blue-500 text-white" },
    { name: "AWS Glue", color: "bg-yellow-500 text-black" },
    { name: "REST APIs", color: "bg-emerald-600 text-white" },
    { name: "Batch / Stream", color: "bg-gray-600 text-white" },
  ]},
  { title: "Tools", items: [
    { name: "VS Code", color: "bg-blue-600 text-white" },
    { name: "Jupyter", color: "bg-orange-400 text-white" },
    { name: "Git", color: "bg-red-500 text-white" },
    { name: "Slack", color: "bg-purple-500 text-white" },
    { name: "Jira", color: "bg-blue-500 text-white" },
  ]},
];

const titleVar = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const groupVar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const chipVar = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

const Technologies = () => {
  return (
    <div className="space-y-2">
      {TOOLKIT.map((cat) => (
        <motion.div
          key={cat.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={groupVar}
          className="rounded-lg border border-neutral-800 p-3"
        >
          <h3 className="mb-1 text-sm font-semibold">{cat.title}</h3>
          <motion.div variants={groupVar} className="flex flex-wrap gap-1.5">
            {cat.items.map((it) => (
              <motion.span
                key={it.name}
                variants={chipVar}
                className={`px-2.5 py-0.5 text-xs font-medium rounded ${it.color}`}
              >
                {it.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Technologies;
