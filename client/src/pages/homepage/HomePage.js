import React, { Profiler } from "react";
import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./HomePage.style";
const HomePage = () => (
  <HomePageContainer>
    <Profiler id="Directory" onRender={(id,phase,acutalDuration)=> {
      console.log({
        id,
        phase,
        acutalDuration
      })
    }}>
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
