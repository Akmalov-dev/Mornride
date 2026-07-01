import React from 'react'
import "./Banner.css";
import vel from "./img/vel.png";

const Section = () => {
  return (
    <section className="collection">
      <div className="collection-top">
        <h2>
          Elevate your look with <br />
          our Bike collection
        </h2>

        <p>
          Discover the latest collection of bike and enhance your style
          with unique and fantastic collection.
        </p>
      </div>

      <div className="banner"      >
        <div className="overlay">
          <span>Epsilon T6</span>

          <h2>
            Whether it's climbing and going down steep trails
            <br />
            or jumping high at bike parks.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section;
