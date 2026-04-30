import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, telefone, mensagem } = body

    if (!nome || !email || !telefone) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 })
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (!scriptUrl) {
      return NextResponse.json({ error: "Script URL not configured" }, { status: 500 })
    }

    const payload = {
      type: "contact",
      name: nome,
      email,
      phone: telefone,
      message: mensagem || "",
      fonte: "Landing Page Offshore",
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Apps Script retornou status ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Lead API Error:", error)
    return NextResponse.json({ error: "Erro ao registrar contato" }, { status: 500 })
  }
}
