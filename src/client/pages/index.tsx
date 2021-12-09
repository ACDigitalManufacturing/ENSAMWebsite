import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { CustomError, PostType } from "Types/api";
import { getNoticeToStudents, getOfficialPressReleases } from "api/home";

//! jsx
import Main from "layouts/Main";

import CustomCardOneSlider from "components/sliders/CustomCardOneSlider";
import WordFromTheDirector from "components/pages/home/WordFromTheDirector";
import SchoolPresentation from "components/pages/home/SchoolPresentation";
import TheyTalkAboutUs from "components/pages/home/TheyTalkAboutUs";
import OurCourses from "components/pages/home/OurCourses";
import Partners from "components/pages/home/Partners";
import Hero from "components/pages/home/Hero";
import ScrollToTop from "components/pages/home/ScrollToTop";

import styles from "styles/pages/index.module.scss";
const CustomHead = () => (
  <Head>
    <title>HOME - ENSAM CASA</title>
    {/* facebook - start */}
    <meta property="og:title" content="ensam casa" />
    <meta property="og:site_name" content="ensam casablanca official website" />
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
    <meta name="twitter:title" content="ensam casa" />
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
    <meta name="twitter:image:alt" content="ensam casa logo" />
    {/* twitter - end */}

    <meta property="og:type" content="website" />
  </Head>
);
const Home: NextPage = () => {
  const [officialPressReleases, setOfficialPressReleases] = useState<
    PostType[]
  >([]);
  const [noticeToStudents, setNoticeToStudents] = useState<PostType[]>([]);
  const [errors, setErrors] = useState<CustomError[]>([]);

  //!
  //! functions - start
  const initializeOfficialPressReleases = async () => {
    //* this function is meant to get most recent official
    //* press releases from backend api

    const { response, errors } = await getOfficialPressReleases();
    if (errors) return setErrors((prev) => [...prev, ...errors]);
    if (!response)
      return setErrors((prev) => [
        ...prev,
        { message: "server not responding" },
      ]);
    return setOfficialPressReleases(response.posts || []);
  };

  const initializeNoticeToStudents = async () => {
    //* this function is meant to get most recent notices
    //* for students of ensam casa

    const { response, errors } = await getNoticeToStudents();
    if (errors) return setErrors((prev) => [...prev, ...errors]);
    if (!response)
      return setErrors((prev) => [
        ...prev,
        { message: "server not responding" },
      ]);
    console.log(response.posts);

    return setNoticeToStudents(response.posts || []);
  };
  //! functions - end
  //!

  //!
  //! useEffects - start
  useEffect(() => {
    initializeOfficialPressReleases();
    initializeNoticeToStudents();
  }, []);
  //! useEffects - end
  //!

  return (
    <Main>
      <>
        <ScrollToTop />
        <CustomHead />
        <div className={styles.landingPageWrapper}>
          <Hero />
          <SchoolPresentation />
          <Partners />
          <TheyTalkAboutUs />
          {officialPressReleases.length ? (
            <div className={styles.sliderWrapper}>
              <CustomCardOneSlider
                title="Communiqués Officiels"
                posts={officialPressReleases}
              />
            </div>
          ) : null}
          <OurCourses />
          {noticeToStudents.length ? (
            <div className={styles.sliderWrapper}>
              <CustomCardOneSlider
                title="Avis Aux Etudiants"
                posts={noticeToStudents}
              />
            </div>
          ) : null}
          <WordFromTheDirector />
        </div>
      </>
    </Main>
  );
};

export default Home;
