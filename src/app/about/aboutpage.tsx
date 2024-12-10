'use client'

import { GoArrowRight } from "react-icons/go";
import Button from "@/components/button/Button";
import Image from "next/image";
import SectionCard from "@/components/card/sectioncard";
import Icons from "@/components/icon/Icon";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-left");
          }
        });
      },
      { threshold: 0.5 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const items = [
    { icon: "game-icons:frozen-block", label: "Frozen foods" },
    { icon: "healthicons:animal-cow", label: "Unit of Cattle" },
    { icon: "jam:eggs-f", label: "Eggs" },
    { icon: "cbi:chicken", label: "Chicken" },
  ];

  return (
    <div>
      {/* introduction */}
      <div className="bg-gradient-to-b from-green_primary to-white p-7">
        <div className="p-8 flex items-center justify-center text-5xl font-serif font-extrabold bg-gradient-to-t from-yellow_primary to-yellow-100 bg-clip-text text-transparent ">
          Ayawa farms
        </div>
        <div className="text-3xl font-bold text-green_primary flex items-center justify-center font-serif">
          Heart of farming
        </div>
        <div className="hidden text-3xl font-semibold text-green_primary flex items-center justify-center font-serif">
          Where nature meets innovation in sustinable farming
        </div>
      </div>

      {/* about */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 p-20">
        <div className="space-y-1">
          <div className="space-y-2">
            <h1 className="text-4xl text-green_primary">ABOUT</h1>
            <h3 className="text-4xl text-lime-500 font-light">AYAWA FARMS</h3>
            <hr className="bg-green_primary border w-100 rounded border-green_primary h-[1px] my-2" />
          </div>

          <p className="text-slate-800 text-lg space-y-2 pt-5">
            Farming and agriculture is the backbone of our society . Ayawa farms
            was founded in the year 2013 , it has contributed to society by
            producing the fresh farm produce and excellent services.
            Professionals are the ones handling the crops and animals in the
            farm . The production of frozen foods are also carried out in a
            sanitized environment .
          </p>
          <div className="pt-4">
            <Button
              text={"Read more"}
              href={"/my-app/src/app/about/page.tsx"}
              variant={"transparent"}
              size={"medium"}
              icon={<GoArrowRight />}
            ></Button>
          </div>
          <div></div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={"/about.jpg"} alt={""} width={200} height={200} />
        </div>
      </div>

      {/* products */}
      <div className="p-6 bg-green_primary">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => { elementsRef.current[index] = el }}
              className="relative md-12 px-3 lg:mb-0"
            >
              <div className="mb-2 flex justify-center opacity-0 transition-opacity duration-[800ms]">
                <Icons width={90} icon={item.icon} label={item.label} />
              </div>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-70 dark:via-neutral-400 lg:block"></div>
            </div>
          ))}
        </div>
      </div>

      {/* major products */}
      <div className="flex items-center justify-center">
        <span className="text-yellow_primary p-5 pt-20 font-medium text-2xl tracking-widest">
          What we offer
        </span>
      </div>
      <div className="md:text-5xl space-y-2 text-green_primary tracking-widest p-5 pb-6">
        <span className="flex items-center justify-center">
          Healthy and Fresh
        </span>
        <span className="flex items-center justify-center">farm goods</span>
        <span className="flex items-center justify-center">and services</span>
      </div>

      <div className="p-10 justify-center flex items-center">
        <div className="grid grid-cols-1 md:space-x-3 md:grid-cols-4 gap-5">
          <SectionCard
            title={"Poultry"}
            text={"Learn More"}
            description={
              "We specialize in producing and processing poultry by-products, including chicken meat and eggs, to efficiently meet local demand."
            }
            variant={"transparent"}
            size={"small"}
            icon={"emojione-v1:chicken"}
          />
          <SectionCard
            title={"Cattle Rearing"}
            text={"Learn More"}
            description={
              "We produce and process poultry by-products, such as chicken meat and eggs, while also rearing cattle for premium meat and dairy. Our focus is on meeting local demand efficiently."
            }
            variant={"transparent"}
            size={"small"}
            icon={"noto:cow"}
          />
          <SectionCard
            title={"Egg Supply"}
            text={"Learn More"}
            description={
              "We ensure a consistent supply of high-quality eggs to meet local demand. Our focus is on freshness and reliability in every delivery."
            }
            variant={"transparent"}
            size={"small"}
            icon={"fluent-emoji:egg"}
          />
          <SectionCard
            title={"Seminar"}
            text={"Learn More"}
            description={
              "We organize seminars to educate and empower individuals on poultry by-product production and processing. Our goal is to strengthen local supply chains and enhance community-driven solutions for meeting demand."
            }
            variant={"transparent"}
            size={"small"}
            icon={"streamline:global-learning-solid"}
          />
        </div>
      </div>
    </div>
  );
}
