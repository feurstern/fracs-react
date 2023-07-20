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
        title : 'Online',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia feugiat turpis, nec tincidunt est accumsan vel. Sed lacinia feugiat dolor luctus venenatis. Aenean a bibendum purus. Sed leo orci, egestas a sapien in, ',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },

    {
        title : 'a',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia feugiat turpis, nec tincidunt est accumsan vel. Sed lacinia feugiat dolor luctus venenatis. Aenean a bibendum purus. Sed leo orci, egestas a sapien in, ',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },
    {
        title : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia feugiat turpis, nec tincidunt est accumsan vel. Sed lacinia feugiat dolor luctus venenatis. Aenean a bibendum purus. Sed leo orci, egestas a sapien in, ',
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
        title : 'B',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia feugiat turpis, nec tincidunt est accumsan vel. Sed lacinia feugiat dolor luctus venenatis. Aenean a bibendum purus. Sed leo orci, egestas a sapien in, ',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },
    {
        title : 'C',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia feugiat turpis, nec tincidunt est accumsan vel. Sed lacinia feugiat dolor luctus venenatis. Aenean a bibendum purus. Sed leo orci, egestas a sapien in, ',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },
    {
        title : 'D',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia feugiat turpis, nec tincidunt est accumsan vel. Sed lacinia feugiat dolor luctus venenatis. Aenean a bibendum purus. Sed leo orci, egestas a sapien in, ',
        modalContent :(
            <>
                <p>
                    This the description of the image
                </p>
            </>

        )
    },

]
