
import styles from './Card.module.scss'
import projects from '../../data/projects'
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
              
                <div key={index}  className={`${styles.card} col-12`}> 
                    <Arrow></Arrow>
                    <h4>{item.name}</h4>
                    <p className='desc'>{item.desc}</p>
                    <img 
                        src={typeof item.src === 'string' ? item.src : item.src.default} 
                        alt={item.name} />
                </div>
            ))}  
        </>
      )


}


// function Card() {

// const items: Item[] = Projects as Item[];

//   return (
//     <>
//         {Projects.map((item, index) => (
//             <div key={index}  className={`${styles.card} col-12`}> 
//                 <h4>{item.name}</h4>
//                 <p>{item.desc}</p>
//                 <img 
//                     src={item.url} alt={item.name} />
//             </div>
//         ))}  
//     </>
//   )
// }

export default Card