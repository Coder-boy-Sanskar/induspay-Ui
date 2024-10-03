import React from "react";

const Work = () => {
  return (
    <section className="contain work-container">
      <div className="upper work-upper">
        <span
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#F64B4B",
            lineHeight: "15.72px",
            paddingLeft: "171px",
          }}
        >
          CASE STUDIES
        </span>
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
          Our works describe why we are <br />
          the best in the business{" "}
        </div>
      </div>
      <div className="main">
        <div className="main-left">
          <div>
            <img
              src="/home/whyus/m1.png"
              alt="Description of the "
              title="Optional title text"
              loading="lazy"
              className="midle-img"
            />
            <div className="main-text">
              <span>Graphic Design</span>
              <div>Aura Branding Design</div>
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <img
              src="/home/whyus/m2.png"
              alt="Description of the "
              title="Optional title text"
              loading="lazy"
              className="midle-img"
            />
            <div className="main-text">
              <span>Graphic Design</span>
              <div>Aura Branding Design</div>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div>
            <img
              src="/home/whyus/m3.png"
              alt="Description of the "
              title="Optional title text"
              loading="lazy"
              className="midle-img"
            />
            <div className="main-text">
              <span>Graphic Design</span>
              <div>Aura Branding Design</div>
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <img
              src="/home/whyus/m4.png"
              alt="Description of the "
              title="Optional title text"
              loading="lazy"
              className="midle-img"
            />
            <div className="main-text">
              <span>Graphic Design</span>
              <div>Aura Branding Design</div>
            </div>
          </div>
        </div>
      </div>
      <div className="botom">
        {" "}
        <a href="#" class="see-all-work">
          See all work
          <span class="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Work;
