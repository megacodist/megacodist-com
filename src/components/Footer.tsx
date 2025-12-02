import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.ftrContainer}>

        {/* Item 2: Social Icons */}
        <div className={styles.copyright}>
          &copy; {currentYear} Megacodist. See{" "}
          <a href="/license" className="link link-primary">License</a>.
        </div>
        
        {/* Item 3: Social Icons */}
        <div className={styles.socialIcons}>
          <a href="#" className="m3-icon-button hover:text-blue-500" aria-label="LinkedIn">
            <FaLinkedin className="m3-icon-m" />
          </a>
          <a href="#" className="m3-icon-button hover:text-gray-400" aria-label="GitHub">
            <FaGithub className="m3-icon-m" />
          </a>
          <a href="#" className="m3-icon-button hover:text-white" aria-label="X (Twitter)">
            <FaXTwitter className="m3-icon-m" />
          </a>
          <a href="#" className="m3-icon-button hover:text-blue-400" aria-label="Telegram">
            <FaTelegram className="m3-icon-m" />
          </a>
          <a href="#" className="m3-icon-button hover:text-green-500" aria-label="WhatsApp">
            <FaWhatsapp className="m3-icon-m" />
          </a>
          <a href="#" className="m3-icon-button hover:text-pink-500" aria-label="Instagram">
            <FaInstagram className="m3-icon-m" />
          </a>
        </div>

      </div>
    </footer>
  );
}