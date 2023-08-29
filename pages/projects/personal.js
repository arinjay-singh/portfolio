import Project from "../../components/projects/project";
import classes from "./personal.module.css";

function PersonalProjects() {
  const projectsData = [
    {
        title: "Sudoku Solver",
        description: [
            "Sodoku solver that uses backtracking to solve any valid sudoku puzzle",
            "Developed using Python",
        ],
        imageSrc: "images/projects/sudoku.png",
    },
    {
        title: "Pong",
        description: [
            "Pong Arcade Game",
            "Developed using Python",
        ],
        imageSrc: "images/projects/pong2.jpeg",
    },
  ];

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Personal Projects</h1>
      </div>
      <hr className={classes.divider} />
      <div className={classes.gridcontainer}>
        <div className={classes.grid}>
          {projectsData.map((project, index) => (
            <Project
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;
