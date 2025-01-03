import React from 'react'
import Carousel from './Carousel'
import DestacadosHeader from './DestacadosHeader'

export default function CarouselDestacados() {
    return (
        <div className='px-1 w-full'>
            <Carousel>
                {Array(3)
                .fill(null)
                .map((_, idx) => (<DestacadosHeader key={idx} />))}
            </Carousel>
        </div>
    )
}
