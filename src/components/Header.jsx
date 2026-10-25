import logo from "../assets/Container.svg";
import { IoMenu } from "react-icons/io5";
let linkStyle =
  "font-jsans  font-semibold text-[14px] leading-5 text-[#45556C] hover:text-violet transition cursor-pointer ";
export default function Header() {
  return (
    <div className="bg-white flex justify-center border border-b-[#E2E8F0]">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 py-4 flex justify-between items-center">
        <div className="logo flex items-center gap-2">
          <img src={logo} className="w-8 h-8" />
          <h2 className="font-jsans font-bold text-[20px] leading-7 text-[#0F172B]">
            SkillUp <span className="text-violet">Academy</span>
          </h2>
        </div>
        <nav className="gap-7 items-center hidden lg:flex">
          <h3 className={linkStyle}>Home</h3>
          <h3 className={linkStyle}>Courses</h3>
          <h3 className={linkStyle}>Instructors</h3>
          <h3 className={linkStyle}>About</h3>
          <h3 className={linkStyle}>Contact</h3>
        </nav>
        <button className="py-2.5 px-5 bg-violet rounded-[10px] font-semibold text-[14px] leading-5 text-white hidden lg:flex">
          Explore Courses
        </button>
        <IoMenu className="flex md:hidden" />
      </div>
    </div>
  );
}
