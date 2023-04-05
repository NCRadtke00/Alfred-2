import "../styles/global.css"

export const metadata = {
  title: 'Alfred',
  description: 'turning openAI into, Alfred, your personal assistant',
  creator: "Nicholas Radtke",
  publisher:"Nicholas Radtke",
  keywords: ["Alfred","openAI", "personal assistant"],
  viewport:{
    width:"device-width",
    initialScale:1,
    maximumScale:1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <div className="flex">
          <div className="bg-[#1d162a] max-w-xs h-screen overflow-y-auto md:min-w-[16rem]">Sidebar</div>
          <div className="bg-[#251832] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
