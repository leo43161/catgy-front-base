import React from 'react'

export default function CardCart() {
    return (
        <>
            <div className="p-4 border">
                <div className="flex items-center gap-4">
                    <div className="rounded h-28 w-28 border overflow-hidden flex items-center justify-center">
                        <img
                            src={`${process.env.URL_IMG}products/1733491018548-464309961_850446757074196_539282240995737463_n.jpg`}
                            alt=""
                        />
                    </div>
                    <div className='flex-1'>
                        <h3 className="text-lg font-bold">Sorrentinos Argentinos</h3>
                    </div>
                    <div className='flex-1'>

                    </div>
                </div>
            </div>

        </>
    )
}
