import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavbarDemo() {
  return (
    <Navbar
      shouldHideOnScroll
      className="bg-[#FFFFDD] rounded-3xl  mb-2 text-black"
    >
      <NavbarBrand className="w-full">
        <p className="font-['Gilroy-Heavy'] text-2xl text-inherit">NR</p>
      </NavbarBrand>

      <NavbarContent justify="end" className="  ">
        <NavbarItem>
          <a
            href="https://www.instagram.com/nico2rc_/"
            className="size-full grid place-items-center transition-all duration-200 hover:scale-90"
          >
            <svg
              width="40"
              height="40"
              viewBox="5 2 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>mi instagram xNico2rc</title>
              <g clip-path="url(#clip0_6_68)">
                <path
                  d="M6.66667 13.3333C6.66667 11.5652 7.36905 9.86952 8.61929 8.61928C9.86954 7.36904 11.5652 6.66666 13.3333 6.66666H26.6667C28.4348 6.66666 30.1305 7.36904 31.3807 8.61928C32.631 9.86952 33.3333 11.5652 33.3333 13.3333V26.6667C33.3333 28.4348 32.631 30.1305 31.3807 31.3807C30.1305 32.6309 28.4348 33.3333 26.6667 33.3333H13.3333C11.5652 33.3333 9.86954 32.6309 8.61929 31.3807C7.36905 30.1305 6.66667 28.4348 6.66667 26.6667V13.3333Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 20C15 21.3261 15.5268 22.5979 16.4645 23.5355C17.4021 24.4732 18.6739 25 20 25C21.3261 25 22.5979 24.4732 23.5355 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4645C22.5979 15.5268 21.3261 15 20 15C18.6739 15 17.4021 15.5268 16.4645 16.4645C15.5268 17.4021 15 18.6739 15 20Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M27.5 12.5V12.5167"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_68">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </NavbarItem>

        <NavbarItem>
          <a
            href="https://wa.me/+573232364155"
            className="size-full transition-all duration-200 hover:scale-90"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>mi Whatsapp</title>
              <g clip-path="url(#clip0_6_73)">
                <path
                  d="M5 35L7.75 28.6667C5.6461 25.6801 4.70445 22.0284 5.10174 18.3969C5.49904 14.7653 7.20798 11.4036 9.90785 8.94254C12.6077 6.48151 16.1129 5.09037 19.7656 5.03018C23.4184 4.96998 26.9675 6.24489 29.747 8.61563C32.5265 10.9864 34.3452 14.29 34.862 17.9065C35.3787 21.5229 34.5579 25.2037 32.5535 28.258C30.5492 31.3122 27.4991 33.53 23.9757 34.4952C20.4522 35.4603 16.6977 35.1065 13.4167 33.5L5 35Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 16.6667C15 16.8877 15.0878 17.0996 15.2441 17.2559C15.4004 17.4122 15.6123 17.5 15.8333 17.5C16.0543 17.5 16.2663 17.4122 16.4226 17.2559C16.5789 17.0996 16.6667 16.8877 16.6667 16.6667V15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667C15.6123 14.1667 15.4004 14.2545 15.2441 14.4107C15.0878 14.567 15 14.779 15 15V16.6667ZM15 16.6667C15 18.8768 15.878 20.9964 17.4408 22.5592C19.0036 24.122 21.1232 25 23.3333 25M23.3333 25H25C25.221 25 25.433 24.9122 25.5893 24.7559C25.7455 24.5996 25.8333 24.3877 25.8333 24.1667C25.8333 23.9456 25.7455 23.7337 25.5893 23.5774C25.433 23.4211 25.221 23.3333 25 23.3333H23.3333C23.1123 23.3333 22.9004 23.4211 22.7441 23.5774C22.5878 23.7337 22.5 23.9456 22.5 24.1667C22.5 24.3877 22.5878 24.5996 22.7441 24.7559C22.9004 24.9122 23.1123 25 23.3333 25Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_73">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </NavbarItem>

        <NavbarItem>
          <a
            href="https://discord.gg/zTkPzyxCsw"
            className="size-full transition-all duration-200 hover:scale-90"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>mi Discord</title>

              <g clip-path="url(#clip0_6_77)">
                <path
                  d="M13.3333 20C13.3333 20.442 13.5089 20.866 13.8215 21.1785C14.1341 21.4911 14.558 21.6667 15 21.6667C15.442 21.6667 15.866 21.4911 16.1785 21.1785C16.4911 20.866 16.6667 20.442 16.6667 20C16.6667 19.558 16.4911 19.1341 16.1785 18.8215C15.866 18.5089 15.442 18.3333 15 18.3333C14.558 18.3333 14.1341 18.5089 13.8215 18.8215C13.5089 19.1341 13.3333 19.558 13.3333 20Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M23.3333 20C23.3333 20.442 23.5089 20.866 23.8215 21.1785C24.1341 21.4911 24.558 21.6667 25 21.6667C25.442 21.6667 25.866 21.4911 26.1785 21.1785C26.4911 20.866 26.6667 20.442 26.6667 20C26.6667 19.558 26.4911 19.1341 26.1785 18.8215C25.866 18.5089 25.442 18.3333 25 18.3333C24.558 18.3333 24.1341 18.5089 23.8215 18.8215C23.5089 19.1341 23.3333 19.558 23.3333 20Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M25.8333 28.3333C25.8333 30 28.3333 33.3333 29.1667 33.3333C31.6667 33.3333 33.8883 30.555 35 28.3333C36.1117 25.555 35.8333 18.6117 32.5 9.16666C30.0717 7.47499 27.5 6.93332 25 6.66666L23.38 9.87166C21.1449 9.48582 18.8601 9.48582 16.625 9.87166L15 6.66666C12.5 6.93332 9.92833 7.47499 7.5 9.16666C4.16666 18.6117 3.88833 25.555 5 28.3333C6.11166 30.555 8.33333 33.3333 10.8333 33.3333C11.6667 33.3333 14.1667 30 14.1667 28.3333"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11.6667 27.5C17.5 29.1667 22.5 29.1667 28.3333 27.5"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_77">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
