import { Navbar } from "./navbar"
import { Footer } from "./footer"

export function PageContainer({ children, className = "" }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}

