import { IoIosArrowRoundForward } from "react-icons/io";

export default function SectionSix() {
  return (
    <div className="w-full bg-violet">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 py-16 lg:py-20 flex flex-col items-center">
        <h2 className="font-jsans font-extrabold text-[30px] lg:text-[36px] leading-[37.5px] lg:leading-11.25 text-center mb-4 text-white">
          Ready to Start Learning?
        </h2>
        <p className="font-jsans font-normal text-[18px] leading-[29.25px] mb-8 text-center text-[#E0E7FF] max-w-xl">
          Explore our available courses and choose the learning path that fits
          your goals.
        </p>
        <button className="py-3.5 px-7 bg-white font-jsans font-bold text-[16px] leading-6 text-violet flex gap-2 rounded-[10px] items-center">
          Browse All Courses <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
}
