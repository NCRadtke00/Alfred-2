import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"

export const authOptions: NextAuthOptions = {
    providers: [
    //    EmailProvider({
    //        server: process.env.EMAIL_SERVER,
    //        from: process.env.EMAIL_FROM,
    //      }),
         GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
          }),
        ],
        //might not need below 
        //   theme: {
        //     colorScheme: "light",
        //   },
        //   callbacks: {
        //     async jwt({ token }) {
        //       token.userRole = "admin"
        //       return token
        //     },
        //   },
        }
        
        export default NextAuth(authOptions)