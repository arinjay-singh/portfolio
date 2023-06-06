import Head from "next/head";
import Image from "next/image";
import classes from "./index.module.css";
import Memoji from "../components/home-page/memoji";
import LearnMore from "../components/home-page/learn-more";

export default function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.hero}>
        <div className={classes.title}>
          <div className={classes.titletext}>
            <h3> Hi, my name is </h3>
            <h1> Arinjay Singh. </h1>
            <h3>
              {" "}
              I'm a Computer Science and Economics student at Northeastern
              University <br /> pursuing my fascination with software and web
              development as well as the ethics <br /> behind modern technology.{" "}
            </h3>
          </div>
        </div>
        <div className={classes.title}>
          <Memoji />
        </div>
      </div>
      <div className={classes.learnmore}>
        <LearnMore />
      </div>
    </div>
  );
}
