"use client";

import { easeInOut, motion as m } from "motion/react";
import Container from "@/app/container";
import AnimatedText from "@/components/anim/animated-text";
import mockIpsum from "@/lib/mock";

const AnimatedPage = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
    >
      <Container>
        {/* <AnimatedText
          text="AnimatedPage"
          direction="left-to-right"
          delayStep={0.05}
        /> */}
        {/* <AnimatedText
          text="AnimatedPage"
          direction="right-to-left"
          delayStep={0.05}
        /> */}
        <AnimatedText
          text="epoch CCLVI"
          direction="middle-out"
          delayStep={0.05}
          className="text-8xl"
        />
        {/* <AnimatedText
          text="AnimatedPage"
          direction="middle-in"
          delayStep={0.05}
        /> */}
        {/* <AnimatedText
          text="AnimatedPage"
          direction="scramble"
          delayStep={0.05}
        /> */}

        <AnimatedText
          text={mockIpsum}
          direction="scramble"
          duration={0.1}
          delayStep={0.03}
          scrambleChars="-0XN1"
          className="text-justify max-w-prose max-h-96 overflow-y-auto scrollbar-hide"
          delay={0.5}
        />

        {/* <AnimatedText
          // get first paragraph of mock ipsum
          text={mockIpsum.split("\n")[0]}
          direction="scramble"
          duration={0.1}
          delayStep={0.03}
          scrambleChars="-0XN1"
          className="text-justify max-w-prose"
          delay={0.5}
        />
        <AnimatedText
          text={mockIpsum.split("\n")[1]}
          direction="scramble"
          duration={0.1}
          delayStep={0.04}
          className="text-justify max-w-prose "
          delay={5}
        />
        <AnimatedText
          text={mockIpsum.split("\n")[2]}
          direction="scramble"
          duration={0.1}
          delayStep={0.05}
          scrambleChars="XO!"
          className="text-justify max-w-prose"
          delay={15}
        /> */}
      </Container>
    </m.div>
  );
};

export default AnimatedPage;
