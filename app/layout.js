import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { config } from "@/config/config";

export const metadata = {
  title: config.appName,
  description: "eTech - Your One-Stop Shop for Electronics",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Header/>
        <div className="md:px-15 px-5 min-h-screen">{children}</div>
        <Footer/>
        </body>
    </html>
  );
}
