import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import education from '../../assets/Resume/education.svg';
import workHistory from '../../assets/Resume/work-history.svg';
import programmingSkills from '../../assets/Resume/programming-skills.svg';
import "./Resume.css";

export const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{!!props.heading && props.heading}</span>
          {props.fromDate && props.toDate && (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{!!props.subHeading && props.subHeading}</span>
        </div>
        <div className="resume-heading-description">
          <span>{!!props.description && props.description}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: workHistory },
    { label: "Skills", logoSrc: programmingSkills },
  ];

  const programingSkillsDetails = [
    { skill: "Scheduling Systems", ratingPercentage: 90 },
    { skill: "POS Systems", ratingPercentage: 90 },
    { skill: "Kroll Dispensary", ratingPercentage: 80 },
    { skill: "Mandarin", ratingPercentage: 75 },
    { skill: "Cantonese", ratingPercentage: 80 },
    { skill: "Microsoft Office", ratingPercentage: 80 },
    { skill: "Attention to Detail", ratingPercentage: 100 },
    { skill: "Team Player", ratingPercentage: 90 },
    { skill: "Creativity", ratingPercentage: 85 },
    { skill: "Organization", ratingPercentage: 90 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"YORK UNIVERSITY | Toronto, Ontario"}
        subHeading={"Bachelor of Science"}
        fromDate={"2016"}
        toDate={"2018"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Central Medical Pharmacy"}
        subHeading={"CHRONIC MIGRAINE PROGRAM COORDINATOR"}
        fromDate={"2021"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Acting liaison between chronic migraine, TMJ, and cervical dystonia
          patients and physicians. Assisting patients with determination of
          insurance coverage for Botox and supplying clinics with prescriptions.
        </span>
      </div>
      <ResumeHeading
        heading={"Central Medical Pharmacy"}
        subHeading={"ADMINISTRATIVE ASSISTANT"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Confirmed processed Botox prescriptions to pharmacy and ensured
          accuracy of pharmacy receipts physician prescriptions. Performed
          clerical duties, organized and filed chronic migraine and
          hyperhidrosis special authorization forms and scripts.
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={ bullet.logoSrc }
          alt="error"
        />
        <span className="bullet-label">{bullet.label}</span>

      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};
