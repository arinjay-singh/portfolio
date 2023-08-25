import classes from "./skill.module.css";

function Skill(props) {
  return (
    <div className={classes.skill}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
}

export default Skill;
