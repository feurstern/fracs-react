import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { motion, useAnimation, useInView } from 'framer-motion'
import Reveal from './Reveal';
import { title } from 'process';


export const Modal = ({
    modalContent,
    isOpen,
    title,
}) => {
    const ref = useRef(null)
    const control = useAnimation();

    const getHTMLBody = document.querySelector('body');

    const [hovered, setHovered] = useState(false);

    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        isInView ? control.start('visible') : control.start('hidden')
    })

    const content =(

    
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 2, y: 0 }
            }}
            initial='hidden'
            animate={control}
            transition={{ duration: 0.75 }}


            className=""
        >
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={(e) => e.stopPropagation}
            >
            </div>

            <div>
                <h4>{title}</h4>
                <div>{modalContent}</div>
            </div>
        </motion.div>
    )

    isOpen ? <></> : 0;
    return ReactDOM.createPortal(content, document.getElementById('root'));

}




