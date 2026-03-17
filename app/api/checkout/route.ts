import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { priceId } = body

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes("SUBSTITUA")) {
      return NextResponse.json({ error: "Configuração do Stripe incompleta. Por favor, adicione sua Secret Key no arquivo .env.local." }, { status: 500 })
    }

    if (!priceId) {
      return NextResponse.json({ error: "Price ID é obrigatório" }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/?canceled=true`,
      locale: "auto", // Auto detecta o idioma
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      custom_text: {
        submit: {
          message: "Seu pagamento está seguro e criptografado. Após a confirmação, entraremos em contato para agendar sua consultoria.",
        },
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error("Stripe error:", error)
    return NextResponse.json(
      { error: error.message || "Erro interno ao criar sessão de pagamento" },
      { status: 500 }
    )
  }
}
