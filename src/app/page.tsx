import Image from "next/image";
import Container from "@/app/container";
import { LinkUnderline } from "@/components/uis";

const Home = () => {
  return (
    <Container>
      <Image
        src="/icon.svg"
        alt="icon"
        width={100}
        height={100}
        className="w-64 aspect-square"
      />
      <h1 className="text-5xl">0xn1-starter</h1>
      <h2 className="outline-2 outline-n1-orange/30 hover:outline-n1-orange/50 transition-all duration-300 ease-in-out px-4 py-2 rounded-full">
        base starter for nextjs
      </h2>
      <nav className="flex gap-4 text-lg text-n1-orange">
        <LinkUnderline href="/sample">sample page</LinkUnderline>
      </nav>
    </Container>
  );
};

export default Home;
