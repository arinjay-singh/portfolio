import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import Fragment from "react";
import NavigationBar from "./nav-bar";

function Layout() {
  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
