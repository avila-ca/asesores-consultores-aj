
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-5xl">Servicios Principales</p>
      {children}
    </div>
  )
}
