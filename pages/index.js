/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Indy Bar - Menu</title>
        <meta name="description" content="Indy Bar website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <div className="relative w-screen min-h-screen h-full">
        <div className="absolute w-full h-full">
          <Image src="/menu_1.png" alt="menu" fill />
        </div>
      </div> */}
      <div className="">
        <img src="/menu_1.png" alt="menu" className="m-auto" />
        <img src="/menu_2.png" alt="menu" className="m-auto" />
      </div>
    </>
  );
}
