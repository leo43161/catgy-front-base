import React from 'react';
import { ReceiptText } from 'lucide-react';
import Head from 'next/head';

export default function Layout({ children }) {
    const MobilePrueba = true;
    return (
        <div className="bg-neutral-50">
            <Head>
                <title>Catgy</title>
            </Head>
            <div className={MobilePrueba ? 'mx-auto md:w-4/12 md:px-0 w-full relative' : 'container mx-auto'}>
                <div>
                    <div className='flex justify-between items-center mb-4 pt-4 px-4'>
                        <h1 className="text-2xl font-bold">Monet</h1>
                        <div className='relative'>
                            <span className="absolute flex h-3 w-3 top-[-4px] right-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span
                                    className="relative flex justify-center items-center rounded-full h-3 w-3 bg-primary text-[10px] text-white text-center"
                                >
                                    5
                                </span>
                            </span>
                            <ReceiptText color="black" size={25} />
                        </div>
                    </div>
                    <main>
                        {children}
                    </main>
                </div>
            </div>

        </div>
    )
}
