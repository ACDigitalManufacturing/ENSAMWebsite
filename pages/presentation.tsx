import Main from "layouts/Main";
import { Formation, Hero, Mission, Advantages } from "components/pages/about";
import Head from "next/head";

const CustomHead = () => (
  <Head>
    <title>About - ENSAM CASA</title>
    {/* facebook - start */}
    <meta property="og:title" content="Ensam Casablanca" />
    <meta property="og:site_name" content="Ensam Casablanca official website" />
    <meta
      property="og:description"
      content="L’École Nationale Supérieure d’Arts et Métiers de Casablanca,
      affiliée à l'Université Hassan II de Casablanca."
    />
    <meta
      property="og:image"
      content="https://ensam-casa.herokuapp.com/logo.jpg"
    />
    <meta property="og:url" content="https://ensam-casa.herokuapp.com/" />
    {/* facebook - start */}

    {/* twitter - start */}
    <meta name="twitter:title" content="Ensam casa" />
    <meta
      name="twitter:description"
      content="L’École Nationale Supérieure d’Arts et Métiers de Casablanca,
      affiliée à l'Université Hassan II de Casablanca."
    />
    <meta
      name="twitter:image"
      content="https://ensam-casa.herokuapp.com/logo.jpg"
    />
    <meta name="twitter:card" content="https://ensam-casa.herokuapp.com/" />
    <meta name="twitter:image:alt" content="Ensam Casa logo" />
    {/* twitter - end */}

    <meta property="og:type" content="website" />
  </Head>
);

const Presentation = () => {
  return (
    <Main>
      <>
        <CustomHead />
        <div className="container">
          <Hero />
          <Mission />
          <Formation />
          <Advantages />
        </div>
      </>
    </Main>
  );
};

export default Presentation;
