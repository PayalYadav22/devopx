import Image from "next/image";
import Header from "@/component/Header";
import Card from "@/component/card/Card";
import CardHeader from "@/component/card/CardHeader";

import BookImage from "@/assets/images/book-cover.png";
import ToolBox from "@/component/ToolBox";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

import { toolboxItems, hobbies } from "@/data/data";

const About = () => {
  return (
    <div className="py-16 lg:px-30">
      <Header
        eyebrow="About Me"
        title="A Journey Through My World"
        description="Discover the essence of who I am—my passions, my purpose, and the inspirations that fuel my creativity."
      />
      <div className="px-3 mt-8 flex flex-col gap-8 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          {/* Books Card */}
          <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Step into the stories and ideas that have shaped my thinking,
              sparked my creativity, and broadened my perspective."
            />
            <div className="w-40 mx-auto">
              <Image
                src={BookImage}
                alt="Atomic Habits"
                width={200}
                height={200}
                className="w-full h-auto max-w-xs lg:max-w-xl sm:max-w-sm md:max-w-md"
              />
            </div>
          </Card>

          {/* My Tools Card */}
          <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Discover the technologies and frameworks I rely on to build
              seamless, engaging, and impactful digital experiences."
              className="px-6 pt-6"
            />
            <ToolBox items={toolboxItems} className="ml-5" />
            <ToolBox
              items={toolboxItems}
              className="mt-3 ml-5"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-2">
          {/* My Hobbies Card */}
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-1 lg:order-2">
            <CardHeader
              title="My Hobbies"
              description="Discover the technologies and frameworks I rely on to build
              seamless, engaging, and impactful digital experiences."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="inline-flex items-center flex-wrap gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="text-sm text-gray-950 font-poppins">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Map Card */}
          <Card className="relative p-0 h-[320px] md:col-span-2 lg:col-span-1 lg:order-1">
            <Image
              src={mapImage}
              height={300}
              width={300}
              alt="Map"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content[''] after:absolute after:inset-0 after:outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image
                src={smileMemoji}
                alt="Map User"
                height={80}
                width={80}
                className="size-20"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default About;
