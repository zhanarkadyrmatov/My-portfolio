import React from "react";
import { motion } from "framer-motion";
import "./links.scss";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTelegram,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
  FaEnvelope,
} from "react-icons/fa";

function Links() {
  const links = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/zhanarkadyrmatov",
      logo: <FaGithubSquare className="links__logo gith" />,
    },
    {
      id: 8,
      name: "Gmail",
      link: "mailto:janarbek.bekmyrzauulu.alt@gmail.ru",
      logo: <FaEnvelope className="links__logo gmail" />,
    },
    {
      id: 2,
      name: "LinkedinIn",
      link: "https://www.linkedin.com/in/%D0%B6%D0%B0%D0%BD%D0%B0%D1%80%D0%B1%D0%B5%D0%BA-%D0%B1%D0%B5%D0%BA%D0%BC%D1%8B%D1%80%D0%B7%D0%B0-%D1%83%D1%83%D0%BB%D1%83-4a643223a/",
      logo: <FaLinkedin className="links__logo linkedinin" />,
    },
    {
      id: 7,
      name: "Phone",
      link: "tel:+996504802002",
      logo: <FaPhoneSquareAlt className="links__logo phone" />,
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100057372308875",
      logo: <FaFacebookSquare className="links__logo facebook" />,
    },
    {
      id: 5,
      name: "Instagram",
      link: "https://www.instagram.com/zhanarbek_official",
      logo: <FaInstagramSquare className="links__logo instagram" />,
    },
    {
      id: 4,
      name: "Telegram",
      link: "https://tlgg.ru/0504802002",
      logo: <FaTelegram className="links__logo telegram" />,
    },

    {
      id: 6,
      name: "Whatsapp",
      link: "https://wa.me/996504802002",
      logo: <FaWhatsappSquare className="links__logo whatsapp" />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="links"
      id="Links"
    >
      <div className="container">
        <h2 className="links__title">Find me in Web</h2>

        <ul className="links__find">
          {links.map((link) => {
            return (
              <li className="links__item">
                <div key={link.id} className="links__link">
                  <a href={link.link} className="links__text">
                    {link.name}
                  </a>
                  <li className="links__span">{link.logo}</li>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default Links;
