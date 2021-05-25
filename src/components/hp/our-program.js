import React from "react"

const OurProgram = () => {
  return (
    <div id="our-program">
      <div className="container-fluid">
        <div className="main">
          <h2>Our Program</h2>
          <div className="schools">
            <div className="">Primary School</div>
            <div className="">Middle School</div>
            <div className="">High School</div>
          </div>
        </div>
        <div className="side">
          <div className="covid">
            <div className="bg"></div>
            <div className="title">
              <small>COVID Response</small>
              <h3>Learning during COVID-19</h3>
              <p>
                This journey empowers our learners to develop character and
                fosters a joy of learning in experiences that occur both inside
                and outside the classroom.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div className="kap">
            <div className="bg"></div>
            <div className="title">
              <small>Keystone Activities Program</small>
              <h3>KAP</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProgram
