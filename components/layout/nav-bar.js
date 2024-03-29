import Link from "next/link";
import PersonalLogo from "/components/layout/personal-logo";
import classes from "/components/layout/nav-bar.module.css";
import GithubLogo from "/components/layout/github-logo";
import LinkedinLogo from "/components/layout/linkedin-logo";
import DropArrrow from "/components/layout/drop-arrow";
import Dropdown from "/components/layout/dropdown";
import UpArrow from "/components/layout/up-arrow";
import { useState, useEffect } from "react";

function NavigationBar() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isExperienceHovered, setIsExperienceHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

  function aboutMouseEnterHandler() {
    setIsAboutHovered(true);
  }

  function aboutMouseLeaveHandler() {
    setIsAboutHovered(false);
  }

  function skillsMouseEnterHandler() {
    setIsSkillsHovered(true);
  }

  function skillsMouseLeaveHandler() {
    setIsSkillsHovered(false);
  }

  function experienceMouseEnterHandler() {
    setIsExperienceHovered(true);
  }

  function experienceMouseLeaveHandler() {
    setIsExperienceHovered(false);
  }

  function projectsMouseEnterHandler() {
    setIsProjectsHovered(true);
  }

  function projectsMouseLeaveHandler() {
    setIsProjectsHovered(false);
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <PersonalLogo />
      </Link>
      <nav>
        <ul>
          <li
            className={classes.drop}
            key="about"
            onMouseEnter={aboutMouseEnterHandler}
            onMouseLeave={aboutMouseLeaveHandler}
          >
            <Link href="/about" className={classes.navitem}>
              About
              {isAboutHovered ? <UpArrow /> : <DropArrrow />}
            </Link>
            <Dropdown
              navitem="about"
              items={["Me", "This Site"]}
              className={classes.dropdown}
            />
          </li>
          <li
            className={classes.drop}
            key="skills"
            onMouseEnter={skillsMouseEnterHandler}
            onMouseLeave={skillsMouseLeaveHandler}
          >
            <Link href="/skills" className={classes.navitem}>
              Skills
              {isSkillsHovered ? <UpArrow /> : <DropArrrow />}
            </Link>
            <Dropdown
              navitem="skills"
              items={[
                "Programming Languages",
                "Web Development Tools",
                "Data Science Tools",
              ]}
              className={classes.dropdown}
            />
          </li>
          <li
            className={classes.drop}
            key="experience"
            onMouseEnter={experienceMouseEnterHandler}
            onMouseLeave={experienceMouseLeaveHandler}
          >
            <Link href="/experience" className={classes.navitem}>
              Experience
              {isExperienceHovered ? <UpArrow /> : <DropArrrow />}
            </Link>
            <Dropdown
              navitem="experience"
              items={["Education", "Internships", "Research"]}
              className={classes.dropdown}
            />
          </li>
          <li
            className={classes.drop}
            key="projects"
            onMouseEnter={projectsMouseEnterHandler}
            onMouseLeave={projectsMouseLeaveHandler}
          >
            <Link href="/projects" className={classes.navitem}>
              Projects
              {isProjectsHovered ? <UpArrow /> : <DropArrrow />}
            </Link>
            <Dropdown
              navitem="projects"
              items={["Personal", "School"]}
              className={classes.dropdown}
            />
          </li>
          <li className={classes.vertical} key="vertical-bar1"></li>
          <li className={classes.logo} key="github">
            <GithubLogo />
          </li>
          <li className={classes.logo} key="linkedin">
            <LinkedinLogo />
          </li>
          <li className={classes.vertical} key="vertical-bar2"></li>
          <li key="resume">
            <Link href="/resume.html" className={classes.button}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
