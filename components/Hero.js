import styles from '../sass/components/Hero.module.scss'

// If you have any heavy components inside Hero, load them dynamically
// const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
//   loading: () => <div>Loading...</div>,
// })

function Hero({ content }) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            {content}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero