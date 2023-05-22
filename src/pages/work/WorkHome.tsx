
import styles from './Work.module.scss'
import Card from '../../components/card/Card'

function WorkHome() {
  return (
    <div>
      <div className={`grid container ${styles.container}`}>
      <Card />
        {/* <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/jade-bookmark-manager-project' element={<Jade />}/>
        </Routes> */}
    </div>
    </div>
  )
}

export default WorkHome
