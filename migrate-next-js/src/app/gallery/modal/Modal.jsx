import React, { useRef, useState } from 'react'
import motion, { useInView } from 'framer-motion'


const Modal = () => {
    const ref = useRef(null)
    const control = Animation();

    const [click, isClicked] = useState(false);
    const isInView = useInView(ref, {once:true});
    
    return (
        <motion.div
            ref={ref}
            className=""
        >

        </motion.div>
    )
}

export default Modal