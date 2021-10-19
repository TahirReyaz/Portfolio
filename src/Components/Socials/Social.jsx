import React, { useState } from 'react';
import classes from './Socials.module.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const Social = () => {
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(-100 + ScrollPercent);
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div className={classes.container}>
      <LinkedInIcon fontSize="large" />
      <GitHubIcon fontSize="large" />
      <MailIcon fontSize="large" />
      <span className={classes.indicator} style={{ bottom: `${scroll}%` }} ></span>
    </div>
  );
}

export default Social;