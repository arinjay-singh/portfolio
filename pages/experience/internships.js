import DataAnalyticsImage from '../../components/internship/neocortex-img';
import NeocortexLogo from '../../components/internship/neocortex-logo';
import classes from './internships.module.css';

function Internships() {     
    return (
    <div className={classes.page}>
        <div className={classes.title}>
            <h1>Internships</h1>
        </div>
        <div className={classes.neocortex}>
        <div className={classes.text}>
          <NeocortexLogo />
          <br />
          <br />
          <div className={classes.description}>
            <p>
              <strong>Data Analyst Intern</strong>
            </p>
            <p>
              <strong>July 2023 - August 2023</strong>
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
          <DataAnalyticsImage />
        </div>
      </div>
    </div>);
}

export default Internships;