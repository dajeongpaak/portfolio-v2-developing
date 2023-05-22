import { Link } from 'react-router-dom'

import styles from './Card.module.scss'
import projects from '../../data/projects'

import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
import Arrow from '../../assets/icons/Arrow'


interface Item {
    name: string;
    desc: string;
    src: string | { default: string };
    url: string;
}

const Card: React.FC = () => {

const items: Item[] = projects as Item[]
    
    return (
        <>
        {items.map((item, index) => (
             <Link to={item.url} key={index}  className={`${styles.card} col-12`}>
                <Arrow />
                <h4>{item.name}</h4>
                <p className='desc'>{item.desc}</p>
                <img 
                    src={typeof item.src === 'string' ? item.src : item.src.default} 
                    alt={item.name} />
             </Link>
        ))}  
        </>
      )
}

export default Card