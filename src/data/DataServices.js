import React from 'react'

export const Dataservices = [
  {
    title: "Web design",
    icon: (
      <svg
        className="w-10 mx-auto text-[#ff5d56] lg:w-20"
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height=""
        width=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 5H14V19H10V5Z" fill="currentColor"></path>
        <path d="M5 19V10H9V19H5Z" fill="currentColor"></path>
        <path
          d="M7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5Z"
          fill="currentColor"
        ></path>
        <path d="M15 5H19V9H15V5Z" fill="currentColor"></path>
        <path d="M19 10H15V14H19V10Z" fill="currentColor"></path>
      </svg>
    ),
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus assumenda voluptas ",
  },
  {
    title: "Web developer",
    icon: (
      <svg
        className="w-10 mx-auto text-[#ff5d56] lg:w-20"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        height=""
        width=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M550.5 241l-50.089-86.786c1.071-2.142 1.875-4.553 1.875-7.232 0-8.036-6.696-14.733-14.732-15.001l-55.447-95.893c.536-1.607 1.071-3.214 1.071-4.821 0-8.571-6.964-15.268-15.268-15.268-4.821 0-8.839 2.143-11.786 5.625H299.518C296.839 18.143 292.821 16 288 16s-8.839 2.143-11.518 5.625H170.411C167.464 18.143 163.447 16 158.625 16c-8.303 0-15.268 6.696-15.268 15.268 0 1.607.536 3.482 1.072 4.821l-55.983 97.233c-5.356 2.41-9.107 7.5-9.107 13.661 0 .535.268 1.071.268 1.607l-53.304 92.143c-7.232 1.339-12.59 7.5-12.59 15 0 7.232 5.089 13.393 12.054 15l55.179 95.358c-.536 1.607-.804 2.946-.804 4.821 0 7.232 5.089 13.393 12.054 14.732l51.697 89.732c-.536 1.607-1.071 3.482-1.071 5.357 0 8.571 6.964 15.268 15.268 15.268 4.821 0 8.839-2.143 11.518-5.357h106.875C279.161 493.857 283.447 496 288 496s8.839-2.143 11.518-5.357h107.143c2.678 2.946 6.696 4.821 10.982 4.821 8.571 0 15.268-6.964 15.268-15.268 0-1.607-.267-2.946-.803-4.285l51.697-90.268c6.964-1.339 12.054-7.5 12.054-14.732 0-1.607-.268-3.214-.804-4.821l54.911-95.358c6.964-1.339 12.322-7.5 12.322-15-.002-7.232-5.092-13.393-11.788-14.732zM153.535 450.732l-43.66-75.803h43.66v75.803zm0-83.839h-43.66c-.268-1.071-.804-2.142-1.339-3.214l44.999-47.41v50.624zm0-62.411l-50.357 53.304c-1.339-.536-2.679-1.34-4.018-1.607L43.447 259.75c.535-1.339.535-2.679.535-4.018s0-2.41-.268-3.482l51.965-90c2.679-.268 5.357-1.072 7.768-2.679l50.089 51.965v92.946zm0-102.322l-45.803-47.41c1.339-2.143 2.143-4.821 2.143-7.767 0-.268-.268-.804-.268-1.072l43.928-15.804v72.053zm0-80.625l-43.66 15.804 43.66-75.536v59.732zm326.519 39.108l.804 1.339L445.5 329.125l-63.75-67.232 98.036-101.518.268.268zM291.75 355.107l11.518 11.786H280.5l11.25-11.786zm-.268-11.25l-83.303-85.446 79.553-84.375 83.036 87.589-79.286 82.232zm5.357 5.893l79.286-82.232 67.5 71.25-5.892 28.125H313.714l-16.875-17.143zM410.411 44.393c1.071.536 2.142 1.072 3.482 1.34l57.857 100.714v.536c0 2.946.803 5.624 2.143 7.767L376.393 256l-83.035-87.589L410.411 44.393zm-9.107-2.143L287.732 162.518l-57.054-60.268 166.339-60h4.287zm-123.483 0c2.678 2.678 6.16 4.285 10.179 4.285s7.5-1.607 10.179-4.285h75L224.786 95.821 173.893 42.25h103.928zm-116.249 5.625l1.071-2.142a33.834 33.834 0 0 0 2.679-.804l51.161 53.84-54.911 19.821V47.875zm0 79.286l60.803-21.964 59.732 63.214-79.553 84.107-40.982-42.053v-83.304zm0 92.678L198 257.607l-36.428 38.304v-76.072zm0 87.858l42.053-44.464 82.768 85.982-17.143 17.678H161.572v-59.196zm6.964 162.053c-1.607-1.607-3.482-2.678-5.893-3.482l-1.071-1.607v-89.732h99.91l-91.607 94.821h-1.339zm129.911 0c-2.679-2.41-6.428-4.285-10.447-4.285s-7.767 1.875-10.447 4.285h-96.429l91.607-94.821h38.304l91.607 94.821H298.447zm120-11.786l-4.286 7.5c-1.339.268-2.41.803-3.482 1.339l-89.196-91.875h114.376l-17.412 83.036zm12.856-22.232l12.858-60.803h21.964l-34.822 60.803zm34.822-68.839h-20.357l4.553-21.16 17.143 18.214c-.535.803-1.071 1.874-1.339 2.946zm66.161-107.411l-55.447 96.697c-1.339.535-2.679 1.071-4.018 1.874l-20.625-21.964 34.554-163.928 45.803 79.286c-.267 1.339-.803 2.678-.803 4.285 0 1.339.268 2.411.536 3.75z"></path>
      </svg>
    ),
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus assumenda voluptas ",
  },
  {
    title: "Photography",
    icon: (
      <svg
        className="w-10 mx-auto text-[#ff5d56] lg:w-20 mb-2"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height=""
        width=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M21 18v3h-2v-3h-2v-3h6v3h-2zM5 18v3H3v-3H1v-3h6v3H5zm6-12V3h2v3h2v3H9V6h2zm0 5h2v10h-2V11zm-8 2V3h2v10H3zm16 0V3h2v10h-2z"></path>
        </g>
      </svg>
    ),
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus assumenda voluptas ",
  },
  {
    title: "SEO Analyst",
    icon: (
      <svg
        className="w-10 mx-auto text-[#ff5d56] lg:w-20 mb-2"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height=""
        width=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"></path>
        <path
          fill-rule="evenodd"
          d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus assumenda voluptas ",
  },
  {
    title: "Creative Design",
    icon: (
      <svg
        className="w-10 mx-auto text-[#ff5d56] lg:w-20 mb-2"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height=""
        width=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256.883 29.7L241.11 51.554l-23-14.06-6.202 26.224-26.63-4.193 4.308 26.604-26.21 6.317 14.165 22.93-21.794 15.86L177.61 147l-14.065 22.992 26.234 6.2-4.194 26.624 26.613-4.308 6.316 26.2 22.937-14.16 15.865 21.788 15.772-21.856 23 14.06 4.283-18.11 1.92-8.116 26.633 4.194-4.31-26.606 26.21-6.314-14.166-22.928 21.797-15.86-21.863-15.767 14.064-22.992-26.234-6.2 4.19-26.624-26.61 4.307-6.318-26.2-22.936 14.16-15.867-21.788zm-.252 51.68a49.657 49.64 0 0 1 49.657 49.64 49.657 49.64 0 0 1-49.656 49.638 49.657 49.64 0 0 1-49.655-49.638 49.657 49.64 0 0 1 49.656-49.64zm59.345 137.308l-8.082 34.164-29.96-18.315-9.747 13.504c11.734 82.04 18.1 163.835 54.654 247l16.553-66.185c10.51 13.815 27.52 26.056 49.656 33.092-31.075-77.557-42.77-158.987-54.714-240.37l-18.36-2.89zm-117.37.253l-19.76 3.2c-11.916 81.194-23.63 162.428-54.632 239.807 22.136-7.036 39.147-19.277 49.658-33.092l16.552 66.186c36.794-83.71 43.005-166.034 54.89-248.614l-8.595-11.8-29.88 18.442-8.232-34.127z"></path>
      </svg>
    ),
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus assumenda voluptas ",
  },
  {
    title: "27/7 Support",
    icon: (
      <svg
        className="w-10 mx-auto text-[#ff5d56] lg:w-20 mb-2"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height=""
        width=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,2C6.486,2,2,6.486,2,12v0.714V16v0.143C2,17.167,2.897,18,4,18h1c0.553,0,1-0.448,1-1v-5.143c0-0.552-0.447-1-1-1 H4.092C4.648,6.987,7.978,4,12,4s7.352,2.987,7.908,6.857H19c-0.553,0-1,0.448-1,1V16v1v1c0,1.103-0.897,2-2,2h-2v-1h-4v3h2h2h2 c2.206,0,4-1.794,4-4c1.103,0,2-0.833,2-1.857V16v-3.286V12C22,6.486,17.514,2,12,2z"></path>
      </svg>
    ),
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus assumenda voluptas ",
  },
];