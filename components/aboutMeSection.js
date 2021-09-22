import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

export default function AboutMeSection() {
  return (
    <section id="aboutme" className="flex flex-col h-full">
      <h1 className="self-center text-3xl lg:text-4xl my-16 pt-0 font-bold">
        About Me
      </h1>

      {/* <div className="absolute font-bold h-full w-full flex flex-col justify-between">
          <div className="flex realative">
            <p className="left-1/4 absolute text-xl">JS</p>
            <p className="left-3/4 absolute text-xl">React</p>
          </div>
          <div className="flex relative">
            <p className="left-0 absolute text-2xl">HTML5</p>
            <p className="left-2/4 absolute text-2xl">CSS3</p>
            <p className="right-0 absolute text-2xl">TypeScript</p>
          </div>
          <div className="flex relative">
            <p className="left-1/4 absolute text-xl">Git</p>
            <p className="left-3/4 absolute text-2xl">NextJs</p>
          </div>
        </div> */}
      <div className="px-0 pt-4 sm:px-8 lg:px-24">
        <Card className="mb-0">
          <p className="text-start lg:text-center lg:mx-24">
            Hi, I am Vaibhav a passionate Frontend and an unoriented language
            programmer. Currently working as a Frontend Developer at Klinify. I
            spend my time understanding the code of the various enjoyable open
            source projects. I like to break things to make them better and
            performant.
          </p>
          <div className="flex flex-wrap flex-row justify-center pt-12 gap-12 text-gray-500">
            <FontAwesomeIcon icon={["fab", "react"]} size="3x" />
            <FontAwesomeIcon icon={["fab", "js"]} size="3x" />
            <FontAwesomeIcon icon={["fab", "html5"]} size="3x" />
            <FontAwesomeIcon icon={["fab", "css3"]} size="3x" />
          </div>
        </Card>
      </div>
    </section>
  );
}
