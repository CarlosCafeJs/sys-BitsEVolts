'use client';

import { useEffect } from 'react';

import Header from "@/components/header/index";
import SubHeader from "@/components/subheader/index";
import Banner from "@/components/banner/index";
import ContainerCard from "@/components/containerCard/index";

export default function Home() {

  return (
    <main className="scroll-m-24">
      <Header />
      <SubHeader />
      <Banner />
      <ContainerCard />
    </main>
  );
}
