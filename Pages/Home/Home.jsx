import React from "react";
import Banner from "../../src/Components/Banner/Banner";
import CardContainer from "../../src/Components/CardContainer/CardContainer";
import { useLoaderData } from "react-router";
import ServiceCount from "../../src/Components/ServiceCount/ServiceCount";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="h-[calc(100vh-(178+76)px)]">
      <Banner></Banner>
      <CardContainer data={data}></CardContainer>
      <ServiceCount></ServiceCount>
    </div>
  );
};

export default Home;
