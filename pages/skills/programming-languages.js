import Skill from "../../components/skills/skill";
import classes from "./programming-languages.module.css";

function ProgrammingLanguages() {
  const skillsData = [
    {
      title: "Java",
      description: "Building awesome websites!",
    },
    {
      title: "Python",
      description: "Creating stunning visuals.",
    },
    {
      title: "JavaScript",
      description: "Analyzing data to uncover insights.",
    },
    {
      title: "C++",
      description: "Crafting engaging and informative content.",
    },
  ];

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Programming Languages</h1>
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

export default ProgrammingLanguages;
