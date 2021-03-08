import InfoBar from "@/components/InfoBar";
import InfoBox from "@/components/InfoBox";
import Logo from "@/components/Logo";
import PickCalendar from "@/components/PickCalendar";
import LinkBox from "@/components/LinkBox";
import ViewSchedule from "@/components/ViewSchedule";
import DateContext from "@/contexts/DateContext";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
import ColorBox from "@/components/ColorBox";

const HomePage: NextPage = () => {
  const [date, setDate] = useState(new Date(2013, 8, 2));

  return (
    <DateContext.Provider value={{ selectedDate: date, setDate }}>
      <NextSeo title="VT-Agenda" />
      <div className="min-h-screen flex justify-center items-center">
        <div
          className="flex flex-col w-full xl:container bg-main px-2 lg:px-4 pt-2 xl:rounded-xl overflow-hidden xl:shadow-MAIN xl:border-2 xl:border-border"
          style={{ minHeight: "632px" }}
        >
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/3">
              <Logo />
            </div>
            <div className="w-full max-w-sm sm:max-w-none sm:w-2/3 flex justify-center sm:justify-end sm:pl-12">
              <InfoBar />
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row my-4 xl:items-stretch flex-wrap">
            <div className="flex flex-col xl:flex-row w-full sm:w-1/2 xl:w-2/3 px-2 order-2 sm:order-1 mt-6 sm:mt-0">
              <div className="flex-1 xl:w-1/2 flex flex-col space-y-4 order-2 xl:order-1 mt-6 xl:mt-0">
                <InfoBox />
                <LinkBox />
                <ColorBox />
              </div>
              <div className="flex-1 xl:w-1/2 flex flex-col space-y-4 order-1 xl:order-2">
                <PickCalendar />
              </div>
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/3 order-1 sm:order-2">
              <div className="px-2">
                <ViewSchedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DateContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
