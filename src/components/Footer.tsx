import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      {/* 
        1. flex-col-reverse: Mobile. Stacks items bottom-to-top. 
           (Icons become Top, Copyright becomes Bottom)
        2. md:flex-row: Desktop. Resets to side-by-side row.
           (Copyright Left, Icons Right)
      */}
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        
        {/* Item 1: Copyright */}
        <div className="text-sm text-gray-400">
          &copy; {currentYear} Megacodist. All rights reserved.
        </div>

        {/* Item 2: Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)">
            <FaXTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Telegram">
            <FaTelegram size={24} />
          </a>
          <a href="#" className="hover:text-green-500 transition-colors" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
}