import "./Offline.css";
import React from 'react'

function Offline() {
  return (
    <>
    <section className="offline">
        <div className="container">
            <div className="offline-wrappers">
                 <h2 className="offline-title">Our offline stores</h2>
                <div className="offline-wrapper">
                <div className="offline-left">
                  <p className="offline-text">Monride store - 1901 York Street, Cir shiloh, India 560018</p>
                </div>
                <div className="offline-right">
                    <p className="offline-text">Monride store - 2464 Royal Mesa , New Jersey, China 172829</p>
                </div>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Offline