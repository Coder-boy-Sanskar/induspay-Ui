import React, { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const OurStory = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <section className="contain ourStory-container">
      <div className="ourStroy-main">
        <div className="upper">
          <span
            style={{ color: "#F64B4B", fontSize: "13px", fontWeight: "700" }}
          >
            Our Story
          </span>
          <div className="upper-bold">
          We know how everything works
            <br /> and why your business is failing <br />
            over and over again.
          </div>
        </div>
        <div className="story-images-txt">
          <div className="image-boy">
            <motion.div
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <img
                src="/home/b1.png"
                alt="Description of the "
                title="Optional title text"
                loading="lazy"
                className="boy-img"
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
          </div>
          <div className="image-girls">
            <motion.div
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <motion.img
                src="/home/g1.png"
                alt="Description of the image"
                title="Optional title text"
                className="g1-img"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
          
              <motion.img
                src="/home/fill.png"
                alt="Description of the image"
                title="Optional title text"
                className="fill-img"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
          
           
              <motion.img
                src="/home/g2.png"
                alt="Description of the image"
                title="Optional title text"
                className="g2-img"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
           

            <div className="story-msg">
              We share common trends and strategies for improving your <br />
              rental income and making sure you stay in high demand. With
              <br /> lots of unique blocks, you can easily build a page without
              <br /> coding. Build your next landing page.
            </div>
          </div>
        </div>
        <div className="story-ratting">
          <div className="visit crd">
            <motion.div whileHover={{ scale: 1.2 }}></motion.div>
            <span className="spa">1M+</span>
            <div>
              Customers visit Omega every month <br />
              to get their service done.
            </div>
          </div>
          <div className="satisfaction crd">
            <span className="spa">92%</span>
            <div>
              Satisfaction rate comes from our
              <br /> awesome customers.
            </div>
          </div>
          <div className="rating crd" style={{ marginRight: "0px" }}>
            <span className="spa">4.9/5.0</span>
            <div>
              Average customer ratings we have
              <br /> got all over internet.{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
