import React, {useState} from 'react';
import StartBlock from "../../components/startBlock/startBlock";
import DefaultBlock from "../../components/defaultBlock/defaultBlock";
import SponsorBlock from "../../components/sponsorBlock/sponsorBlock";

export default function Home() {
  return (
    <>
      <StartBlock />
      <DefaultBlock />
      <SponsorBlock />
    </>
  )
}