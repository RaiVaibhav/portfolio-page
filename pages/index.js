import Head from "next/head";

import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { ProjectSection } from "../components/projectsSection";
import AboutMeSection from "../components/aboutMeSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Vaibhav Rai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hi, I am a Frontend Developer" />
        <meta property="og:title" content="Vaibhav" />
        <meta
          property="og:description"
          content="Hi, I am a Senior Frontend Developer"
        />
        <meta
          property="og:image"
          content="https://bafkreih4oi4uguonkhaujiriixrvq2wv2otm62upufiwqgnkrm5fuxgebm.ipfs.dweb.link/"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="500" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="generative viabhav pic" />
        <link
          rel="icon"
          href="https://bafkreih4oi4uguonkhaujiriixrvq2wv2otm62upufiwqgnkrm5fuxgebm.ipfs.dweb.link/"
        />
      </Head>
      <NavBar />
      <HomeSection />
      <AboutMeSection />
      <ProjectSection />
    </>
  );
}
