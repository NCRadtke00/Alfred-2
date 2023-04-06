import Sidebar from "../components/Sidebar"
import "../styles/global.css"
import {SessionProvider} from "../components/SessionProvider"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Login from "../components/Login"

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        {!session ? (
          <Login/>
          ):(
          <SessionProvider session={session}>
            <div className="flex">
              <div className="bg-[#1d162a] max-w-xs h-screen overflow-y-auto md:min-w-[16rem]">
                <Sidebar/>
              </div>

              <div className="bg-[#251832] flex-1">{children}</div>
              
            </div>
          </SessionProvider>
        )
        }
      </body>
    </html>
  )
}
