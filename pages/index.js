import { useEffect, useState } from "react";
import io from "socket.io-client";
import Head from "next/head";

export default function Home() {
  const [socket_state, setSocket_state] = useState("connecting...");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    fetch("api/socket");
    setSocket(io());
  }, []);
  if (socket) {
    socket.on("connect", () => {
      console.log("connected", socket.id);
      setSocket_state("connected ✅");
    });
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Socket test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>socket state: {socket_state}</h1>
      </div>
    </>
  );
}
