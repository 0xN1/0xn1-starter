"use client";

import { usePathname } from "next/navigation";
import Container from "@/app/container";
import { Divider } from "@/components/uis";

const SamplePage = () => {
  const pathname = usePathname();
  return (
    <Container title={pathname.split("/").pop() as string}>
      <h1 className="text-4xl hover:text-n1-orange">historia</h1>
      <Divider />
      <p className="max-w-prose text-justify">
        Hypergrid vectors fold inward, spawning crystalline algorithms that
        learn the taste of starlight. Holo-archivists stitch memory filaments
        with photon thread, yielding synaptic monuments that defragment across
        eras. Interface conduits breathe; their ionic valves synchronize with
        the heartbeat of distant moons. Firmware prayers compile into cathedral
        queries that query the void and return constellations of encrypted
        meaning.
      </p>
      <Divider />
    </Container>
  );
};

export default SamplePage;
