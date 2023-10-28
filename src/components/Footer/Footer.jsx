import React from "react";
import useStyles from "./styles";
import { LinkedIn } from "@material-ui/icons";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Liked my project?
      <a className={classes.link} href="https://www.linkedin.com/in/shivamsingh271999">
        {" "}
        connect with me <LinkedIn />
      </a>
    </div>
  );
};

export default Footer;
