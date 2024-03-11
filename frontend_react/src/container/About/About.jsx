import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  console.log("abouts length", abouts.length);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text-about">
        I am a <span>Full Stack Developer</span>
        <br />
      </h2>
      <p className="p-text-about">
        I'm a Full Stack Developer with excellent experties in React.js. My goal is to build a fast, flexible, mobile-first website that clearly communicates with visitors. I have done my Btech in Computer Science and Engineering from Phonics Group of Institutions , Roorkee. I am having 2+ years of experience as a web developer. I have developed various screens for front end part of many multilingual products. I have background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency .Strong problem solving & Technical abilities with proficiency in grasping new technical concepts quickly and utilizing them in effective manner. Strong professional willing to be an asset for an organization.
      </p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="about.title" />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
