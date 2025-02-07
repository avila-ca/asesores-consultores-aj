
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-5xl">Sobre Nosotros</p>
      {children}
    </div>
  )
}
