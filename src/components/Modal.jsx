import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        // Si el clic es en el overlay, cerrar el modal
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-8"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4 relative z-[1000]">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    onClick={onClose}
                >
                    <X className="text-black" size={20} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
