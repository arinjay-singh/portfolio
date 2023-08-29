import Head from "next/head";
import Image from "next/image";
import classes from "./index.module.css";
import Memoji from "../components/home-page/memoji";
import LearnMore from "../components/home-page/learn-more";

export default function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.hero}>
        <div className={classes.title1}>
          <div className={classes.titletext}>
            <h3> Hi, my name is </h3>
            <h1> Arinjay Singh. </h1>
            <h3>
              {" "}
              I'm a Computer Science and Economics student at Northeastern
               <br /> University pursuing my passion for software design and the
              ethical <br /> implications of technology as it continues to
              evolve.{" "}
            </h3>
          </div>
        </div>
        <div className={classes.title2}>
          <div className={classes.memoji}>
            <Memoji />
          </div>
        </div>
      </div>
      <div className={classes.learnmore}>
        <LearnMore />
      </div>
    </div>
  );
}
