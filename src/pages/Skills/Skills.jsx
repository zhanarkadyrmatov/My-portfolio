import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithubSquare,
} from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

import "swiper/css";
import "swiper/css/pagination";

import "./skills.scss";

import { Pagination } from "swiper";

function Skills() {
  return (
    <section id="skills">
      <h2 className="skills__title">Skills</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaHtml5 className="html" />
            </div>
            <span className="logo__text">HTML5</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaCss3Alt className="css" />
            </div>
            <span className="logo__text">CSS3</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaSass className="sass" />
            </div>
            <span className="logo__text">Sass</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaBootstrap className="bootstrap" />
            </div>
            <span className="logo__text">Bootstrap</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaJs className="java" />
            </div>
            <span className="logo__text">Javascript</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaReact className="react" />
            </div>
            <span className="logo__text">React.js</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaGitAlt className="git" />
            </div>
            <span className="logo__text">Git</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <FaGithubSquare className="github" />
            </div>
            <span className="logo__text">Github</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logotif">
            <div className="sass__logo">
              <SiVisualstudiocode className="visual" />
            </div>
            <span className="logo__text">Visual studio code</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default Skills;
