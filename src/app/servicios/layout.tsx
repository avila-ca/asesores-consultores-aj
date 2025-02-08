
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-center text-5xl p-4">Servicios Principales</p>
      {children}
    </div>
  )
}
