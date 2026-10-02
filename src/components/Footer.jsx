import React, { useEffect, useState } from "react";
import "../css/Footer.css";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 30; // px from bottom to trigger
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - threshold;
      setVisible(atBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      className={`app-footer ${visible ? "visible" : "hidden"}`}
      aria-hidden={!visible}
    >
      <div className="app-footer__inner">
        © {new Date().getFullYear()} Thejanu.
      </div>
    </footer>
  );
};

export default Footer;
