import { NextResponse } from "next/server"
import Stripe from "stripe"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const body = await request.json()
    const { priceId } = body

    if (!stripeSecretKey || stripeSecretKey.includes("SUBSTITUA")) {
      return NextResponse.json({ error: "Configuração do Stripe incompleta. Por favor, adicione sua Secret Key no painel da Vercel." }, { status: 500 })
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20" as any,
    })

    let targetPriceId = priceId

    // Se o priceId começar com prod_, buscamos o primeiro preço ativo desse produto
    if (priceId.startsWith("prod_")) {
      const prices = await stripe.prices.list({
        product: priceId,
        active: true,
        limit: 1,
      })

      if (prices.data.length === 0) {
        return NextResponse.json(
          { error: "Nenhum preço ativo encontrado para este produto." },
          { status: 400 }
        )
      }
      targetPriceId = prices.data[0].id
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: targetPriceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/?canceled=true`,
      locale: "auto",
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
