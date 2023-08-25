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
            <p>
              <strong>2022 - Present</strong>
            </p>
            <p>
              <strong>Expected Graduation in 2026</strong>
            </p>
            <br />
            <p>
              I am a second year Computer Science and Economics combined major
              at the Khoury College of Computer Sciences with aspirations of
              becoming a software engineer. I am also a member of the Dean's
              List and a recipient of the Dean's Scholarship in recognition of
              high academic achievement.
            </p>
            <br />
            <p>
              I have a particular interest in software design as well as modern
              technology ethics, furthering my knowledge in the classroom
              through courses such as <em>Algorithms and Data</em>,{" "}
              <em>Object-Oriented Design</em>, <em>Programming with Data</em>,{" "}
              <em>Cybersecurity</em>, <em>Information Science</em>,{" "}
              <em>Technology and Human Values</em>, {""}
              <em>Macro/Microeconomics</em>, and <em>Econometrics</em>.
            </p>
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
          <p>
            <strong>2018 - 2022</strong>
          </p>
          <p>
            I am a recent high school graduate of The Athenian School, a private
            high school in Danville, California. I graduated with an unweighted
            GPA of 3.93 and a weighted GPA of 4.42, earning academic honors as a
            consistent member of the Dean's List throughout my four years at
            Athenian. It was here that my fascination with computer science
            first began here in classes such as <em>AP Computer Science</em>,
            {""} <em>Data Structures</em> and <em>Algorithms</em>.
          </p>
          <p>
            Outside of the classroom I was a starting pitcher and middle
            infielder on the varsity baseball team for all four years, making
            several runs to the North Coast Section playoffs. I was participated
            in the First Robotics Competition (FRC) for two years, where I was a
            member of the programming team gaining hands-on technical
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
