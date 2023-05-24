
import styles from './FeaturedWork.module.scss'
import Card from '../../../components/card/Card'

function FeaturedWork() {
  return (
    <div className={`${styles.container} grid container`}>
        <div className={`${styles.title} col-12`}>
            <h3 className='h4'>featured work</h3>
        </div>
        <Card></Card>
    </div>
  )
}

export default FeaturedWork
