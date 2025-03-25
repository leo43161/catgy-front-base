import React, { useState } from 'react';
import { ReceiptText, Clock, ChevronDown, ChevronUp, Banknote, CreditCard } from 'lucide-react';
import OrderPayment from './OrderPayment';

const OrdersTab = () => {
    const [activeOrder, setActiveOrder] = useState(null);

    const toggleOrder = (id) => {
        setActiveOrder(activeOrder === id ? null : id);
    };

    // Sample order data
    const orders = [
        {
            id: 1,
            status: 'in-progress',
            time: '12:42 PM',
            items: [
                { name: 'Chicken Burger', quantity: 1, notes: "", price: 8.99 },
                { name: 'French Fries', quantity: 1, notes: "", price: 3.50 },
                { name: 'Coca-Cola', quantity: 1, notes: "", price: 2.50 }
            ],
            total: 14.99
        },
        {
            id: 2,
            status: 'completed',
            time: '11:30 AM',
            items: [
                { name: 'Margherita Pizza', quantity: 1, notes: "", price: 12.99 },
                { name: 'Caesar Salad', quantity: 1, notes: "", price: 7.50 },
                { name: 'Sparkling Water', quantity: 2, notes: "", price: 4.00 }
            ],
            total: 24.49
        },
        {
            id: 3,
            status: 'pagado',
            time: 'Yesterday, 8:15 PM',
            items: [
                { name: 'Beef Tacos', quantity: 2, notes: "", price: 9.98 },
                { name: 'Guacamole & Chips', quantity: 1, notes: "", price: 5.50 },
                { name: 'Lemonade', quantity: 1, notes: "", price: 3.00 }
            ],
            total: 18.48
        }
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'in-progress':
                return 'bg-amber-100 text-amber-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pagado':
                return 'bg-blue-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'in-progress':
                return 'In Progress';
            case 'completed':
                return 'Completed';
            case 'pagado':
                return 'Pagado';
            default:
                return status;
        }
    };

    // Función para calcular el total de todas las órdenes
    const getTotalOrders = () => {
        return orders.reduce((sum, order) => order.status != "pagado" ? sum + order.total : sum, 0).toFixed(2);
    };

    return (
        <>
            <div className="min-h-svh">
                <div className="flex flex-col h-full">
                    {/* Orders List */}
                    <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                        {orders.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 pt-8">
                                <ReceiptText className="w-12 h-12 mb-2 text-gray-300" />
                                <p className="text-lg font-medium">No orders yet</p>
                                <p className="text-sm">Your order history will appear here</p>
                            </div>
                        ) : (
                            orders.map((order) => (
                                <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                    {/* Order Header */}
                                    <div
                                        className="flex items-center justify-between p-4 cursor-pointer"
                                        onClick={() => toggleOrder(order.id)}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-gray-100 rounded-full">
                                                <ReceiptText className="w-5 h-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-800">
                                                    Order #{order.id}
                                                </div>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {order.time}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(order.status)}`}>
                                                {getStatusText(order.status)}
                                            </span>
                                            {activeOrder === order.id ? (
                                                <ChevronUp className="w-5 h-5 text-gray-400" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Order Details */}
                                    {activeOrder === order.id && (
                                        <div className="px-4 pb-4 border-t border-gray-100">
                                            <div className="pt-3 pb-2">
                                                <div className="text-xs font-medium text-gray-500 uppercase">
                                                    Order Items
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx}>
                                                        <div className="flex justify-between text-sm">
                                                            <div className="flex items-center">
                                                                <span className="font-medium text-gray-800">{item.quantity}x</span>
                                                                <span className="ml-2 text-gray-700">{item.name}</span>
                                                            </div>
                                                            <span className="text-gray-700">${item.price.toFixed(2)}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-xs text-gray-500">Lorem ipsum dolor sit amet</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between pt-3 mt-3 text-sm font-medium border-t border-gray-100">
                                                <span>Total</span>
                                                <span className="font-bold">${order.total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Total Section */}
                </div>
            </div>
            <OrderPayment></OrderPayment>
            {/* <div className="sticky bottom-0 left-0 w-full bg-gray-100 py-4">
                <div className="flex flex-col px-4">
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-lg font-bold">Total a pagar:</p>
                        <p className="text-2xl font-bold">
                            <span className="font-bold text-primary">$</span>{getTotalOrders()}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            className="flex-1 flex justify-center items-center gap-2 rounded shadow text-white bg-green-600 py-3 px-4 font-bold"
                        >
                            <Banknote size={20} />
                            <span>Pagar en Efectivo</span>
                        </button>
                        <button
                            className="flex-1 flex justify-center items-center gap-2 rounded shadow text-white bg-blue-600 py-3 px-4 font-bold"
                        >
                            <CreditCard size={20} />
                            <span>Mercado Pago</span>
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default OrdersTab;
