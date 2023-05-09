import React from "react";

export default function CardAbout() {
  return (
    <ul className="list-none p-0 m-0 text-[#707070] overflow-hidden">
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
        <li className="flex gap-4 py-1 relative text-sm items-center md:text-xs lg:text-xl  ">
          <svg
            className="w-6 text-[#ff5d56]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 11H9V13H7zM7 15H9V17H7zM11 11H13V13H11zM11 15H13V17H11zM15 11H17V13H15zM15 15H17V17H15z"></path>
            <path d="M5,22h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12 C3,21.103,3.897,22,5,22z M19,8l0.001,12H5V8H19z"></path>
          </svg>
          <span className="font-semibold">Date of birth :</span> 05 february
          1999
        </li>
        <li className="flex gap-4  py-1 relative text-sm items-center md:text-xs lg:text-xl ">
          <svg
            className="w-6 text-[#ff5d56]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"></path>
          </svg>
          <span className="font-semibold">Nationality:</span> French
        </li>
        <li className="flex gap-4 py-1 relative text-sm items-center md:text-xs lg:text-xl ">
          <svg
            className="w-6 text-[#ff5d56] "
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 0 0 0-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
          </svg>
          <span className="font-semibold">Jobs :</span> Job Search
        </li>
        <li className="flex gap-4 py-1 relative text-sm items-center md:text-xs lg:text-xl ">
          <svg
            className="w-6 text-[#ff5d56]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth=""
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="font-semibold">Phone:</span> 07 49 22 92 38
        </li>
        <li className="flex gap-4 py-1 relative text-sm items-center md:text-xs lg:text-xl ">
          <svg
            className="w-6 text-[#ff5d56]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 17.108c-75.73 0-137.122 61.392-137.122 137.122.055 23.25 6.022 46.107 11.58 56.262L256 494.892l119.982-274.244h-.063c11.27-20.324 17.188-43.18 17.202-66.418C393.122 78.5 331.73 17.108 256 17.108zm0 68.56a68.56 68.56 0 0 1 68.56 68.562A68.56 68.56 0 0 1 256 222.79a68.56 68.56 0 0 1-68.56-68.56A68.56 68.56 0 0 1 256 85.67z"></path>
          </svg>
          <span className="font-semibold">Address:</span> Gisors, France
        </li>
        <li className="flex gap-4 py-1 relative text-sm items-center md:text-xs lg:text-xl ">
          <svg
            className="w-6 text-[#ff5d56]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
          </svg>
          <span className="font-semibold">Email:</span>
          <p className="">info@gmail.com</p>
        </li>
        <li className="flex gap-4 py-1 relative text-sm items-center md:text-xs lg:text-lg">
          <svg
            className="w-6 text-[#ff5d56]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
          </svg>
          <span className="font-semibold">Spoken Langages:</span>
          <p className=""> French - English</p>
        </li>
        <li className="flex gap-4 py-1 relative text-sm items-center md:text-xs lg:text-lg">
          <svg
            className="w-6 text-[#ff5d56]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height=""
            width=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
          </svg>
          <span className="font-semibold">Discrod:</span>
          <p className=""> Nimaj#4487</p>
        </li>
      </div>
    </ul>
  );
}
