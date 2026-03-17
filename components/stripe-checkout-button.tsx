"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

interface StripeCheckoutButtonProps {
  priceId: string
  className?: string
  children?: React.ReactNode
  variant?: "primary" | "outline"
}

export function StripeCheckoutButton({
  priceId,
  className = "",
  children,
  variant = "primary",
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erro ao iniciar pagamento")
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="btn-kast-wrapper">
        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className={`btn-kast btn-kast-lg ${variant === "outline" ? "btn-kast-outline" : ""} ${className} disabled:opacity-60`}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Aguarde...
            </>
          ) : (
            <>
              {children || "Pagar Agora"}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </span>
      {error && (
        <p className="text-xs text-red-400/80 text-center">{error}</p>
      )}
    </div>
  )
}
