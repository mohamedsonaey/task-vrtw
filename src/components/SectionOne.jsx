import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import image from "../assets/Image (Students collaborating around a laptop).svg";
import image2 from "../assets/Container (1).svg";
export default function SectionOne() {
  return (
    <div className="bg-white flex justify-center">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 lg:py-24 py-16 flex md:flex-row flex-col gap-12 justify-between">
        <div className="flex items-start lg:w-136 flex-col">
          <div className="flex gap-2 px-3 py-1.5 rounded-2xl bg-[#EEF2FF] border broder-2 border-[#E0E7FF] mb-6">
            <FaStar className="text-violet" />
            <h2 className="font-jsans font-bold text-[12px] leading-4 text-violet">
              Trusted by 700+ students
            </h2>
          </div>
          <h1 className="font-jsans font-extrabold lg:text-[52px] text-[40px] lg:leading-[58.24px] leading-11.25 tracking-[-1px] lg:tracking-[-1.3px] mb-5">
            Learn Skills That Move Your Career Forward
          </h1>
          <p className="font-jsans font-normal text-[18px] leading-7.5 text-[#62748E] mb-8">
            Practical technology and business courses delivered by experienced
            instructors and designed around real-world projects.
          </p>
          <div className="flex flex-col lg:flex-row gap-3 mb-16.25">
            <button className="py-3 px-6 bg-violet rounded-[10px] font-jsans font-semibold text-[16px] leading-6 text-white flex items-center gap-2">
              Explore Courses{" "}
              <IoIosArrowRoundForward className="font-extrabold text-[20px]" />{" "}
            </button>
            <button className="py-3 px-6 bg-white rounded-[10px] font-jsans font-semibold text-[16px] leading-6 text-violet border border-[#C6D2FF]">
              Meet Our Instructors
            </button>
          </div>
          <div className="flex gap-8">
            <div>
              <h2 className="font-extrabold font-jsans text-[24px] leading-8 text-[#0F172B]">
                20+
              </h2>
              <p className="font-jsans font-normal text-[12px] leading-4 text-[#62748E]">
                Practical Courses
              </p>
            </div>
            <div>
              <h2 className="font-extrabold font-jsans text-[24px] leading-8 text-[#0F172B]">
                10+
              </h2>
              <p className="font-jsans font-normal text-[12px] leading-4 text-[#62748E]">
                Expert Instructors
              </p>
            </div>
            <div>
              <h2 className="font-extrabold font-jsans text-[24px] leading-8 text-[#0F172B]">
                700+
              </h2>
              <p className="font-jsans font-normal text-[12px] leading-4 text-[#62748E]">
                Students Enrolled
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center  flex-col relative">
          <img
            src={image}
            className="rounded-2xl w-full h-auto lg:w-136 object-cover"
          />
          <div className="flex py-4.5 px-4 rounded-[14px] bg-white  shadow-2xl shadow-[#0000001A] gap-3 absolute bottom-4 -left-4 border border-[#F1F5F9] ">
            <img src={image2} />
            <div className="">
              <h2 className="font-jsans font-bold text-[14px] leading-5 text-[#0F172B]">
                Project-Based Learning
              </h2>
              <h3 className="font-jsans font-normal text-[12px] leading-4 text-[#90A1B9]">
                Build real things from day one
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
