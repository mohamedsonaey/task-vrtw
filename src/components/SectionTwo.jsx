import { MdCode } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { LuBriefcase } from "react-icons/lu";
import { LuZap } from "react-icons/lu";
export default function SectionTwo() {
  return (
    <div className="w-full bg-[#F8FAFC] border border-y-[#F1F5F9]">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 py-12">
        <p className="font-jsans font-bold text-[11px] leading-[16.5px] tracking-[1.1px] text-[#90A1B9] text-center mb-6">
          Browse by Category
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <h5 className="flex gap-2 items-center font-jsans font-bold text-[14px] leading-5 py-2.5 px-4 rounded-[14px] border border-[#EDE9FE] bg-[#F5F3FF] text-[#7F22FE]">
            <MdCode /> Frontend <span className="opacity-50">2</span>
          </h5>
          <h5 className="flex gap-2 items-center font-jsans font-bold text-[14px] leading-5 py-2.5 px-4 rounded-[14px] border border-[#DFF2FE] bg-[#F0F9FF] text-[#0084D1]">
            <TbWorld /> WordPress <span className="opacity-50">2</span>
          </h5>
          <h5 className="flex gap-2 items-center font-jsans font-bold text-[14px] leading-5 py-2.5 px-4 rounded-[14px] border border-[#FFEDD4] bg-[#FFF7ED] text-[#F54900]">
            <TbUsers /> Leadership <span className="opacity-50">1</span>
          </h5>
          <h5 className="flex gap-2 items-center font-jsans font-bold text-[14px] leading-5 py-2.5 px-4 rounded-[14px] border border-[#D0FAE5] bg-[#ECFDF5] text-[#009966]">
            <LuBriefcase /> Entrepreneurship{" "}
            <span className="opacity-50">1</span>
          </h5>
          <h5 className="flex gap-2 items-center font-jsans font-bold text-[14px] leading-5 py-2.5 px-4 rounded-[14px] border border-[#E0E7FF] bg-[#EEF2FF] text-violet">
            <LuZap /> Backend <span className="opacity-50">0</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
