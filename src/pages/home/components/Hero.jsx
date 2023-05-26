import React, { useState ,useEffect, useRef } from 'react'

import styles from './Hero.module.scss'
import imageHey from '../../../assets/images/hey.png'
import imageIam from '../../../assets/images/iam.png'
import imageName from '../../../assets/images/name.png'
import imageDj from '../../../assets/images/dj.png'
import imageFrontEnd from '../../../assets/images/frontend.png'
import imageCircle from '../../../assets/images/cir-1.png'
import imageCircle2 from '../../../assets/images/cir-2.png'
import imageCircle3 from '../../../assets/images/cir-3.png'

import { Bodies, Composite, Engine, Runner, Render, Body, Vector } from "matter-js"

function Hero() {
    const heroRef = useRef();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight, 
    })

  

    // window.onresize = handleResize;
    
    useEffect(() => {
      

        // create an engine
        var engine = Engine.create(),
            world = engine.world;

        // set physics container width and height
        var heroWidth = heroRef.current.clientWidth
        var heroHeight = heroRef.current.clientHeight
        // create a renderer
        var render = Render.create({
            element: heroRef.current,
            engine: engine,
            options: {
                width: heroWidth,
                height:  heroHeight,
                wireframes: false,
                background: 'transparent'
            }
        });

        // create physics elements
        var hey = Bodies.rectangle(heroWidth / 1.5, 0, 80, 80,  {
            density: 0.04,
		    friction: 0.01,
		    frictionAir: 0.000001,
		    restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageHey, 
                xScale: 0.3, 
                yScale: 0.3  }}
            });

        var name = Bodies.rectangle(heroWidth / 5, 0, 160, 100,  {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageName, 
                xScale: 0.3, 
                yScale: 0.3  }}
            });
    
        var dj = Bodies.circle(heroWidth / 5, 0, 80, {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageDj, 
                xScale: 0.5, 
                yScale: 0.5  }}
            });
            
        
        var iam = Bodies.rectangle(heroWidth / 5, 0, 160, 100,  {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageIam, 
                xScale: 0.3, 
                yScale: 0.3  }}
            });
    
        var frontend = Bodies.rectangle(heroWidth / 5, 0, 160, 100,  {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageFrontEnd, 
                xScale: 0.25, 
                yScale: 0.25  }}
            });
        
        var circle = Bodies.circle(heroWidth / 2.8, heroHeight / 1.5, 30, {
            isStatic: true,
            render: { 
            sprite: { 
                texture: imageCircle, 
                xScale: 0.5, 
                yScale: 0.5  }}
            });
         
        var drag = Bodies.circle(heroWidth / 5, heroHeight / 2, 30, {
            isStatic: true,
            render: { 
            sprite: { 
                texture: imageCircle2, 
                xScale: 0.5, 
                yScale: 0.5  }}
            }); 

        var scroll = Bodies.circle(heroWidth / 2, heroHeight / 1.2 , 30, {
            isStatic: true,
            render: { 
            sprite: { 
                texture: imageCircle3, 
                xScale: 0.5, 
                yScale: 0.5  }}
            });
        var ground = Bodies.rectangle(heroWidth / 2, heroHeight, 82854, 30, { isStatic: true,
            render: {
        fillStyle: 'rgba(0,0,0,0)'}});

        var leftwall = Bodies.rectangle( -30, heroHeight / 2, 30 , heroHeight * 5, { isStatic: true,
            render: {
        fillStyle: 'rgba(0,0,0,0)'}});

        var rightwall = Bodies.rectangle( heroWidth, heroHeight / 2, 30, heroHeight * 5, { isStatic: true,
            render: {
        fillStyle: 'rgba(0,0,0,0)'}});

        // add all of the bodies to the world
        Composite.add(world, [hey, iam, dj, name, frontend, circle, drag, scroll, ground, leftwall, rightwall]);

        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);

        const handleResize = (heroRef) => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight, 

               
            })

            // render.canvas.width = heroRef.current.clientWidth
            // render.canvas.height = heroRef.current.clientHeight

            // Body.setPosition(
            //     ground, Vector.create(
            //         heroWidth / 2, 
            //         heroHeight
            //     )
            // )

            // Body.setPosition(
            //     rightwall, Vector.create(
            //         heroWidth,
            //         heroHeight / 2
            //     )
            // )

        
        }
        window.addEventListener('resize', handleResize)

        // prevent from rendering this component twice by strict mode
        return () => {

            window.removeEventListener('resize', handleResize)
            // Stop the renderer and runner
            Render.stop(render);
            Runner.stop(runner);

            // Clear the engine and world
            Composite.clear(world);
            Engine.clear(engine);
            render.canvas.remove()
            render.canvas = null
            render.context = null

            // Remove the event listener when the component unmounts
            
            }
    },)

  return (
    <section
        ref={heroRef}
        className={`${styles.container} ${styles.section}` }
    >
    <h1>Hey there, I am DJ and I am a front-end developer</h1>
    </section>
    
  )
}

export default Hero
