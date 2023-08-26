import classes from "./project.module.css";
import Image from "next/image";

function Project(props) {
  return (
    <div className={classes.project}>
      <div className={classes.imgContainer}>
        <Image
          className={classes.image}
          src={props.imageSrc}
          alt={`${props.title} Image`}
          width={200}
          height={75}
        />
      </div>
      <h2 className={classes.title}>{props.title}</h2>
      <ul className={classes.desciption}>
        {props.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
