import Link from "next/link";
import PersonalLogo from "./personal-logo";
import classes from "./nav-bar.module.css";
import GithubLogo from "./github-logo";
import LinkedinLogo from "./linkedin-logo";
import DropArrrow from "./drop-arrow";

function NavigationBar() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <PersonalLogo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about" className={classes.navitem}>
              About
              <DropArrrow />
            </Link>
          </li>
          <li>
            <Link href="/skills" className={classes.navitem}>
              Skills
              <DropArrrow />
            </Link>
          </li>
          <li>
            <Link href="/experience" className={classes.navitem}>
              Experience
              <DropArrrow />
            </Link>
          </li>
          <li>
            <Link href="/projects" className={classes.navitem}>
              Projects
              <DropArrrow />
            </Link>
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
