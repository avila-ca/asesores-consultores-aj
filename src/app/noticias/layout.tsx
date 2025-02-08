
export default function NewsLayout({children}:{children:React.ReactNode}) {
    return (
      <div >
        <p className="text-center text-5xl p-4">Notícias</p>
        {children}
      </div>
    )
  }
  