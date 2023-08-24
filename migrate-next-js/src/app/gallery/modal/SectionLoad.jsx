import React from 'react'
import Reveal from './Reveal'
import style from '../../st'

const SectionLoad = ({ title, dir = 'r' }) => {
    return (
        <div className={`${style.modal}`}>
            <div>
                <h3>
                 <Reveal>
                    <span className=''>
                        {title}
                    </span>
                 </Reveal>
                </h3>
            </div>
        </div>
    )
}

export default SectionLoad