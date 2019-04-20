import React from "react"
import "./Contact.css"

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              How to <br />
              reach me..
            </p>
            <p className="separator" />
            <p className="subtitle">
              Call me : +917703969660
              <br />
              <span className="mail">Mail me : ringosingon@live.com</span>
              <br />
              <span className="address">Current Address : New Delhi</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
