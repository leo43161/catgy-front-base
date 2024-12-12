import { ReceiptText, ArrowLeft } from 'lucide-react';

export default function Header() {
    const inProduct = true;
    return (
        <div className={`flex justify-between items-center mb-4 pt-4 px-4 w-full ${inProduct && 'absolute'}`}>
            {inProduct ? <div className="rounded-full bg-white p-2" >
                <ArrowLeft color="black" size={25} />
            </div> :
                <div>
                    <h1 className={`text-2xl font-bold ${inProduct && 'text-white'}`}>Monet</h1>
                </div>
            }
            <div className={inProduct ? "rounded-full bg-white p-2" : ""} >
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
        </div>
    )
}
