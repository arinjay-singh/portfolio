import Skill from "../../components/skills/skill";
import classes from "./data-science-tools.module.css";

function DataScienceTools() {
  const skillsData = [
    {
      title: "Jupyter Notebook (Python)",
      description: [
        "Intermediate proficiency",
        "Utilized to organize and present data science projects in a clear and concise manner for both technical and non-technical audiences",
        "Experience from coursework such as Programming with Data and internship as a Data Analyst at Neocortex",
      ],
    },
    {
      title: "Tableau",
      description: [
        "Intermediate proficiency",
        "Utilized to conduct Exploratory Data Analysis (EDA) on large datasets and create data visualizations",
        "Experience from Data Analyst Internship at Neocortex", 
      ],
    },
    {
      title: "Stata",
      description: [
        "Intermediate proficiency",
        "Utilized to perform statistical analysis in an Econometrics context both in academic research and coursework",
        "Experience from coursework such as Econometrics",
      ],
    },
    {
      title: "R",
      description: [
        "Beginner proficiency",
        "Utilized to perform statistical analysis in an Econometrics context both in academic research and coursework",
        "Experience from academic econometrics research",
      ],
    },
  ];

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Data Science Tools</h1>
      </div>
      <hr className={classes.divider} />
      <div className={classes.gridcontainer}>
        <div className={classes.grid}>
          {skillsData.map((skill, index) => (
            <Skill
              key={index}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataScienceTools;