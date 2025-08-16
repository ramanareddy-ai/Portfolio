import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 3rem",
        background: "transparent",
        zIndex: 50,
        color: "#e5e5e5",
      }}
    >
      {/* Left — initials */}
      <span
        style={{
          fontSize: "1.8rem",
          fontWeight: 500,
          letterSpacing: "1px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        RK
      </span>

      {/* Right — social icons */}
      <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.5rem" }}>
        <a
          href="https://www.linkedin.com/in/ramanareddy444/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ color: "#b3b3b3", transition: "color 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0a66c2")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#b3b3b3")}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ramanareddy-ai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ color: "#b3b3b3", transition: "color 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#b3b3b3")}
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
