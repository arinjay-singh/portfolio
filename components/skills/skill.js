import classes from "./skill.module.css";

function Skill(props) {
  return (
    <div className={classes.skill}>
      <h2 className={classes.title}>{props.title}</h2>
      <ul className={classes.desciption}>
        {props.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
