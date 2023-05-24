
import styles from './Mission.module.scss'

function Mission() {
  return (
    <div className={`${styles.container} grid`}>
      <div className={`${styles.statement} col-12 col-lg-6`}>
          <h2 className='h4'>I <span>develop and design</span> <br /> engaging user experiences <br /> that brings <br/><span>emotional connection</span> through
         </h2>
      </div>
      <div className={`${styles.values} col-12 col-lg-6`}>
          <span className='h4'>Creativity,</span> 
          <br />
          <span className='h4'>Lifelong Learning,
         </span>
         <br />
         <span className='h4'>Technology Skills
         </span>
         <br />
         <span className='h4'>& Passion
         </span>
      </div>
      <div className={`${styles.js_animation} col-12`}></div>
   </div> 
  )
}

export default Mission
