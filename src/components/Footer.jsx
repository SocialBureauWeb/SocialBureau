import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 flex flex-col items-center space-y-4 pb-30">
      {/* Social Icons */}
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="mailto:info@example.com"
          className="hover:text-white transition-colors duration-300"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-center">
         © 2024 SocialBureau. All rights reserved.
      </p>
    </footer>
  );
}
