import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { CustomError } from "Types/api";
import { getNoticeToStudents, getOfficialPressReleases } from "api/home";

//! jsx
import Main from "layouts/Main";

import { CustomCardOneType } from "components/cards/CustomCardOne";
import CustomCardOneSlider from "components/sliders/CustomCardOneSlider";
import WordFromTheDirector from "components/pages/home/WordFromTheDirector";
import SchoolPresentation from "components/pages/home/SchoolPresentation";
import TheyTalkAboutUs from "components/pages/home/TheyTalkAboutUs";
import OurCourses from "components/pages/home/OurCourses";
import Partners from "components/pages/home/Partners";
import Hero from "components/pages/home/Hero";

import styles from "styles/pages/index.module.scss";
const CustomHead = () => (
  <Head>
    <title>HOME - ENSAM CASA</title>
    <meta name="description" content="Generated by create next app" />
  </Head>
);
const Home: NextPage = () => {
  const [officialPressReleases, setOfficialPressReleases] = useState<
    CustomCardOneType[]
  >([]);
  const [noticeToStudents, setNoticeToStudents] = useState<CustomCardOneType[]>(
    []
  );
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
    return setOfficialPressReleases(response);
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
    return setNoticeToStudents(response);
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
                cards={officialPressReleases}
              />
            </div>
          ) : null}
          <OurCourses />
          {noticeToStudents.length ? (
            <div className={styles.sliderWrapper}>
              <CustomCardOneSlider
                title="Avis Aux Etudiants"
                cards={noticeToStudents}
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
