import React from 'react'
import s1 from '../../assets/services/1.png'
import s2 from '../../assets/services/2.png'
import s3 from '../../assets/services/3.png'
import s4 from '../../assets/services/4.png'

function ServiceCard() {

    const services = [
        { img: s1, title: "Theaters" },
        { img: s2, title: "Tv" },
        { img: s3, title: "BillBoard" },
        { img: s4, title: "Radio" },

    ]

    return (
        <>
            <div className='grid lg:grid-cols-4 grid-cols-3 gap-4 px-3  '>
            {services?.length > 0 ?
                services.map((item, index) => (
                    <div className='flex  flex-col justify-center items-center align-middle  '>
                        <img  className=' rounded-2xl h-20 w-72 lg:h-72 lg:w-72' src={item.img} alt="" />
                        <h2 className='text-center md:text-base text-xl my-3'>{item.title}</h2>
                    </div>
                )) : <p>....</p>
            }
            </div>
        </>
    )
}

export default ServiceCard