import NortheasternLogo from "../../components/education/northeastern-logo";
import EconometricsResearchImage from "../../components/research/research-img";
import classes from "./research.module.css";

function Research() {
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Research</h1>
      </div>
      <hr className={classes.divider} />
      <div className={classes.research}>
        <div className={classes.text}>
          <NortheasternLogo />
          <br />
          <br />
          <div className={classes.description}>
            <p>
              <strong>
                Economics Research Assistant, Co-Author to Professor Xialon Shi
              </strong>
            </p>
            <p>
              <strong>June 2023 - Present</strong>
            </p>
            <br />
            <p>
              I started as a research assistant for Professor Xialon Shi in June
              2023. I am currently working on a research paper that builds upon
              her previous work on the effects of granchildren on the health of
              grandparents.
            </p>
            <br />
            <p>
              The research explores this relationship through two differnent
              lenses: the causal effect that the birth of grandchildren have on
              grandparents' retirement decisions and the health implications of
              grandparents co-residing with their grandchildren.
            </p>
            <br />
            <p>
              In this role, I am utilizing statistical analysis software such as
              Stata, R, and Python to apply Difference-in-Difference Estimation
              and Regression Discontinuity Design to a dataset of
              grandparent-grandchild pairs obtained from the Panel Study of
              Income Dynamics provided by the University of Michigan’s Institute
              for Social Research.
            </p>
          </div>
        </div>
        <div className={classes.img}>
          <EconometricsResearchImage />
        </div>
      </div>
    </div>
  );
}

export default Research;
