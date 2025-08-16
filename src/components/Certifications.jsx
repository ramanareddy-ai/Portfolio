import { motion } from "framer-motion";

const CERTS = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    url: "https://www.credly.com/badges/1863f664-d362-43b7-bd5d-045b8cc1a3b5/linked_in_profile",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2024",
    url: "https://www.credly.com/badges/92e4670a-9129-41a4-9fc5-e828486e60af/linked_in_profile",
  },
  {
    title: "Oracle Certified Associate, Java SE 8 Programmer I",
    issuer: "Oracle",
    date: "—",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=24F9957EB3C33092F6D97BF2737CEE68EA9FF1681F9A56510814B3C656F49289",
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM",
    date: "—",
    url: "https://www.credly.com/badges/7ef5f923-d0ee-4a0b-96d8-a158031f8d07/linked_in_profile",
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "—",
    url: "https://www.hackerrank.com/certificates/iframe/567bc9b39185",
  },
];

const titleVar = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.06 * i },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="pb-12">
      <motion.h2
        variants={titleVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="my-10 text-center text-2xl font-bold"
      >
        🎓 Certifications
      </motion.h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {CERTS.map((c, i) => (
          <motion.a
            key={c.title + c.date}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            variants={cardVar}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="group rounded-xl border border-neutral-800 p-4 no-underline transition-colors hover:border-violet-500"
            title="Open certificate"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold group-hover:text-violet-300">
                {c.title}
              </h3>
              <span className="ml-3 shrink-0 text-xs text-neutral-400">{c.date}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-400">{c.issuer}</p>
            <p className="mt-2 text-xs text-neutral-500">Click to view credential</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
