import React, { useEffect } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import wave from "../../assets/images/wave.png";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <>
      <div className="quickContact__container">
        <h1
          className="quickContact_main_heading"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Quick Contact
        </h1>
        <img data-aos="fade-down" data-aos-duration="2000" src={wave} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div style={{ margin: "20px auto 0px auto", width: "100%" }}>
          <div className="contact-us-container">
            <div
              className="contact-form-container"
              //   style={{ width: "40%", border: "2px solid red" }}
            >
              {/* <h1 className="contact-form-heading">Quick Contact</h1> */}
              <form onSubmit={onSubmit}>
                <div className="contact-label">
                  <label
                    className="form-label"
                    htmlFor="name"
                    style={{ fontWeight: "bold" }}
                  >
                    Name
                  </label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <br />
                <div className="contact-label">
                  <label
                    className="form-label"
                    htmlFor="email"
                    style={{ fontWeight: "bold" }}
                  >
                    Email
                  </label>
                  <br />
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <br />
                <div className="contact-label">
                  <label
                    className="form-label"
                    htmlFor="subject"
                    style={{ fontWeight: "bold" }}
                  >
                    Subject
                  </label>
                  <br />
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <br />
                <div className="contact-label">
                  <label
                    className="form-label"
                    htmlFor="message"
                    style={{ fontWeight: "bold" }}
                  >
                    Message
                  </label>
                  <br />
                  <textarea
                    className="form-control"
                    id="message"
                    // style={{ height: "40px" }}
                    required
                  />
                </div>
                <button className="contact-btn" type="submit">
                  {formStatus}
                </button>
              </form>
            </div>
            <div
              className="contact-us-map"
              //   style={{ border: "2px solid red", display: "inline-block" }}
            >
              {/* <h1 className="contact-form-heading">Karachi Water Technology</h1> */}
              <p>
                Phone:
                <span className="contact_span">
                  (+92) 332-1985555 / 306-1985555
                </span>
              </p>
              <br />
              <p>
                Email:
                <span className="contact_span"> info@riwayat-e-mumtaz.com</span>
              </p>
              <br />
              <p>
                Address:
                <br />
                <br />
                <span class="mapouter">
                  <iframe
                    class="gmap_iframe"
                    width="100%"
                    height="300vh"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=350&amp;height=300&amp;hl=en&amp;q=mulla nihari karachi&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
