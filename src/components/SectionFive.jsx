import { IoIosArrowRoundForward } from "react-icons/io";
import ahmedMohamed from "../assets/Image (Ahmed Mohamed) (1).svg";
import { IoBookOutline } from "react-icons/io5";
import { FiAward } from "react-icons/fi";
import saraAli from "../assets/Image (Sara Ali) (1).svg";
import omar from "../assets/Image (Omar Hassan).svg";
export default function SectionFive() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <h1 className="font-jsans font-bold text-[30px] lg:text-[38px] leading-[37.5px] lg:leading-[47.5px] text-[#0F172B] mb-4 lg:mb-0">
            Learn From Experienced Instructors
          </h1>
          <button className="flex gap-2 items-center py-2.5 px-5 rounded-[10px] border border-[#C6D2FF] font-jsans font-semibold text-[14px] leading-5 text-violet w-full lg:w-auto justify-center">
            All Instructors{" "}
            <IoIosArrowRoundForward className="font-extrabold text-[20px]" />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-[14px] border border-[#E2E8F0] shadow-2xs overflow-hidden">
            <div className="bg-[#EEF2FF] pt-8 flex flex-col items-center">
              <img src={ahmedMohamed} className="mb-3" />
              <h3 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B] text-center">
                Ahmed Mohamed
              </h3>
              <h2 className="font-jsans font-semibold text-[14px] leading-5 text-violet text-center mb-5">
                WordPress Developer & Instructor
              </h2>
            </div>
            <div className="p-6">
              <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-[#62748E] mb-4">
                Ahmed is a WordPress developer and instructor with seven years
                of experience building dynamic websites and teaching practical
                web
              </p>
              <div className="flex gap-1.5 mb-4 flex-wrap">
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  WordPress
                </h5>
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  Elementor
                </h5>
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  ACF
                </h5>
              </div>
              <div className="flex justify-between mb-5">
                <h3 className="flex gap-1.5 items-center font-jsans font-normal text-[12px] leading-4 text-[#90A1B9]">
                  <IoBookOutline />3 courses
                </h3>
                <h3 className="flex gap-1.5 items-center font-jsans font-normal text-[12px] leading-4 text-[#90A1B9]">
                  <FiAward />7 yrs exp.
                </h3>
              </div>
              <button className="py-2.75 rounded-[10px] font-jsans font-semibold text-[14px] leading-5 text-center text-violet border border-[#C6D2FF] w-full mb-[31.28px]">
                View Profile
              </button>
            </div>
          </div>
          <div className="rounded-[14px] border border-[#E2E8F0] shadow-2xs overflow-hidden">
            <div className="bg-[#EEF2FF] pt-8 flex flex-col items-center">
              <img src={saraAli} className="mb-3" />
              <h3 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B] text-center">
                Sara Ali
              </h3>
              <h2 className="font-jsans font-semibold text-[14px] leading-5 text-violet text-center mb-5">
                Senior Frontend Developer
              </h2>
            </div>
            <div className="p-6">
              <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-[#62748E] mb-4">
                Sara is a senior frontend developer with six years of experience
                in modern web technologies. She specializes in building
              </p>
              <div className="flex gap-1.5 mb-4 flex-wrap">
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  HTML
                </h5>
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  CSS
                </h5>
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  JavaScript
                </h5>
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  React
                </h5>
              </div>
              <div className="flex justify-between mb-5">
                <h3 className="flex gap-1.5 items-center font-jsans font-normal text-[12px] leading-4 text-[#90A1B9]">
                  <IoBookOutline />2 courses
                </h3>
                <h3 className="flex gap-1.5 items-center font-jsans font-normal text-[12px] leading-4 text-[#90A1B9]">
                  <FiAward />6 yrs exp.
                </h3>
              </div>
              <button className="py-2.75 rounded-[10px] font-jsans font-semibold text-[14px] leading-5 text-center text-violet border border-[#C6D2FF] w-full mb-[31.28px]">
                View Profile
              </button>
            </div>
          </div>
          <div className="rounded-[14px] border border-[#E2E8F0] shadow-2xs overflow-hidden">
            <div className="bg-[#EEF2FF] pt-8 flex flex-col items-center">
              <img src={omar} className="mb-3" />
              <h3 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B] text-center">
                Omar Hassan
              </h3>
              <h2 className="font-jsans font-semibold text-[14px] leading-5 text-violet text-center mb-5">
                Business & Leadership Trainer
              </h2>
            </div>
            <div className="p-6">
              <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-[#62748E] mb-4">
                Omar is a certified business and leadership trainer with nine
                years of experience working with teams and organizations across
                the region.
              </p>
              <div className="flex gap-1.5 mb-4 flex-wrap">
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  Leadership
                </h5>
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  Communication
                </h5>
                <h5 className="py-1 px-2.5 bg-[#F1F5F9] border border-[#E2E8F0] font-jsans font-medium text-[12px] leading-4 rounded-lg">
                  Entrepreneurship
                </h5>
              </div>
              <div className="flex justify-between mb-5">
                <h3 className="flex gap-1.5 items-center font-jsans font-normal text-[12px] leading-4 text-[#90A1B9]">
                  <IoBookOutline />3 courses
                </h3>
                <h3 className="flex gap-1.5 items-center font-jsans font-normal text-[12px] leading-4 text-[#90A1B9]">
                  <FiAward />7 yrs exp.
                </h3>
              </div>
              <button className="py-2.75 rounded-[10px] font-jsans font-semibold text-[14px] leading-5 text-center text-violet border border-[#C6D2FF] w-full mb-[31.28px]">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
