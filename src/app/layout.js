import { Caprasimo } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight:["400"],
  variable : '--font-geist-sans',
});



export const metadata = {
  title: "MR DEV",
  description: "Mudassar Rassol Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${caprasimo.className} antialiased`}
      >
     <Providers>{children}</Providers>
      </body>
    </html>
  );
}
