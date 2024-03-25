import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

export default function AboutMeSection() {
  return (
    <section id="aboutme" className="flex flex-col h-full">
      <h1 className="self-center text-3xl lg:text-4xl xl:text-5xl py-12 font-bold mt-4 sm:mt-8 xl:mt-16 pt-0 font-bold">
        About Me
      </h1>
      <div className="px-0 sm:px-8 lg:px-32">
        <Card className="mb-0">
          <p className="text-start lg:text-center lg:mx-24">
            Hi, I am Vaibhav, a passionate Frontend and an unoriented language
            programmer. I spend my time understanding the code of the various enjoyable open
            source projects. I like to break things to make them better and
            performant. My hobby also includes paragliding, mountaineering and travelling.
          </p>
          <div className="flex justify-center">
            <div className="grid grid-rows-1 grid-cols-4 justify-between sm:justify-center pt-12 gap-8 sm:gap-16 text-gray-500">
              <FontAwesomeIcon icon={["fab", "react"]} size="3x" />
              <FontAwesomeIcon icon={["fab", "js"]} size="3x" />
              <FontAwesomeIcon icon={["fab", "html5"]} size="3x" />
              <FontAwesomeIcon icon={["fab", "css3"]} size="3x" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
