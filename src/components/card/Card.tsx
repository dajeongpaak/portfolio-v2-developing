import { Link } from 'react-router-dom'

import styles from './Card.module.scss'
import projects from '../../data/projects'
import Arrow from '../../assets/icons/Arrow'
import Button from '../button/Button'


interface Item {
    name: string;
    desc: string;
    src: string | { default: string };
    url: string;
}

interface CardProps {
    className: string; // Add className prop to the interface
  }

const Card: React.FC<CardProps> = (props) => {

const items: Item[] = projects as Item[]
    
    return (
        <>
            {items.map((item, index) => (
                <article  key={index} className={`${styles.card} ${props.className}`}>
                    <Link to={item.url} key={index} >
                        <div className='grid'>
                            <Arrow />
                            <img 
                                src={typeof item.src === 'string' ? item.src : item.src.default} 
                                alt={item.name}
                                className={`${styles.image} col-12 col-lg-6`} />
                            <div className={`${styles.content} col-12 col-lg-6`}>
                                <h4>{item.name}</h4>
                                <div className={`${styles.discipline}`}>
                                    <div>web devleopment</div>
                                    <div>web design</div>
                                </div>
                                <p className='description'>{item.desc}</p>
                                <Button />
                            </div>
                        </div>
                    </Link>
                </article>
            ))}  
        </>
      )
}

export default Card