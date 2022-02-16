import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aleft">
        <div className="acard">
          <img src="assets/about.png" alt="" className="aimg" />
        </div>
      </div>
      <div className="aright">
        <div className="arightup">
        <h1 className="atitle">About Me</h1>
        <p className="asub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="adesc">
          Self-motivated and highly passionate fresher looking for an
          opportunity to learn more about the upcoming technologies. I am a
          goal-oriented person. Sarcastic and interactive in nature. Like to keep
          myself and others around me happy and energetic.
          I am able to handle multiple tasks on a daily basis.
          I use a creative approach to solve problem.
          I am extremely driven, with a clear goal to succeed.
        </p>
        <p>
           And much more.... :)
        </p>
        <p className="resumeInfo">
          Get My Resume -- <a href="MyResume.pdf" download="Prathamesh Hundare.pdf"><button className="resumeButton">Click Here</button></a>
        </p>
        </div>
      </div>
    </div>
  );
}
