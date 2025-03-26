// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN });

export default async function handler(req, res) {
    const preference = new Preference(client);
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    try {
        const order = req.body;
        console.log(order)
        const preferencePre = {
            body: {
                payment_methods: {
                    excluded_payment_methods: [],
                    excluded_payment_types: [
                        {
                            id: "ticket"
                        },
                        {
                            id: "credit_card"
                        }
                    ],
                    installments: 1
                },
                items: [
                    {
                        title: order.title,
                        quantity: order.quantity,
                        unit_price: order.unit_price
                    }
                ],
            }
        };

        const response = await preference.create(preferencePre);
        res.status(200).json({ preferenceId: response.id });
    } catch (error) {
        console.error("Error al crear preferencia:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
