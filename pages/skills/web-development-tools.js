import Skill from "../../components/skills/skill";
import classes from "./web-development-tools.module.css";

function WebDevelopmentTools() {
  const skillsData = [
    {
      title: "JavaScript/HTML/CSS",
      description: "Building awesome websites!",
    },
    {
      title: "React.js/Next.js",
      description: "Creating stunning visuals.",
    },
    {
      title: "Node.js/Express.js",
      description: "Analyzing data to uncover insights.",
    },
    {
      title: "MongoDB",
      description: "Crafting engaging and informative content.",
    },
  ];

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Web Development Tools</h1>
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

export default WebDevelopmentTools;