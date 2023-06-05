import classes from "./nav-bar.module.css";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function UpArrow() {
  return <ChevronUpIcon className={classes.svg} />;
}

export default UpArrow;
