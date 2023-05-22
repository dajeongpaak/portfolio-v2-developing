
import styles from './Mission.module.scss'

function Mission() {
  return (
    <div className={`${styles.container} grid container`}>
      <div className={`${styles.statement} col-12`}>
          <h2 className={`${styles.content} h4`}>I <span>develop and design</span> <br /> engaging user experiences <br /> that brings <br/><span>emotional connection</span> through
         </h2>
      </div>
      <div className={`${styles.values} col-12`}>
          <span className={`${styles.content} h4`}>Creativity, <br />Lifelong Learning,
         </span><br />
         <span className={`${styles.content} h4`}>Technology Skills <br />& Passion
         </span>
      </div>
   </div> 
  )
}

export default Mission
