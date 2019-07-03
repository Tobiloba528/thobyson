import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        color: "white",
        padding: "20px 0",
        background: "rgb(31, 52, 70"
      }}
    >
      <div className="row" style={{ width: "100%"}}>
        <div className="col-sm-6">
          <p>
            <i className="fa fa-map-marker" />{" "}
            <a
              href="https://goo.gl/maps/VdfBD1Ks1Km3VoYTA"
              style={{ color: "white" }}
            >
              Ikorodu, Lagos, Nigeria
            </a>
          </p>
          <p>
            <i className="fa fa-phone" />{" "}
            <a href="tel:2348165543329" style={{ color: "white" }}>
              +2348165543329
            </a>
          </p>
          <p>
            <i className="fa fa-envelope" />{" "}
            <a
              href="mailto:omitomotobiloba@gmail.com"
              style={{ color: "white" }}
            >
              omitomotobiloba@gmail.com
            </a>
          </p>
        </div>

        <div className="col-sm-6">
          <p style={{ fontWeight: "bold" }}>Links</p>
          <i
            className="fa fa-linkedin text-secondary"
            style={{ background: "white", padding: "1px" }}
          />{" "}
          <a
            href="https://www.linkedin.com/in/omitomo-tobiloba/"
            style={{ color: "white" }}
          >
            Linkedin
          </a>
          <br />
          <i
            className="fa fa-twitter text-secondary"
            style={{ background: "white", padding: "1px" }}
          />{" "}
          <a
            href="https://twitter.com/iam_thobyson"
            style={{ color: "white" }}
          >
            Twitter{" "}
          </a>
          <br />
          <i
            className="fa fa-github text-secondary"
            style={{ background: "white", padding: "1px" }}
          />{" "}
          <a href="https://github.com/Tobiloba528" style={{ color: "white" }}>
            Github
          </a>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright THOBYSON &copy; 2019</p>
      </div>
    </div>
  );
};

export default Footer;
