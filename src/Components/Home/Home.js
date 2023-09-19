import React from "react";
import About from "../About/About";
import Community from "../Community/Community";
import DailyPlan from "../DailyPlan/DailyPlan";
import Footer from "../Footer/Footer";
import Goals from "../Goals/Goals";
import Header from "../Header/Header";
import InstallSection from "../InstallSection/InstallSection";
import ProblemArea from "../ProblemArea/ProblemArea";
import Result from "../Result/Result";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <ProblemArea></ProblemArea>
      <DailyPlan></DailyPlan>
      <Result></Result>
      <Community></Community>
      <Goals></Goals>
      <Footer></Footer>
      <InstallSection></InstallSection>
    </div>
  );
};

export default Home;
