"use client";
import { FC } from "react";
import CountUp from "react-countup";

interface Count {
  num: number;
  text: string;
}

const stats: Count[] = [
  { num: 4, text: "Years of experience" },
  { num: 30, text: "Projects completed" },
  { num: 10, text: "Tecnologies mastered" },
  { num: 500, text: "Code commits" },
];

export const Stats: FC = ({}) => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item, i: number) => {
            return (
              <div
                key={i}
                className="flex-1 flex items-center justify-center gap-4 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
