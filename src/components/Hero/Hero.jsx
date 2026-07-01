import React from "react";
import SliderPackage from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import hero_img1 from "./img/hero_img1.png";
import hero_img2 from "./img/hero_img2.png";
import hero_img3 from "./img/hero_img3.png";
import hero_img4 from "./img/hero_img4.png";

const Slider = SliderPackage.default ? SliderPackage.default : SliderPackage;

const Hero = () => {
  return (
    <section className="hero">
      <Slider
        dots={true}
        arrows={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={3000}
        speed={800}
        slidesToShow={1}
        slidesToScroll={1}
        className="hero_slider"
      >

        <div className="hero_slide">
          <div className="container hero_inner">
            <article className="hero_content">
              <span className="hero_badge">Limited Edition</span>
              <h1 className="hero_title">There's No Light Bicycle there's Bicycle A5 BLACK</h1>
              <p className="hero_text">Get your unique bicycle style with our various collections. Our finale A5 BLACK are available while stock lasts.</p>
              <div className="hero_btns">
                <a href="#" className="hero_btn hero_btn--main">Buy now A5 BLACK</a>
                <a href="#" className="hero_btn hero_btn--outline">View collection</a>
              </div>
            </article>
            <img src={hero_img1} alt="Bicycle A5 BLACK limited edition" className="hero_img" />
          </div>
        </div>

        <div className="hero_slide">
          <div className="container hero_inner">
            <article className="hero_content">
              <span className="hero_badge">New Series</span>
              <h2 className="hero_title">Speed and Power — Bicycle X7 RACE</h2>
              <p className="hero_text">Built for professional sport, delivering flawless control even at high speeds.</p>
              <div className="hero_btns">
                <a href="#" className="hero_btn hero_btn--main">Buy now X7 RACE</a>
                <a href="#" className="hero_btn hero_btn--outline">View collection</a>
              </div>
            </article>
            <img src={hero_img2} alt="Bicycle X7 RACE" className="hero_img" />
          </div>
        </div>

        <div className="hero_slide">
          <div className="container hero_inner">
            <article className="hero_content">
              <span className="hero_badge">Exclusive Model</span>
              <h2 className="hero_title">Perfect for the City — Bicycle URBAN PRO</h2>
              <p className="hero_text">Designed for everyday riding with a comfortable and modern look.</p>
              <div className="hero_btns">
                <a href="#" className="hero_btn hero_btn--main">Buy now URBAN PRO</a>
                <a href="#" className="hero_btn hero_btn--outline">View collection</a>
              </div>
            </article>
            <img src={hero_img3} alt="Bicycle URBAN PRO" className="hero_img" />
          </div>
        </div>

        <div className="hero_slide">
          <div className="container hero_inner">
            <article className="hero_content">
              <span className="hero_badge">Limited Quantity</span>
              <h2 className="hero_title">Together with Nature — Bicycle TRAIL MAX</h2>
              <p className="hero_text">Reliable and durable on any terrain, the perfect choice for adventure lovers.</p>
              <div className="hero_btns">
                <a href="#" className="hero_btn hero_btn--main">Buy now TRAIL MAX</a>
                <a href="#" className="hero_btn hero_btn--outline">View collection</a>
              </div>
            </article>
            <img src={hero_img4} alt="Bicycle TRAIL MAX" className="hero_img" />
          </div>
        </div>

      </Slider>
    </section>
  );
};

export default Hero;