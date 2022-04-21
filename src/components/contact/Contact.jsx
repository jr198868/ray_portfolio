import React from "react";
import './Contact.css';
// import background from "../../assets/dinosaur1.jpg";
// import background from "../../assets/dinosaur2.jpg";
// import background from "../../assets/dinosaur3.jpg";
// import background from "../../assets/dinosaur4.jpg";
// import background from "../../assets/dinosaur5.jpg";
// import background from "../../assets/dinosaur6.jpg";
import background from "../../assets/planet.jpeg";

class Contact extends React.Component {
  render() {
    return (
      <div className="paralax-mf footer-paralax bg-image sect-mt4 route"
         style={{ backgroundImage: "url(" + background + ")" }}
      >
        <div id="contact" className="contactcontainer">

          <div>
            <form action="https://formspree.io/f/mnqwvjew" method="POST">
              <div id="sendmessage">
                Message has been sent. 
              </div>

                <div className = "contactrow">
                  <div className="form-group">
                    <input
                      type="text"
                      className="contactform"
                      placeholder="Your Name"
                      name="name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="contactform"
                      name="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="contactform"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                   
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <textarea
                      className="contactform"
                      rows="5"
                      name="message"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                   
                  </div>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="button button-a button-big button-rouded"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
            
        </div>
         

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Contact;