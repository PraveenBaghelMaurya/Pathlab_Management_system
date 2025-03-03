import Link from "next/link"

export function Button({ children, variant = "primary", size = "md", href, className = "", onClick, type = "button" }) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors"

  const variantStyles = {
    primary: "bg-emerald-400 text-white hover:bg-emerald-500",
    outline: "border border-emerald-400 text-emerald-500 hover:bg-emerald-50",
    link: "text-emerald-500 hover:text-emerald-600 underline-offset-2 hover:underline",
  }

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  }

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  )
}

