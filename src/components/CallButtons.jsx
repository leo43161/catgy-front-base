// components/CallButtons.jsx
import { useState } from 'react';
import { Bell, Receipt, Coffee, X } from 'lucide-react';

const CallButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setActiveButton(null);
    }
  };

  const handleCallWaiter = (type) => {
    setActiveButton(type);
    // Aquí iría la lógica para enviar la solicitud al servidor
    setTimeout(() => {
      setActiveButton(null);
      setIsExpanded(false);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }, 1000);
  };

  const waiterOptions = [
    { id: 'waiter', icon: <Bell size={20} />, label: 'Mozo', color: 'bg-blue-500' },
    { id: 'bill', icon: <Receipt size={20} />, label: 'Cuenta', color: 'bg-green-500' },
  ];

  return (
    <>
      {/* Botón principal */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {isExpanded && (
          <div className="flex flex-col gap-3 mb-2">
            {waiterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleCallWaiter(option.id)}
                className={`${option.color} text-white rounded-full p-3 flex items-center gap-2 shadow-lg transition-all ${
                  activeButton === option.id ? 'animate-pulse scale-105' : ''
                }`}
              >
                {option.icon}
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        )}
        
        <button
          onClick={toggleExpand}
          className="bg-primary hover:bg-primary/80 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        >
          {isExpanded ? <X size={24} /> : <Bell size={24} />}
        </button>
      </div>

      {/* Confirmación */}
      {showConfirmation && (
        <div className="fixed bottom-24 right-6 bg-black bg-opacity-80 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in z-50">
          <p className="text-sm">¡Un mozo vendrá pronto!</p>
        </div>
      )}
    </>
  );
};

export default CallButtons;