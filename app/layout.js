import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Header/>
        <div className="md:px-10 px-5">{children}</div>
        <Footer/>
        </body>
    </html>
  );
}
