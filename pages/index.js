import Head from "next/head";
import Image from "next/image";
import classes from "./index.module.css";

export default function Home() {
  return (
    <div className={classes.title}>
      <h3> Hi, my name is </h3>
      <h1> Arinjay Singh. </h1>
      <h3>
        {" "}
        I'm a Computer Science and Economics student at Northeastern
        University <br /> pursuing my fascination with software and
        web development as well as the ethics <br/> behind modern technology.{" "}
      </h3>
    </div>
  );
}
