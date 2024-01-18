import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="flex flex-col w-full max-w-[1440px] m-auto">
      <Component {...pageProps} />
    </main>
  );
}
