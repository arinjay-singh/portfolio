import Skill from "../../components/skills/skill";
import classes from "./programming-languages.module.css";

function ProgrammingLanguages() {
  const skillsData = [
    {
      title: "Java",
      description: [
        "Intermediate proficiency",
        "Applied in personal and academic projects",
        "Utilized in implementing essential data structures and algorithms",
        "Learned in coursework such as AP Computer Science, Data Structures, Algorithms, and Object-Oriented Design",
      ],
    },
    {
      title: "Python",
      description: [
        "Intermediate proficiency",
        "Applied in machine learning and data science projects",
        "Utilized in Data Analyst Internship at Neocortex ",
        "Learned in coursework such as Programming with Data",
      ],
    },
    {
      title: "JavaScript",
      description: [
        "Intermediate proficiency",
        "Applied in personal web development projects",
        "Utilized in developing this website through Next.js",
        "Learned through online course providers such as Udemy and Coursera",
      ],
    },
    {
      title: "C++",
      description: [
        "Beginner proficiency",
        "Applied in academic engineering projects",
        "Utilized in developing Arduino projects",
        "Learned in coursework such as Applied Science and Engineering",
      ],
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
