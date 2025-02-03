import React from "react";
import { Languages } from "../utils/Constants";

const About = 
({ lang }) => {
  const LANG = Languages[lang] || Languages.default; 

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold">{LANG.title}</h2>
      <p className="mt-4 text-lg">{LANG.description}</p>
    </div>
  );
};

export default About;
