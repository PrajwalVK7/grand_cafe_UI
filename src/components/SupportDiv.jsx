import React from 'react'

function SupportDiv() {
    return (
        <>
            <div className='px-5 my-10 grid grid-cols-3 lg:grid-cols-12 text-white container  gap-6 lg:hidden' >
                <div className=' flex justify-center align-middle items-center rounded-md bg-bg-blue' >
                    <h2 className='text-white text-4xl font-bold'>O</h2>
                </div>
                <div className='col-span-2 lg:col-span-11 rounded-md flex justify-start items-center bg-bg-blue' >
                    <h2 className='ps-5 text-white subpixel-antialiased  text-xl font-semibold'>Get Full Support</h2>
                </div>
            </div>
        </>
    )
}

export default SupportDiv