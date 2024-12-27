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
                    <div
                        className={`rounded-full p-1 ${navbarStyle.absolute ? 'bg-white' : ''} w-1/12 flex items-center`}
                        onClick={handleBack}>
                        <ArrowLeft color="black" size={28} />
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
                                ? 'rounded-full bg-white p-2'
                                : ''
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
                            <ReceiptText color="black" size={28} />
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}
