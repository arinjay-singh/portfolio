import classes from "./learn-more.module.css";
import Link from "next/link";

function LearnMore() {
  return (
    <Link href="/about/me" className={classes.button}>
      Learn More About Me
    </Link>
  );
}

export default LearnMore;
