import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { config } from "@/config/config";
import ReduxProvider from "@/components/ReduxProvider";
import MainLayout from "@/layouts/MainLayout";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: config.appName,
  description: "eTech - Your One-Stop Shop for Electronics",
};
export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={``}>
        <ReduxProvider>
          <MainLayout>
            <Header />
            <div className="md:px-15 dark:bg-gray-900 dark:text-white px-5 min-h-screen">{children}</div>
            <Footer />
          </MainLayout>
        </ReduxProvider>
        <ToastContainer position="top-center"/>
      </body>
    </html>
  );
}
