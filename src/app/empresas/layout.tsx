
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-center text-5xl p-10">Empresas y Pymes</p>
      {children}
    </div>
  )
}
