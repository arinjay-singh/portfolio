import Link from "next/link";
import PersonalLogo from "./personal-logo";
import classes from "./nav-bar.module.css";
import GithubLogo from "./github-logo";
import LinkedinLogo from "./linkedin-logo";
import DropArrrow from "./drop-arrow";
import Dropdown from "./dropdown";

function NavigationBar() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <PersonalLogo />
      </Link>
      <nav>
        <ul>
          <li className={classes.drop}>
            <Link href="/about" className={classes.navitem}>
              About
              <DropArrrow className={classes.svg}/>
            </Link>
            <Dropdown
              navitem="about"
              items={["me", "this website"]}
              className={classes.dropdown}
            />
          </li>
          <li className={classes.drop}>
            <Link href="/skills" className={classes.navitem}>
              Skills
              <DropArrrow />
            </Link>
            <Dropdown
              navitem="skills"
              items={["languages", "frameworks", "tools"]}
              className={classes.dropdown}
            />
          </li>
          <li className={classes.drop}>
            <Link href="/experience" className={classes.navitem}>
              Experience
              <DropArrrow />
            </Link>
            <Dropdown
              navitem="experience"
              items={["work", "projects"]}
              className={classes.dropdown}
            />
          </li>
          <li className={classes.drop}>
            <Link href="/projects" className={classes.navitem}>
              Projects
              <DropArrrow />
            </Link>
            <Dropdown
              navitem="projects"
              items={["personal", "school"]}
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
            <Link href="/resume" className={classes.button}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
