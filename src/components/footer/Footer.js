import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section className="contain footer-container" style={{backgroundColor:"#161c2d"}}>
      <div className="botom">
        <div className="btm-left">
          <span style={{ fontWeight: "700", fontSize: "32px" }}>
            Ready to launch your next project?
          </span>
          <div className="btml-txt">
            With lots of unique blocks, you can easily build a page without
            <br /> coding. Build your next landing page.
          </div>
        </div>
        <div className="btm-right">
          {" "}
          <button className="nav-btn">Get started a project</button>
        </div>
      </div>
      <div className="refrences">
        <div className="about colm">
          <span className="brain">Brainwave.io</span>
          <div>
            With lots of unique blocks, you can <br /> easily build a page
            without coding.
            <br /> Build your next landing page.
          </div>
          <p>
            <a href="#">
              <img
                src="/home/whyus/Path.png"
                alt="Description of the "
                title="Optional title text"
                loading="lazy"
                className="midle-img"
              />
            </a>{" "}
            <a href="#">
              <img
                src="/home/whyus/fb.png"
                alt="Description of the "
                title="Optional title text"
                loading="lazy"
                className="midle-img"
              />
            </a>{" "}
            <a href="#">
              <img
                src="/home/whyus/insta.png"
                alt="Description of the "
                title="Optional title text"
                loading="lazy"
                className="midle-img"
              />
            </a>{" "}
            <a href="#">
              <img
                src="/home/whyus/link.png"
                alt="Description of the "
                title="Optional title text"
                loading="lazy"
                className="midle-img"
              />
            </a>
          </p>
          {/* <ul>
          <li></li>
          <li></li>
          <li></li>
         </ul> 
         



         
         */}
        </div>
        <div className="company colm">
          <span>Company</span>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        
        <div className="product colm">
          <span>Product</span>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Help desk</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="services colm">
          <span>Services</span>
          <ul>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Content Writing</a></li>
            <li><a href="#">SEO for Business</a></li>
            <li><a href="#">UI Design</a></li>
          </ul>
        </div>

        <div className="legal colm">
          <span>Legal</span>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Return Policy</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
