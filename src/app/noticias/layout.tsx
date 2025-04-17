
export default function NewsLayout({children}:{children:React.ReactNode}) {
    return (
      <div >
        <p className="text-center text-5xl p-10">Notícias</p>
        {children}
      </div>
    )
  }
  