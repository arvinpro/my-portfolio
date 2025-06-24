import React from "react";
import {
  Github,
  Linkedin,
  Phone,
  Mail,
  Send,
} from "lucide-react"; // Icons
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
          Contact <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-purple-600" />
              <span className="text-gray-800 dark:text-gray-300">+977-9861140141</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-purple-600" />
              <span className="text-gray-800 dark:text-gray-300">jimdar900@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="text-purple-600" />
              <a
                href="https://github.com/arvinpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-purple-600 transition"
              >
            arvinpro
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 w-5 h-5" />
              <a
                href="https://wa.me/9800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-purple-600 transition"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="text-blue-600" />
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-purple-600 transition"
              >
                arvinjm04
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaTelegramPlane className="text-sky-500 w-5 h-5" />
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-purple-600 transition"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
