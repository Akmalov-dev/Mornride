import "./Grab.css";
import React from 'react'
import grab from "./image/grab.png";
function Grab() {
  return (
    <>
    <section className="grab">
        <div className="container">
            <div className="grab-wrapper">
                <div className="grab-left">
                    <p className="grab-text">Grab exciting deals and special promos today, Don’t miss out!</p>
                    <button className="grab-btn">Grab now S12 Blue</button>
                </div>
                <div className="grab-right">
                    <img className="grab-img" src={grab} alt="rasm" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Grab