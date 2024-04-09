"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metrics: "Projects",
    value: "5",
    postfix: "+",
  },

  // {
  //   prefix: "~",
  //   metrics: "Users",
  //   value: "100,000",
  // },

  // {
  //   metrics: "Awards",
  //   value: "10+",
  // },
  {
    metrics: "Years",
    value: "3+",
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 justify-between flex flex-row items-center">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metrics}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
