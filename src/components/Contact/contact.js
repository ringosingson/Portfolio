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
            <div className="subtitle">
              Call me : +917703969660
              <br />
              <div className="mail">Mail me : ringosingon@live.com</div>
              <br />
              <div className="address">Current Address : New Delhi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
