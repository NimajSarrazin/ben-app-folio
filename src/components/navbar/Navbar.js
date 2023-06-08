import { dataNavLinks } from "@/data/dataNavLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";

function scrollToSection(targetSection, duration) {
  const targetElement = document.querySelector(targetSection);
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const currentTime = timestamp - startTime;
    const scrollProgress = Math.min(currentTime / duration, 1);
    const ease = easeInOutCubic(scrollProgress);
    window.scrollTo(0, startPosition + distance * ease);

    if (currentTime < duration) {
      window.requestAnimationFrame(scrollStep);
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  window.requestAnimationFrame(scrollStep);
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-black mx-auto flex justify-between items-center">
      <div className="container flex justify-between">
        <div className="text-white text-2xl items-center">
          <Link href="/">
            <span className="text-[#ff5d56]">BS</span>| Folio
          </Link>
        </div>
        <div className="">
          <ul className="hidden lg:inline-flex items-center gap-6 lg:gap-10">
            {dataNavLinks.map(({ id, title, link }) => (
              <Link
                href={{
                  pathname: "/",
                  hash: link,
                }}
                key={id}
              >
                <li
                  className={`text-base uppercase font-normal text-white tracking-wide cursor-pointer  duration-300 ${
                    router.pathname === link ? "active" : "hover:text-red-900"
                  }`}
                  key={id}
                  onClick={() => {
                    setShowMenu(false);
                    scrollToSection(link, 500);
                  }}
                >
                  {t(title)}
                </li>
              </Link>
            ))}
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl md:block lg:hidden bg-black w-10 h-10 md:h-full inline-flex items-center justify-center rounded-full text-white cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen  absolute top-0 left-0 bg-black p-4 scrollbar-hide scrollable-menu">
              <div className="flex flex-col gap-8 py-2 relative">
                <div className="text-white text-xl">
                  <span className="text-[#ff5d56]">BS</span>| Folio
                </div>
                <ul className="flex flex-col gap-4">
                  {dataNavLinks.map(({ id, title, link }) => (
                    <Link
                      href={{
                        pathname: "/",
                        hash: link,
                      }}
                      onClick={() => setShowMenu(false)}
                      key={id}
                    >
                      <li className="text-base uppercase font-normal text-white tracking-wide cursor-pointer duration-300 hover:text-red-950">
                        {title}
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <span
                    onClick={() => setShowMenu(false)}
                    className="absolute top-3 right-4 text-white duration-300 text-2xl cursor-pointer"
                  >
                    <MdClose />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
