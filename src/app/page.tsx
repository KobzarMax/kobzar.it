import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/Header";
import { Mr_De_Haviland } from "next/font/google";
import Footer from "./_components/Footer";

const inter = Mr_De_Haviland({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <Header />
      <main className="flex flex-grow flex-col items-center justify-between bg-main-500">
        <h1
          className={`my-auto text-center text-6xl font-bold text-main-100 lg:text-[12rem] ${inter.className}`}
        >
          Coming soon!
        </h1>
      </main>
      <Footer />
    </HydrateClient>
  );
}
