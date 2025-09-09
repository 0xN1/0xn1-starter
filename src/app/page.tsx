import Image from "next/image";
import Container from "@/app/container";
import AnimatedText from "@/components/anim/animated-text";
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
      {/* <h1 className="text-5xl">0xn1-starter</h1> */}
      <AnimatedText
        text="0xn1-starter"
        direction="scramble"
        duration={0.2}
        delayStep={0.1}
        scrambleChars="-0XN1"
        className="text-5xl"
      />
      <h2 className="outline-2 outline-n1-orange/30 hover:outline-n1-orange/50 transition-all duration-300 ease-in-out px-4 py-2 rounded-full">
        base starter for nextjs
      </h2>
      <nav className="flex gap-4 text-lg text-n1-orange">
        <LinkUnderline href="/sample">sample page</LinkUnderline>
        <LinkUnderline href="/anim">animated page</LinkUnderline>
      </nav>
    </Container>
  );
};

export default Home;
