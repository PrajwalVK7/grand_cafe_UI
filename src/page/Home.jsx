import React, { Fragment } from 'react'
import homebg from '../assets/home-bg.jpeg'
import ServiceCard from '../components/service/ServiceCard'
import SupportDiv from '../components/SupportDiv'

function Home() {

    const states = [
        "Maharashtra",
        "Kerala",
        "Tamilnadu",
        "Karnataka",
        "Gujarath",
        "Hariyana",
        "Karnataka",
        "Gujarath",
        "Hariyana"
    ]
    return (
        <>
            <section id='home-container'>
                <div className='container mx-auto lg:my-10 my-0 '>
                    <img className=' px-2 object-fill w-100 rounded-3xl' style={{width:'100%', height:'32rem'}} src={homebg} alt="" />
                </div>
            </section>
            <section id='service' className='lg:my-35 my-3'>
                <Fragment>
                    <h1 className='text-center text-3xl text-black font-bold'>Select Service</h1>
                    <div className='container mx-auto my-10 sm:my-0'>
                        <ServiceCard />
                    </div>
                </Fragment>

            </section>
            <SupportDiv />
            <section id='state' className=''>
                <div className='container mx-auto px-2'>
                    <h1 className='text-3xl text-black font-bold'>Select State</h1>
                    <div>
                        <div className=' grid grid-cols-3 gap-4 my-5'>
                            {
                                states && 
                                states.map((item)=>(
                                    <div className='border-2 rounded-lg  shadow-lg drop-shadow-2xl p-5'><h2 className='text-center'>{item}</h2></div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </section>
            <SupportDiv />

        </>
    )
}

export default Home