import logo from "../assets/Container.svg";
import twitter from "../assets/Link - Social media.svg";
import facebook from "../assets/Link - Social media (1).svg";
import instgram from "../assets/Link - Social media (2).svg";
import youtube from "../assets/Link - Social media (3).svg";
import { CiMail } from "react-icons/ci";
export default function Footer() {
  return (
    <div className="w-full bg-[#0F172B]">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0 py-14 ">
        <div className=" border-b border-[#1D293D] mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex gap-2 items-center mb-3">
                <img src={logo} className="w-8" />
                <h2 className="font-jsans font-bold text-[18px] leading-7 text-white">
                  SkillUp Academy
                </h2>
              </div>
              <p className="font-jsans font-normal text-[14px] leading-[22.75px] text-[#90A1B9] mb-5">
                Practical technology and business courses built around
                real-world projects, delivered by experienced instructors.
              </p>
              <div className="flex gap-2.5">
                <img src={twitter} />
                <img src={facebook} />
                <img src={instgram} />
                <img src={youtube} />
              </div>
            </div>
            <div>
              <h2 className="font-jsans font-bold text-[12px] leading-4 tracking-[1.2px] uppercase text-white mb-5">
                Quick Links
              </h2>
              <nav className="flex gap-[14.75px] flex-col">
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Home
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Courses
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Instructors
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  About Us
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Contact
                </h3>
              </nav>
            </div>
            <div>
              <h2 className="font-jsans font-bold text-[12px] leading-4 tracking-[1.2px] uppercase text-white mb-5">
                Categories
              </h2>
              <div className="flex gap-[14.75px] flex-col">
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Frontend
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  WordPress
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Backend
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Leadership
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9]">
                  Entrepreneurship
                </h3>
              </div>
            </div>
            <div>
              <h2 className="font-jsans font-bold text-[12px] leading-4 tracking-[1.2px] uppercase text-white mb-5">
                Contact
              </h2>
              <div className="flex gap-[14.75px] flex-col">
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#90A1B9] flex gap-2">
                  <CiMail />
                  info@skillupacademy.com
                </h3>
                <h3 className="font-jsans font-medium text-[14px] leading-4 text-[#62748E]">
                  Available Sun – Thu, 9am – 5pm
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center lg:justify-between gap-3">
          <p className="font-jsans font-normal text-[12px] leading-4 text-[#45556C]">
            © 2026 SkillUp Academy. All rights reserved.
          </p>
          <div className="flex gap-5">
            <p className="font-jsans font-normal text-[12px] leading-4 text-[#45556C] lg:text-start text-center">
              Privacy Policy
            </p>
            <p className="font-jsans font-normal text-[12px] leading-4 text-[#45556C] lg:text-start text-center">
              Terms of Use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
