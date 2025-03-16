
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-center text-5xl p-4">Sobre Nosotros</p>
      {children}
    </div>
  )
}
