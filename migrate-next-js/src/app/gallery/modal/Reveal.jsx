import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Reveal = ({children, width="fit-content"}) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        isInView ? slideControls.start('visible') : slideControls.start('hidden');
        isInView ? mainControls.start('visible') : mainControls.start('hidden');
    }, [isInView, mainControls, slideControls])
    return (
        <div
            ref={ref}
            style={{ position: "relative", width, overflow: "hidden" }}
        >
            <motion.div
            variants={{
                hidden : {opacity :0, y:75},
                visibile : {opacity : 1, y:0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                duration : 0.5,
                delay :0.25
            }}
            >
                {children}

            </motion.div>
            <motion.div
            variants={{
                hidden: {left:0},
                visible : {left: '100%'}
            }}
            initial='hidden'
            animate = {slideControls}
            transition={{duration:0.5, ease : 'easeIn'}}
            style={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                zIndex : 20
            }}
            >
                
            </motion.div>

        </div>
    )
}

