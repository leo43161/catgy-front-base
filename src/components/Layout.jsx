import React from 'react';
import { ReceiptText } from 'lucide-react';
import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
    const MobilePrueba = true;
    const inProduct = true;
    return (
        <div className="bg-neutral-50">
            <Head>
                <title>Catgy</title>
            </Head>
            <div className={MobilePrueba ? 'mx-auto md:w-4/12 md:px-0 w-full relative' : 'container mx-auto'}>
                <div>
                    <Header></Header>
                    <main>
                        {children}
                    </main>
                </div>
            </div>

        </div>
    )
}
