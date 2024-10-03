import React from "react";

const WhyUs = () => {
  return (
    <section className="contain whhyus-container">
      <div className="whyleft-img">
        <img
          src="/home/whyus/whyleft.png"
          alt="Description of the "
          title="Optional title text"
          loading="lazy"
          className="whyleft"
        />
      </div>
      <div className="upper">
        <span
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#F64B4B",
            lineHeight: "15.72px",
            paddingLeft:"171px"
          }}
        >Why choose us</span>
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
          People choose us because we <br /> serve the best for everyone
        </div>
      </div>
      <div className="middle">

      <div className="sub-middle">
      <img
          src="/home/whyus/1.png"
          alt="Description of the "
          title="Optional title text"
          loading="lazy"
          className="midle-img"
        />
        <div className="middle-txt">
            <span className="midle-head">Dedicated project manager</span>
            <div className="midle-main">With lots of unique blocks, you can <br/> easily build a page without coding.<br/> Build your next landing page.</div>
        </div>
      </div>
      <div className="sub-middle">
      <img
          src="/home/whyus/2.png"
          alt="Description of the "
          title="Optional title text"
          loading="lazy"
          className="midle-img"
        />
        <div className="middle-txt">
            <span className="midle-head">Organized tasks</span>
            <div className="midle-main">With lots of unique blocks, you can<br/> easily build a page without coding.<br/> Build your next landing page.</div>
        </div>
      </div>
      <div className="sub-middle">
      <img
          src="/home/whyus/3.png"
          alt="Description of the "
          title="Optional title text"
          loading="lazy"
          className="midle-img"
        />
        <div className="middle-txt">
            <span className="midle-head">Easy feedback sharing</span>
            <div className="midle-main">With lots of unique blocks, you can <br/> easily build a page without coding.<br/> Build your next landing page.</div>
        </div>
      </div>
      <div className="sub-middle">
      <img
          src="/home/whyus/4.png"
          alt="Description of the "
          title="Optional title text"
          loading="lazy"
          className="midle-img"
        />
        <div className="middle-txt">
            <span className="midle-head">Never miss deadline</span>
            <div className="midle-main">With lots of unique blocks, you can <br/> easily build a page without coding.<br/> Build your next landing page.</div>
        </div>
      </div>
      </div>
      <div className="botom">
        <div className="btm-left">
           <span style={{fontWeight:'700',fontSize:"32px",color:"#161C2D"}}>Ready to launch your next project?</span>
           <div className="btml-txt">With lots of unique blocks, you can easily build a page without<br/> coding. Build your next landing page.</div>
        </div>
        <div className="btm-right"> <button className="nav-btn">Get started a project</button></div>

      </div>
    </section>
  );
};

export default WhyUs;
