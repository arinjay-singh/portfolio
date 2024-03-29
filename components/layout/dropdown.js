import Link from "next/link";
import classes from "/./nav-bar.module.css";

function Dropdown(props) {
  const { navitem, items } = props;

  return (
    <div className={classes.dropdown}>
      {items.map((item) => (
        <Link href={`/${navitem}/${item.toLowerCase().replace(/ /g, "-")}`} key={item}>
          {item}
        </Link>
      ))}
    </div>
  );
}

export default Dropdown;
