import React from 'react'
import classes from './ProjectCard.module.css'
import senkuCola from './senkuCola.png'

const ProjectCard = () => {

  return (
    <div className={classes.card}>
      <div className={classes.circle} ></div>
      <div className={classes.content} >
        <h2>Senku Cola</h2>
        <p>Made from Chrome and budhau's water wheel for the trading with Asagiri Gen. 
        Sosoru ze kore wa.Sosoru ze kore wa.Sosoru ze kore wa.Sosoru ze kore wa.
        Sosoru ze kore wa.Sosoru ze kore wa.Sosoru ze kore wa.Sosoru ze kore wa.</p>
        <a href="">TRY</a>
      </div>
      <img src={senkuCola} alt="pepsi" />
    </div>
  );
}

export default ProjectCard;