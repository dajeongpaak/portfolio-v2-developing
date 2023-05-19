
import styles from './Mission.module.scss'

function Mission() {
  return (
    <>
    <section className={`${styles.container} grid`}>
       <div className={`col-8 ${styles.content}`}>
         <h2 className='p'>I develop and design engaging user experiences that brings emotional connection through
         </h2>
       </div> 
       <div className={`${styles.values} col-12`}>
         <h3 className='h5'>Creativity, <br />Lifelong Learning</h3>
       </div>
       <div className={`${styles.values} col-12`}>
        <h3 className='h5'>Technology Skills <br />& Passion</h3>
       </div>
   </section> 
   </>
  )
}

export default Mission
