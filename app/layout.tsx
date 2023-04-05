import "../styles/global.css"

export const metadata = {
  title: 'Alfred',
  description: 'turning openAI into, Alfred, your personal assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
