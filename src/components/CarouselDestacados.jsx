import React from 'react'
import Carousel from './Carousel'
import DestacadosHeader from './DestacadosHeader'

export default function CarouselDestacados() {
    const productHighlight = [
        {
            img: "imagen-png-2.png",
            title: "Sorrentinos Argentinos 😍",
            left: -5,
            top: -17,
            color: "#792013"
        },
        {
            img: "imagen-png-1.png",
            title: "Tarta del Norte",
            left: -5,
            top: -17,
            color: "#102C57"
        },
        {
            img: "imagen-png-3.png",
            title: "Postre Male",
            left: 1,
            top: -23,
            color: "#e5a455"
        }
    ]
    return (
        <div className='w-full mb-8 position-relative'>
            <Carousel>
                {productHighlight
                    .map(({ img, title, left, top, color }, idx) => (
                        <DestacadosHeader
                            key={idx}
                            img={img}
                            title={title}
                            left={left}
                            top={top}
                            color={color}
                        />
                    ))}
            </Carousel>
        </div>
    )
}
