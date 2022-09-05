import React from "react";
import Image from "../../img/janar.JPG";
import "./home.scss";
import { init } from "ityped";
import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Home() {
  const animatedTexRef = useRef();

  useEffect(() => {
    init(animatedTexRef.current, {
      showCursor: true,
      strings: ["React Developer", "Frontent Developer"],
      backDelay: 2000,
      backSpeed: 60,
      typeSpeed: 100,
    });
  }, []);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const [contact, setContact] = useState(false);
  const openContact = () => {
    setContact(!contact);
  };

  return (
    <section id="home" className="home">
      <div className="container home__container">
        <div className="home__left">
          <h4 className="home__h4">Hello!</h4>
          <h1 className="home__title">
            I`m <span>Bekmyrza uulu Janarbek</span>
          </h1>
          <h2 className="home__text">
            I am a <span ref={animatedTexRef}></span>
          </h2>
          <p className="home__p">
            I, Bekmyrza uulu Zhanarbek, was born on January 1, 2002 in Aksy
            district of Jalal-Abad region. I graduated from school in 2020,
            entered the Osh KUU college and graduated in 2022. I am currently
            studying at Osh MU University.
          </p>
          <div className="home__buttuns">
            <a
              href="https://myresume.ru/resume/7vidl25PANQ/"
              className="home__rez"
            >
              Rezume
            </a>
            <button onClick={openContact} className="home__cont">
              Contact
            </button>
          </div>
        </div>

        <div className="home__rigth">
          <img className="home__img" src={Image} alt="Janarbek" />
        </div>
      </div>

      <div
        className={contact ? "home__contact contact__form" : "home__contact"}
      >
        <h1>Our Contact</h1>
        <div className="container contact__container">
          <button onClick={openContact} className="contact__btn">
            X
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Your Name
              <input
                placeholder="John Doe"
                {...register("name", {
                  required: "Имя должно быть заполнена!",
                  minLength: {
                    value: "3",
                    message: "Минимум 3 символе",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>

            <label>
              Your Email
              <input
                placeholder="John@conpany.com"
                {...register("email", {
                  required: "Email должно быть заполнена!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Введите корректную почту!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
            <label>
              Your Message
              <textarea
                {...register("msg", {
                  maxLength: 10,
                  message: "Максимум 10 символов!",
                })}
              ></textarea>
            </label>
            <div className="contact__error">
              {errors?.msg && (
                <p>{errors?.msg?.message || "Максимум 10 символов!"}</p>
              )}
            </div>

            <input type="submit" value="Send" disabled={!isValid} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home;
