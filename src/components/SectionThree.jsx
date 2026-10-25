import { IoIosArrowRoundForward } from "react-icons/io";
import WordPress from "../assets/Image (WordPress Website Development).svg";
import { TbClockHour4 } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import ahmed from "../assets/Image (Ahmed Mohamed).svg";
import website from "../assets/Image (Dynamic Websites with ACF).svg";
import front from "../assets/Image (Frontend Development Fundamentals).svg";
import sara from "../assets/Image (Sara Ali).svg";
export default function SectionThree() {
  return (
    <div className=" bg-white">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 py-16 lg:py-20">
        <div className="flex justify-between items-end mb-10 flex-col lg:flex-row gap-4 lg:gap-0">
          <div>
            <h1 className="font-jsans font-bold text-[30px] lg:text-[38px] leading-[37.5px] lg:leading-[47.5px] text-[#0F172B] mb-3">
              Featured Courses
            </h1>
            <p className="font-jsans font-normal text-[16px] leading-6.5 text-[#62748E]">
              Explore practical courses designed to help you build real skills.
            </p>
          </div>
          <button className="py-2.5 px-4 bg-white border border-[#C6D2FF] rounded-[10px] font-jsans font-semibold text-[14px] leading-4 text-violet flex items-start w-full lg:w-auto justify-center">
            View All Courses{" "}
            <IoIosArrowRoundForward className="font-extrabold text-[20px]" />
          </button>
        </div>
        <div className=" gap-6 grid grid-cols-1 lg:grid-cols-3">
          <div className="rounded-[14px] overflow-hidden border border-[#E2E8F0] shadow-[#0000001A]">
            <img src={WordPress} className="w-full h-44 object-cover" />
            <div className="p-5">
              <div className="flex gap-2 mb-4">
                <h4 className="py-0.5 px-2.5 rounded-2xl bg-[#DFF2FE] font-jsans font-semibold text-[12px] leading-4 text-[#0069A8]">
                  WordPress
                </h4>
                <h4 className="py-0.5 px-2.5 rounded-2xl bg-[#DCFCE7] font-jsans font-semibold text-[12px] leading-4 text-[#008236]">
                  Beginner
                </h4>
              </div>
              <h2 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B] mb-2">
                WordPress Website Development
              </h2>
              <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-[#62748E] mb-4">
                Build complete, professional WordPress websites from scratch.
                Learn installation, theme
              </p>
              <div className="flex gap-4 mb-8">
                <h5 className="flex gap-0.5 font-jsans font-normal text-[12px] leading-4 text-[#90A1B9] items-center">
                  <TbClockHour4 /> 24 Hours
                </h5>
                <h5 className="flex gap-0.5 font-jsans font-normal text-[12px] leading-4 text-[#90A1B9] items-center">
                  <IoBookOutline /> 8 sessions
                </h5>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={ahmed} />
                  <p className="font-jsans font-medium text-[12px] leading-4 text-[#45556C]">
                    Ahmed Mohamed
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <h4 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B]">
                    $120
                  </h4>
                  <button className="py-1.5 px-3 rounded-[10px] bg-violet text-white">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[14px] overflow-hidden border border-[#E2E8F0] shadow-[#0000001A]">
            <img src={website} className="w-full h-44 object-cover" />
            <div className="p-5">
              <div className="flex gap-2 mb-4">
                <h4 className="py-0.5 px-2.5 rounded-2xl bg-[#DFF2FE] font-jsans font-semibold text-[12px] leading-4 text-[#0069A8]">
                  WordPress
                </h4>
                <h4 className="py-0.5 px-2.5 rounded-2xl bg-[#FEF3C6] font-jsans font-semibold text-[12px] leading-4 text-[#BB4D00]">
                  Intermediate
                </h4>
              </div>
              <h2 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B] mb-2">
                Dynamic Websites with ACF
              </h2>
              <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-[#62748E] mb-4">
                Master Advanced Custom Fields to create flexible, data-driven
                WordPress sites. Build
              </p>
              <div className="flex gap-4 mb-8">
                <h5 className="flex gap-0.5 font-jsans font-normal text-[12px] leading-4 text-[#90A1B9] items-center">
                  <TbClockHour4 /> 18 Hours
                </h5>
                <h5 className="flex gap-0.5 font-jsans font-normal text-[12px] leading-4 text-[#90A1B9] items-center">
                  <IoBookOutline /> 6 sessions
                </h5>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={ahmed} />
                  <p className="font-jsans font-medium text-[12px] leading-4 text-[#45556C]">
                    Ahmed Mohamed
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <h4 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B]">
                    $100
                  </h4>
                  <button className="py-1.5 px-3 rounded-[10px] bg-violet text-white">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[14px] overflow-hidden border border-[#E2E8F0] shadow-[#0000001A]">
            <img src={front} className="w-full h-44 object-cover" />
            <div className="p-5">
              <div className="flex gap-2 mb-4">
                <h4 className="py-0.5 px-2.5 rounded-2xl bg-[#EDE9FE] font-jsans font-semibold text-[12px] leading-4 text-[#7008E7]">
                  Frontend
                </h4>
                <h4 className="py-0.5 px-2.5 rounded-2xl bg-[#DCFCE7] font-jsans font-semibold text-[12px] leading-4 text-[#008236]">
                  Beginner
                </h4>
              </div>
              <h2 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B] mb-2">
                Frontend Development Fundamentals
              </h2>
              <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-[#62748E] mb-4">
                Start your web development journey with HTML, CSS, and
                JavaScript. Build real projects and
              </p>
              <div className="flex gap-4 mb-8">
                <h5 className="flex gap-0.5 font-jsans font-normal text-[12px] leading-4 text-[#90A1B9] items-center">
                  <TbClockHour4 /> 30 Hours
                </h5>
                <h5 className="flex gap-0.5 font-jsans font-normal text-[12px] leading-4 text-[#90A1B9] items-center">
                  <IoBookOutline /> 10 sessions
                </h5>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={sara} />
                  <p className="font-jsans font-medium text-[12px] leading-4 text-[#45556C]">
                    Sara Ali
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <h4 className="font-jsans font-bold text-[16px] leading-6 text-[#0F172B]">
                    $140
                  </h4>
                  <button className="py-1.5 px-3 rounded-[10px] bg-violet text-white">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
