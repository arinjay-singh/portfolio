import AthenianLogo from "../../components/education/athenian-logo";
import AthenianImage from "../../components/education/athenian-img";
import NortheasternImage from "../../components/education/northeastern-img";
import NortheasternLogo from "../../components/education/northeastern-logo";
import classes from "./education.module.css";

function Education() {
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Education</h1>
      </div>
      <div className={classes.northeastern}>
        <div className={classes.text}>
          <NortheasternLogo />
          <div className={classes.description}>
            <p>2022 - Current</p>
            <p>Expected Graduation in 2026</p>
          </div>
        </div>
        <div className={classes.img}>
          <NortheasternImage />
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.athenian}>
        <div className={classes.img}>
          <AthenianImage />
        </div>
        <div className={classes.text}>
          <AthenianLogo />
          <p>2018 - 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
