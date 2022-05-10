import React, { useRef } from "react";
import Button from "../../components/atoms/Button/Button";
import Grid from "../../components/molecules/Grid/Grid";
import Helmet from "../../components/templates/Helmet/Helmet";

const contact_infos = [
  {
    icon: "bx bxs-map",
    name: "Địa chỉ",
    detail: "Công ty cổ phần Thời trang YODY",
  },
  {
    icon: "bx bx-question-mark",
    name: "Gửi thắc mắc",
    detail: "chamsockhachhang@yody.vn",
    type: "email",
  },
  {
    icon: "bx bxs-phone",
    name: "Điện thoại",
    detail: "024 730 56665",
    type: "phone",
  },
];

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const contentRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "name: " +
      nameRef.current.value +
      " email: " +
      emailRef.current.value +
      " content: " +
      contentRef.current.value
    );
  };

  return (
    <Helmet title="Liên hệ">
      <div className="contact_frame">
        <p className="title">Liên hệ</p>
        <div className="contact-top" >
          <Grid col={3} gap={20} >
            {contact_infos.map((item, index) => (
              <div className="contact" key={index}>
                <div className="contact__icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact__info">
                  <div className="contact__info__name">{item.name}</div>
                  <a
                    href={
                      item.type === "email"
                        ? `mailto:chamsockhachhang@yody.vn`
                        : item.type === "phone"
                          ? "tel:02473056665"
                          : "/"
                    }
                    className="contact__info__details"
                  >
                    {item.detail}
                  </a>
                </div>
              </div>
            ))}
          </Grid>
        </div>

        <div className="contact-bottom  grid grid-col-3">
          <div className="contact__map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.674141297035!2d108.25988381465012!3d15.978384588937072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314210f2d038af0f%3A0x51c64b1130497f99!2zRlBUIENvbXBsZXggxJDDoCBO4bq1bmc!5e0!3m2!1svi!2s!4v1650460867272!5m2!1svi!2s"
              width="auto"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact__form">
            <form onSubmit={handleSubmit}>
              <Grid col={2} gap={20}>
                <div className="form-group">
                  <label>Họ và tên</label>
                  <input className="form-control" type="text" ref={nameRef} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" type="email" ref={emailRef} />
                </div>
              </Grid>

              <div className="form-group contact__form-content">
                <label>Nội dung</label>
                <textarea className="form-control" type="text" ref={contentRef} />
              </div>
              <Button size="sm">Gửi liên hệ</Button>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
