import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The wild oasis",
  title: { template: "%s | The Wild Oasis", default: "The Wild Oasis" },
  description: "Luxuroius cabin hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body className="flex flex-col bg-primary-950 text-primary-100 min-h-screen">
        <Header />
        <div className="flex-1 py-6 px-12">
          <main className="mx-auto text-center max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
