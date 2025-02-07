
export default function NewsLayout({children}:{children:React.ReactNode}) {
    return (
      <div>
        <p className="text-5xl">Notícias</p>
        {children}
      </div>
    )
  }
  