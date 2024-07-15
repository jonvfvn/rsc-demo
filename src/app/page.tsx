import Image from "next/image";
import Counter from "./components/counter";
import Description from "./components/description";
import ServerComponent from "./components/server-only";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Hello world
        {/* <ServerComponent /> */}
      </h1>
      <Counter label={<ServerComponent />} />
      {/* <Counter /> */}
      <Description />
    </main>
);
}
