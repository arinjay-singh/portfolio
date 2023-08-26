import Skill from "../../components/skills/skill";
import classes from "./web-development-tools.module.css";

function WebDevelopmentTools() {
  const skillsData = [
    {
      title: "JavaScript/HTML/CSS",
      description: [
        "Intermediate proficiency",
        "Applied in personal web development projects",
        "Utilized in developing this website through Next.js",
        "Learned through online course providers such as Udemy and Coursera",
      ],
    },
    {
      title: "React.js/Next.js",
      description: [
        "Intermediate proficiency",
        "Applied in personal web development projects",
        "Utilized in developing this website through Next.js",
        "Learned through online course providers such as Udemy and Coursera",
      ],
    },
    {
      title: "Node.js/Express.js",
      description: [
        "Beginner proficiency",
        "Utilized in projects through online course providers such as Udemy and Coursera",
      ],
    },
    {
      title: "MongoDB",
      description: [
        "Beginner proficiency",
        "Utilized in projects through online course providers such as Udemy and Coursera",
      ],
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