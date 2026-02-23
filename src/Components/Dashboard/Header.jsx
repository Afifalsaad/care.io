"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return "";
  }

  return (
    <div>
      <header className="z-50 sticky top-0 pt-4">
        <div className="flex flex-wrap items-center px-6 py-2 shadow-md min-h-14rounded-md w-full relative tracking-wide">
          <div className="flex items-center flex-wrap gap-x-8 gap-y-4 z-50 w-full">
            <div className="flex items-center gap-4 py-1 outline-none border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                className="w-5 cursor-pointer fill-current">
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent rounded outline-none"
              />
            </div>
            <div className="flex items-center gap-8 ml-auto">
              <div className="dropdown-menu relative w-10 h-10 flex shrink-0 group hover:cursor-pointer">
                {session?.user?.image ? (
                  <Image
                    alt={session?.user?.name}
                    className="rounded-full"
                    src={session?.user?.image ? session?.user?.image : ""}
                    fill></Image>
                ) : (
                  <FaRegCircleUser className="w-8 h-8" />
                )}

                <div className="dropdown-content hidden group-hover:block bg-background shadow-md p-2 rounded-md absolute top-9 right-0 w-56">
                  <div className="w-full">
                    <Link
                      href="/dashboard/myOrders"
                      className="text-[15px] w-full font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-muted dropdown-item transition duration-300 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4.5 h-4.5 mr-3 fill-current"
                        viewBox="0 0 512 512">
                        <path
                          d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                          data-original="#000000"></path>
                      </svg>
                      My Orders
                    </Link>
                    <hr className="my-2 -mx-2 border-gray-200" />

                    <button className="text-[15px] font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-muted w-full dropdown-item transition duration-300 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4.5 h-4.5 mr-3 fill-current"
                        viewBox="0 0 6 6">
                        <path
                          d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                          data-original="#000000"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
