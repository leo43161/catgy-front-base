import { ReceiptText, ArrowLeft } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const router = useRouter();
    const [canGoBack, setCanGoBack] = useState(false);

    // Obtiene el estado navbarStyle desde el store
    const navbarStyle = useSelector((state) => state.ui.navbarStyle);

    // Función para manejar el botón de regreso
    const handleBack = () => {
        console.log(router)
        router.back(); // Navega a la página anterior
    };

    return (
        <div
            className={`flex justify-between items-center mb-4 pt-4 px-4 w-full ${navbarStyle.absolute ? 'absolute' : ''
                }`}
        >
            <>
                {navbarStyle.back && (
                    <div className="w-1/12">
                        <div
                            className={`rounded-full p-1 ${navbarStyle.absolute ? 'bg-white' : ''} flex items-center justify-center w-12 h-12`}
                            onClick={handleBack}>
                            <ArrowLeft color="black" size={30} />
                        </div>
                    </div>
                )}
            </>
            {navbarStyle.title && (
                <div className={`rounded-full p-2 ${navbarStyle.absolute ? 'bg-white' : ''} ${!navbarStyle.back ? 'w-10/12' : ''} `}>
                    <h1
                        className={`text-3xl font-bold ${navbarStyle.absolute ? 'text-white' : ''
                            } drop-shadow-md`}
                    >
                        {navbarStyle.title}
                    </h1>
                </div>
            )}
            {navbarStyle.order && (
                <Link href={`/cart`}>
                    <div
                        className={
                            navbarStyle.absolute
                                ? 'rounded-full bg-white flex items-center justify-center w-12 h-12'
                                : 'w-12 h-12 flex items-center justify-center'
                        }
                    >
                        <div className="relative">
                            <span className="absolute flex h-3 w-3 top-[-4px] right-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span
                                    className="relative flex justify-center items-center rounded-full h-3 w-3 bg-primary text-[11px] text-white text-center"
                                >
                                    3
                                </span>
                            </span>
                            <ReceiptText color="black" size={30} />
                        </div>
                    </div>
                </Link>
            )}
            {
                navbarStyle.back && navbarStyle.title && (
                    <div class="w-1/12">

                    </div>
                )
            }
        </div>
    );
}
