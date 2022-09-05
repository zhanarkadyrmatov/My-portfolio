import React from "react";
import "./portfolio.scss";
import { motion } from "framer-motion";
import Calculator from "../../img/Calculator.png";
import TodoApp from "../../img/Todoapp.png";
import Travel from "../../img/Travel.png";
import ReadMore from "../../img/Readmore.png";
import Akardion from "../../img/Akardion.png";
import ReactCal from "../../img/React-cal.png";
import KursValut from "../../img/Kurs.png";
import Book from "../../img/Book.png";

import { FaGithub } from "react-icons/fa";
import { CgSmileMouthOpen } from "react-icons/cg";

function Portfolio() {
  const blog = [
    {
      id: 1,
      name: "Kurstuk ish",
      image: Travel,
      demo: "https://zhanarkadyrmatov.github.io/Kurstuk-ish-travel/",
      link: "https://github.com/zhanarkadyrmatov/Kurstuk-ish-travel",
    },
    {
      id: 2,
      name: "React-calculate",
      image: ReactCal,
      demo: "https://zhanarkadyrmatov.github.io/React-calculate/",
      link: "https://github.com/zhanarkadyrmatov/React-calculate/tree/main",
    },
    {
      id: 3,
      name: "Book-list",
      image: Book,
      demo: "https://zhanarkadyrmatov.github.io/Book-list/",
      link: "https://github.com/zhanarkadyrmatov/Book-list",
    },
    {
      id: 4,
      name: "Calculator",
      image: Calculator,
      demo: "https://zhanarkadyrmatov.github.io/Calculator/",
      link: "https://github.com/zhanarkadyrmatov/Calculator",
    },
    {
      id: 5,
      name: "Todo App",
      image: TodoApp,
      demo: "https://zhanarkadyrmatov.github.io/Todo-List/",
      link: "https://github.com/zhanarkadyrmatov/Todo-List",
    },

    {
      id: 6,
      name: "Read More",
      image: ReadMore,
      demo: "https://zhanarkadyrmatov.github.io/Read-More/",
      link: "https://github.com/zhanarkadyrmatov/Read-More",
    },
    {
      id: 7,
      name: "Acardion",
      image: Akardion,
      demo: "https://zhanarkadyrmatov.github.io/acardion/",
      link: "https://github.com/zhanarkadyrmatov/acardion",
    },
    {
      id: 8,
      name: "Kurs-valut",
      image: KursValut,
      demo: "https://zhanarkadyrmatov.github.io/Kurs-valut/",
      link: "https://github.com/zhanarkadyrmatov/Kurs-valut",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container portfolio__container">
        <h2 className="portfolio__title">Portfolio</h2>
        <ul className="portfolio__blog">
          {blog.map((blog) => {
            return (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="portfolio__list"
              >
                <img
                  className="portfolio__img"
                  src={blog.image}
                  alt={blog.name}
                />
                <h3 className="portfolio__text">{blog.name}</h3>

                <div className="portfolio__hover">
                  <div>
                    <a
                      key={blog.id}
                      className="portfolio__github"
                      href={blog.link}
                    >
                      <FaGithub className="portfolio__logo" />
                      <span>Github</span>
                    </a>
                    <a className="portfolio__demo" href={blog.demo}>
                      <CgSmileMouthOpen />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
