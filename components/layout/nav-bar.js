import Link from "next/link";
import PersonalLogo from "./personal-logo";
import classes from "./nav-bar.module.css";
import GithubLogo from "./github-logo";
import LinkedinLogo from "./linkedin-logo";
import DropArrrow from "./drop-arrow";
import Dropdown from "./dropdown";
import UpArrow from "./up-arrow";
import { useState } from "react";

function NavigationBar() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  function aboutMouseEnterHandler() {
    setIsAboutHovered(true);
  }

  function aboutMouseLeaveHandler() {
    setIsAboutHovered(false);
  }

  const [isSkillsHovered, setIsSkillsHovered] = useState(false);

  function skillsMouseEnterHandler() {
    setIsSkillsHovered(true);
  }

  function skillsMouseLeaveHandler() {
    setIsSkillsHovered(false);
  }

  const [isExperienceHovered, setIsExperienceHovered] = useState(false);

  function experienceMouseEnterHandler() {
    setIsExperienceHovered(true);
  }

  function experienceMouseLeaveHandler() {
    setIsExperienceHovered(false);
  }

  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

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
            onMouseEnter={aboutMouseEnterHandler}
            onMouseLeave={aboutMouseLeaveHandler}
            className={classes.drop}
          >
            <Link href="/about" className={classes.navitem}>
              About
              {isAboutHovered ? <UpArrow /> : <DropArrrow />}
            </Link>
            <Dropdown
              navitem="about"
              items={["Me", "This Site", "Contact"]}
              className={classes.dropdown}
            />
          </li>
          <li
            className={classes.drop}
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
                "Web Development",
                "Data Science Tools",
                "Other",
              ]}
              className={classes.dropdown}
            />
          </li>
          <li
            className={classes.drop}
            onMouseEnter={experienceMouseEnterHandler}
            onMouseLeave={experienceMouseLeaveHandler}
          >
            <Link href="/experience" className={classes.navitem}>
              Experience
              {isExperienceHovered ? <UpArrow /> : <DropArrrow />}
            </Link>
            <Dropdown
              navitem="experience"
              items={["Internships", "Research", "Coursework"]}
              className={classes.dropdown}
            />
          </li>
          <li
            className={classes.drop}
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
          <li className={classes.vertical}></li>
          <li className={classes.logo}>
            <GithubLogo />
          </li>
          <li className={classes.logo}>
            <LinkedinLogo />
          </li>
          <li className={classes.vertical}></li>
          <li>
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
