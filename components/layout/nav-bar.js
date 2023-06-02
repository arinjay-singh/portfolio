import Link from "next/link";
import PersonalLogo from "./personal-logo";
import classes from "./nav-bar.module.css";
import GithubLogo from "./github-logo";
import LinkedinLogo from "./linkedin-logo";

function NavigationBar() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <PersonalLogo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
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
            <Link href="/resume" className={classes.button}>Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
