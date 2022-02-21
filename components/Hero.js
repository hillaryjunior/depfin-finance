import React from 'react'
import styles from '../sass/components/Hero.module.scss'
function Hero({content}) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className = {styles.content}>
          <h1>
                
           {content }
          </h1>
        </div>
        
      </div>
    </div>
  );
}

export default Hero