import Header from "./_components/Header";
import { Mr_De_Haviland } from "next/font/google";
import Footer from "./_components/Footer";
import { Fragment } from "react";

const inter = Mr_De_Haviland({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex flex-grow flex-col items-center justify-between bg-main-500">
        <h1
          className={`my-auto text-center text-7xl font-bold text-main-100 lg:text-[12rem] ${inter.className}`}
        >
          Coming soon!
        </h1>
      </main>
      <Footer />
    </Fragment>
  );
}
