import NortheasternLogo from "../../components/education/northeastern-logo";
import EconometricsResearchImage from "../../components/research/research-img";
import classes from "./internships.module.css";

function Research() {
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Internships</h1>
      </div>
      <div className={classes.neocortex}>
        <div className={classes.text}>
          <NortheasternLogo />
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
              I joined Neocortex as a Data Analyst Intern where I identified
              actionable isnights for clients through use of advanced analystics
              on large datasets provided by clients.
            </p>
            <br />
            <p>
              In this role, I utilized Tableau and developed Python scripts to
              perform a wide variety of data analyses and manipulation such as
              Exploratory Data Analysis, feature selection, encoding (One-Hot,
              Label), imputation (MICE, Simple), over/under sampling (SMOTE,
              Random Undersampling) as well as optimal thresholding for
              imbalanced binary classification, sample weighting, and tensor
              reshaping.
            </p>
            <br />
            <p>
              In addition to the data analysis and manipulation, I also
              constructed ensemble machine learning models (Random Forest
              Classifier, Linear Regression, Logistic Regression, Extreme
              Gradient Boosting, Long Short-Term Memory), investigated the
              models’ explainability/feature importance (Permutation, SHAP,
              LIME), and evaluated the models’ performance by interpreting
              classification reports (precision, recall, f1-score, support).
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
