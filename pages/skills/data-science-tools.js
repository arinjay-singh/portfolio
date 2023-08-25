import Skill from "../../components/skills/skill";
import classes from "./data-science-tools.module.css";

function DataScienceTools() {
  const skillsData = [
    {
      title: "Jupyter Notebook (Python)",
      description: "Building awesome websites!",
    },
    {
      title: "Tableau",
      description: "Creating stunning visuals.",
    },
    {
      title: "Stata",
      description: "Analyzing data to uncover insights.",
    },
    {
      title: "R",
      description: "Crafting engaging and informative content.",
    },
  ];

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Data Science Tools</h1>
      </div>
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