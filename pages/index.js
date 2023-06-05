import Head from "next/head";
import Image from "next/image";
import classes from "./index.module.css";

export default function Home() {
  return (
    <div className={classes.title}>
      <h3> Hi, my name is </h3>
      <h1> Arinjay Singh </h1>
      <h3> I'm a software and web development enthusiast <br/> studying Computer Science and Economics at Northeastern University. </h3>
    </div>
  );
}
