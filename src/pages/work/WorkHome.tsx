
import styles from './Work.module.scss'
import Card from '../../components/card/Card'

function WorkHome() {
  return (
    <div>
      <div className={`grid container ${styles.container}`}>
      <Card className='col-lg-6'/>
    </div>
    </div>
  )
}

export default WorkHome
