import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreferenceId } from "@/redux/slices/orderSlice";
import { Wallet } from "@mercadopago/sdk-react";
import { Banknote, CreditCard } from "lucide-react";

export default function OrderPayment() {
    const dispatch = useDispatch();
    const { orders, preferenceId } = useSelector((state) => state.orders);
    const [loading, setLoading] = useState(false);

    const getTotalOrders = () => {
        return orders.reduce((sum, order) => sum + order.total, 0).toFixed(2);
    };

    const handleMercadoPago = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/mp/create-preference", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "ordenessss",
                    quantity: 1,
                    unit_price: Number(getTotalOrders()),
                }),
            });
            const data = await response.json();
            dispatch(setPreferenceId(data.preferenceId));
        } catch (error) {
            console.error("Error creando preferencia de pago:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="sticky bottom-0 left-0 w-full bg-gray-100 py-4">
                <div className="flex flex-col px-4">
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-lg font-bold">Total a pagar:</p>
                        <p className="text-2xl font-bold">
                            <span className="font-bold text-primary">$</span>
                            {getTotalOrders()}
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
                            onClick={handleMercadoPago}
                            disabled={loading}
                            className="flex-1 flex justify-center items-center gap-2 rounded shadow text-white bg-blue-600 py-3 px-4 font-bold"
                        >
                            <CreditCard size={20} />
                            <span>{loading ? "Generando pago..." : "Mercado Pago"}</span>
                        </button>
                    </div>

                    {preferenceId && (
                        <div className="mt-4 flex justify-center">
                            <Wallet initialization={{ preferenceId }} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
