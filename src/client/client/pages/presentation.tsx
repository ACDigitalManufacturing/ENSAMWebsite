import Main from "layouts/Main";
import { Formation, Hero, Mission, Advantages } from "components/pages/about";

const Presentation = () => {
  return (
    <Main>
      <div className="container">
        <Hero />
        <Mission />
        <Formation />
        <Advantages />
      </div>
    </Main>
  );
};

export default Presentation;
