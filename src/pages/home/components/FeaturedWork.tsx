import  { useEffect, useRef } from 'react'

import styles from './FeaturedWork.module.scss'
import Card from '../../../components/card/Card'

interface RectValues {
  top: number;
}

function FeaturedWork() {
  const featuredWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

      const handleScroll = () => {
        const rect = featuredWorkRef.current?.getBoundingClientRect()
        const { top }: RectValues = rect || { top: 0 }

        document.body.style.backgroundColor = top < 0 ? "#1c1c1e" : "#fcf8f4"
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    } 

  },[])
  return (
    <div 
      ref={featuredWorkRef} 
      className={`${styles.container} grid container`}
    >
        <div className={`${styles.title} col-12`}>
            <h3>featured work</h3>
        </div>
        <Card className="col-12"></Card>
    </div>
  )
}

export default FeaturedWork
