import image3 from "../assets/Container (2).svg";
import image4 from "../assets/Container (3).svg";
import image5 from "../assets/Container (4).svg";
import image6 from "../assets/Container (5).svg";
export default function SectionFour() {
  return (
    <div className="bg-[#F8FAFC] border border-[#F1F5F9] ">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 py-16 lg:py-20">
        <div className="flex items-center flex-col mb-10">
          <h1 className="font-jsans font-bold text-[30px] lg:text-[38px] leading-[37.5px] lg:leading-[47.5px] text-center text-[#0F172B] mb-3">
            Why Learn With Us
          </h1>
          <h3 className="font-jsans font-normal text-[16px] leading-6.5 text-[#62748E] text-center max-w-xl ">
            Everything we build is designed around one goal — helping you get
            results you can use.
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-[14px] border border-[#E2E8F0] shadow-2xs p-6 flex flex-col items-center">
            <img src={image3} className="mb-4 w-12" />
            <h2 className="font-jsans font-bold text-[16px] leading-6 text-center text-[#0F172B] mb-2">
              Practical Projects
            </h2>
            <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-center text-[#62748E]">
              Every course includes real-world projects you can add directly to
              your portfolio.
            </p>
          </div>
          <div className="bg-white rounded-[14px] border border-[#E2E8F0] shadow-2xs p-6 flex flex-col items-center">
            <img src={image4} className="mb-4 w-12" />
            <h2 className="font-jsans font-bold text-[16px] leading-6 text-center text-[#0F172B] mb-2">
              Expert Instructors
            </h2>
            <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-center text-[#62748E]">
              Learn from professionals with years of industry and teaching
              experience.
            </p>
          </div>
          <div className="bg-white rounded-[14px] border border-[#E2E8F0] shadow-2xs p-6 flex flex-col items-center">
            <img src={image5} className="mb-4 w-12" />
            <h2 className="font-jsans font-bold text-[16px] leading-6 text-center text-[#0F172B] mb-2">
              Career-Focused Content
            </h2>
            <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-center text-[#62748E]">
              Curriculum designed around the skills that employers and clients
              actually need.
            </p>
          </div>
          <div className="bg-white rounded-[14px] border border-[#E2E8F0] shadow-2xs p-6 flex flex-col items-center">
            <img src={image6} className="mb-4 w-12" />
            <h2 className="font-jsans font-bold text-[16px] leading-6 text-center text-[#0F172B] mb-2">
              Flexible Learning
            </h2>
            <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-center text-[#62748E]">
              Study at your own pace with structured sessions and clear learning
              objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
