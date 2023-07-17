import React from 'react'
import Modal from './Modal'

//this data constant for information details.
export const Constant = () => {
  return (
    <section>
        <div>
            {
                details.map((data)=>{
                    return  <Modal key={data.title} {...data} />
                })
            }
        </div>

    </section>
  )
}

const details = [
    {
        title : '',
        description : '',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },

    {
        title : '',
        description : '',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },
    {
        title : '',
        description : '',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },
    {
        title : '',
        description : '',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },
    {
        title : '',
        description : '',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },
    {
        title : '',
        description : '',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },

]
