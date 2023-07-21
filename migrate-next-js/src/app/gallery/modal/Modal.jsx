import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import Reveal from './Reveal';
import { title } from 'process';
import { MdClose } from 'react-icons/md'


export const Modal = ({
    isOpen,
    closeModal,
    imageSrc,
    title,
    description
}) => {
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity :0}}
                className=''
            >
             <div>
                <div>
                <button onClick={closeModal}>
                X
                </button>
                </div>
                <img src={imageSrc} />
                <p>{description}</p>
             </div>

            </motion.div>
        )}
    </AnimatePresence>
    // const ref = useRef(null)
    // const control = useAnimation();


    // const [hovered, setHovered] = useState(false);

    // const isInView = useInView(ref, { once: true });



    // useEffect(() => {
    //     const getHTMLBody = document.querySelector('body');
    //     isOpen ? getHTMLBody.style.overflowY = 'hidden' : 0
    //     !isOpen ? getHTMLBody.style.overflowY = 'scroll' : 0
    // }, [isOpen])

    // console.log(`The value of HTML BODY : ${getHTMLBody}`)

    // const content = (
    //     // <div className={``} onClick={() => setIsOpen(false)}>
    //     //     <button classname="">
    //     //         <MdClose />
    //     //     </button>
    //     //     <motion.div
    //     //         ref={ref}
    //     //         variants={{
    //     //             hidden: { opacity: 0, y: 100 },
    //     //             visible: { opacity: 2, y: 0 }
    //     //         }}
    //     //         initial='hidden'
    //     //         animate={control}
    //     //         transition={{ duration: 0.75 }}


    //     //         className=""
    //     //     >
    //     //         <div
    //     //             onMouseEnter={() => setHovered(true)}
    //     //             onMouseLeave={() => setHovered(false)}
    //     //             onClick={(e) => e.stopPropagation}
    //     //         >
    //     //         </div>
    //     //         <div>
    //     //             <h4>sdsd</h4>
    //     //             <div>zdsdsdsdsd</div>
    //     //             <div>sdsds</div>
    //     //         </div>
    //     //     </motion.div>

    //     // </div>

    // )

    !isOpen ? <></> : 0;
    // return ReactDOM.createPortal(content, document.getElementById('root'));
}








