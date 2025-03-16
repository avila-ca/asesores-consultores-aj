
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-center text-5xl p-4">Empresas y Pymes</p>
      {children}
    </div>
  )
}
