import { useState ,useEffect, useRef } from 'react'

import styles from './Hero.module.scss'
import imageHey from '../../../assets/images/hey.png'
import imageIam from '../../../assets/images/iam.png'
import imageName from '../../../assets/images/name.png'
import imageDj from '../../../assets/images/dj.png'
import imageFrontEnd from '../../../assets/images/frontend.png'
import imageCircle from '../../../assets/images/cir-1.png'
import imageCircle2 from '../../../assets/images/cir-2.png'
import imageCircle3 from '../../../assets/images/cir-3.png'

import { Bodies, Composite, Engine, Runner, Render, Body, Vector, Mouse, MouseConstraint } from "matter-js"

function Hero() {
    const heroRef = useRef();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight, 
    })
 
    useEffect(() => {
        let width = window.innerWidth
        let height = window.innerHeight
        let actualPixel = 1000
        let expectedRatio = 0.18
        let scaleFactor = width > height ? (width * expectedRatio) / actualPixel : (height * (expectedRatio * 1.2)) / actualPixel
        let scaleFactorCircle = scaleFactor * 1.6
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
                background: 'transparent',
                pixelRatio: 2,
            }
        });

        // create physics elements
        var hey = Bodies.rectangle(heroWidth / 1.5, 0, 780 * scaleFactor, 780 * scaleFactor,  {
            density: 0.04,
		    friction: 0.01,
		    frictionAir: 0.000001,
		    restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageHey, 
                xScale: scaleFactor, 
                yScale: scaleFactor  }}
            });

        var name = Bodies.rectangle(heroWidth / 5, 0, 1320 * scaleFactor, 780 * scaleFactor,  {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageName, 
                xScale: scaleFactor, 
                yScale: scaleFactor  }}
            });
    
        var dj = Bodies.circle(heroWidth / 5, 0, 420 * scaleFactor, {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageDj, 
                xScale: scaleFactorCircle, 
                yScale: scaleFactorCircle }}
            });
            
        
        var iam = Bodies.rectangle(heroWidth / 5, 0, 1320 * scaleFactor, 780 * scaleFactor,  {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageIam, 
                xScale: scaleFactor, 
                yScale: scaleFactor  }}
            });
    
        var frontend = Bodies.rectangle(heroWidth / 5, 0, 2100 * scaleFactor, 780 * scaleFactor,  {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.000001,
            restitution: 0.8,
            render: { 
            sprite: { 
                texture: imageFrontEnd, 
                xScale: scaleFactor * 0.9, 
                yScale: scaleFactor * 0.9 }}
            });
        
        var circle = Bodies.circle(heroWidth / 2.85, heroHeight / 1.42, 110 * scaleFactor, {
            isStatic: true,
            render: { 
            sprite: { 
                texture: imageCircle, 
                xScale: scaleFactorCircle, 
                yScale: scaleFactorCircle }}
            });
         
        var drag = Bodies.circle(heroWidth / 5.3, heroHeight / 2, 110 * scaleFactor, {
            isStatic: true,
            render: { 
                sprite: { 
                    texture: imageCircle2, 
                    xScale: scaleFactorCircle, 
                    yScale: scaleFactorCircle  
                    }
                }
            }); 

        var scroll = Bodies.circle(heroWidth / 1.95, heroHeight / 1.1 , 110 * scaleFactor, {
            isStatic: true,
            render: { 
                sprite: { 
                    texture: imageCircle3, 
                    xScale: scaleFactorCircle, 
                    yScale: scaleFactorCircle  
                    }
                }
            });

        var ground = Bodies.rectangle(heroWidth / 2, heroHeight, 82854, 1, { 
            isStatic: true,
            render: {
                fillStyle: 'rgba(0,0,0,0)'
            }
        });

        var leftwall = Bodies.rectangle( -30, heroHeight / 2, 30 , heroHeight * 5, { 
            isStatic: true,
            render: {
                fillStyle: 'rgba(0,0,0,0)'
            }
        });

        var rightwall = Bodies.rectangle( heroWidth, heroHeight / 2, 1, heroHeight * 5, {
            isStatic: true,
            render: {
                fillStyle: 'rgba(0,0,0,0)'
            }
        });

        // add all of the bodies to the world
        Composite.add(world, [hey, iam, dj, name, frontend, circle, drag, scroll, ground, leftwall, rightwall,]);

        var canvas = render.canvas;

        let mouse = Mouse.create(canvas);
        let mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(world, mouseConstraint);

        mouseConstraint.mouse.element.removeEventListener(
            'mousewheel',
            mouseConstraint.mouse.mousewheel
        );

        mouseConstraint.mouse.element.removeEventListener(
            'DOMMouseScroll',
            mouseConstraint.mouse.mousewheel
        );

        mouseConstraint.mouse.element.removeEventListener(
            'touchstart', 
            mouseConstraint.mouse.mousedown
        );

        mouseConstraint.mouse.element.removeEventListener(
            'touchmove',
            mouseConstraint.mouse.mousemove
        );

        mouseConstraint.mouse.element.removeEventListener(
            'touchend', 
            mouseConstraint.mouse.mouseup
        );

        mouseConstraint.mouse.element.addEventListener(
            'touchstart', 
            mouseConstraint.mouse.mousedown, { passive: true });

        mouseConstraint.mouse.element.addEventListener('touchmove', (e) => {
        if (mouseConstraint.body) {
        mouseConstraint.mouse.mousemove(e);
        }
        });

        mouseConstraint.mouse.element.addEventListener('touchend', (e) => {
        if (mouseConstraint.body) {
        mouseConstraint.mouse.mouseup(e);
        }
        });


        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);

        const handleResize = () => {
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
