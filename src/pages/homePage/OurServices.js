import React from "react";

const OurServices = () => {
  return (
    <section className="contain service-container">
      <div className="service-text">
        <div
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#F64B4B",
            lineHeight: "15.72px",
          }}
        >
          Our services
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "48px",
            letterSpacing: "-1.2px",
            marginTop: "23px",
            textAlign: "center",
          }}
          className="ourserive-bold"
        >
          We provide great services for our
          <br /> customers based on needs
        </div>
      </div>

      <div className="service-cards">
        <img
          style={{ marginRight: "15px" }}
          src="/home/service1.png"
          alt="Description of the "
          width="350"
          height="483"
          title="Optional title text"
          loading="lazy"
          className="your-css-class"
        />{" "}
        <img
          style={{ marginRight: "15px", marginLeft: "15px" }}
          src="/home/2.png"
          alt="Description of the "
          width="350"
          height="483"
          title="Optional title text"
          loading="lazy"
          className="your-css-class"
        />{" "}
        <img
          style={{ marginLeft: "15px", zIndex: "2", position: "relative" }}
          src="/home/3.png"
          alt="Description of the "
          width="350"
          height="483"
          title="Optional title text"
          loading="lazy"
          className="your-css-class"
        />
      </div>
      <img
        style={{ marginRight: "15px" }}
        src="/home/serviceDot.png"
        alt="Description of the "
        title="Optional title text"
        loading="lazy"
        className="serviceDot"
      />
      <div className="ratting">
        <img
          style={{ marginRight: "15px" }}
          src="/home/Oval.png"
          alt="Description of the "
          title="Optional title text"
          loading="lazy"
          className="ratting-img"
        />
        <div className="ratting-txt">
          <div className="starts">
            <span class="star">★</span> <span class="star">★</span>{" "}
            <span class="star">★</span> <span class="star">★</span>{" "}
            <span class="star">★</span>
          </div>
          <div className="ratting-msg">
            “OMG! I cannot believe that I have got a brand new landing page{" "}
            <br />
            after getting Albino. It was super easy to edit and publish.”
          </div>
          <div style={{fontFamily:'Poppins',marginTop:"15px",color:"#737a8c"}}> <span style={{fontWeight:'700',fontSize:"17px",color:"#161C2D"}}>Franklin Hicks</span>   Web Developer  </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
