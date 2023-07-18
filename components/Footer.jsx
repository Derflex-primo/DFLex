"use client";

import "styles/global.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //email server pending
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="nav_container container_color border-t-2 border-t-gray-800 ">
      <div className="flex flex-row-reverse justify-between mr-52 ">
        <h1 className="text-stone-300  text-xl">Join the community</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="ml-12 placeholder-gray-700 rounded-lg px-4 py-2 w-96 "
              placeholder="name@gmail.com"
              type="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <button
              className="text-white rounded-lg hover:bg-slate-700  bg-slate-600 ml-2 px-5 py-2"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <ul className="form_layout">
        <h1 className=" justify-start max-w-md mt-2 ml-12 text-stone-500 text-sm">
          Sign Up Now for Latest Features, NFT Drops & Expert Tips on DFLex!"
          <br />
          <span className="font-bold text-stone-400">Stay Ahead!</span>
        </h1>
        <div className="flex space-x-2 ">
          <Image
            src="/assets/icons/discord.svg"
            width={40}
            height={40}
            className=" bg-slate-100 hover:p-2 ease-in-out duration-300 rounded-lg p-1 "
            alt="discord img"
          ></Image>
          <Image
            src="/assets/icons/tiktok.svg"
            width={40}
            height={40}
            className=" bg-slate-100 hover:p-2 ease-in-out duration-300 rounded-lg p-1 "
            alt="discord img"
          ></Image>
          <Image
            src="/assets/icons/twitter.svg"
            width={40}
            height={40}
            className=" bg-slate-100 hover:p-2 ease-in-out duration-300 rounded-lg p-1 "
            alt="discord img"
          ></Image>
          <Image
            src="/assets/icons/youtube.svg"
            width={40}
            height={40}
            className=" bg-slate-100 hover:p-2 ease-in-out duration-300 rounded-lg p-1 "
            alt="discord img"
          ></Image>
          <Image
            src="/assets/icons/ig.svg"
            width={40}
            height={40}
            className=" bg-slate-100 hover:p-2 ease-in-out duration-300 rounded-lg p-1 "
            alt="discord img"
          ></Image>
          <Image
            src="/assets/icons/facebook.svg"
            width={40}
            height={40}
            className=" bg-slate-100 hover:p-2 ease-in-out duration-300 rounded-lg p-1 "
            alt="discord img"
          ></Image>
          <Image
            src="/assets/icons/reddit.svg"
            width={40}
            height={40}
            className=" bg-slate-100 hover:p-2 ease-in-out duration-300 rounded-lg p-1 "
            alt="discord img"
          ></Image>
        </div>
      </ul>
      <div className="border-t-2 border-t-gray-900 mt-10 border-dotted flex space-x-60 ml-12 pt-10 text-white grid-rows-4">
        <ul>
          <h1 className="nav_logo text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            DFLex
          </h1>
        </ul>
        <ul className="text-sm space-y-2 text-gray-700 hover:text-lime-300  ">
          <li>
            <span className="font-semibold text-base text-stone-400">
              Company
            </span>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">Partnerships</Link>
          </li>
          <li>
            <Link href="#">Memberships</Link>
          </li>
          <li>
            <Link href="#">Address</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
        </ul>
        <ul className="text-sm space-y-2 text-gray-700 hover:text-lime-300 ">
          <li>
            <span className="font-semibold text-base text-stone-400">
              DFLex API
            </span>
          </li>
          <li>
            <Link href="#">Developer</Link>
          </li>
          <li>
            <Link href="#">Api key</Link>
          </li>
          <li>
            <Link href="#">Docs</Link>
          </li>
          <li>
            <Link href="#">Reference</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
        </ul>
        <ul className="text-sm space-y-2 text-gray-700 hover:text-lime-300  ">
          <li>
            <span className="font-semibold text-base text-stone-400">
              Resources
            </span>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Help center</Link>
          </li>
          <li>
            <Link href="#">Taxes</Link>
          </li>
          <li>
            <Link href="#">Community Standards</Link>
          </li>
          <li>
            <Link href="#">Platform Status</Link>
          </li>
        </ul>
        <ul className="text-sm space-y-2 text-gray-700  hover:text-lime-300 ">
          <li>
            <span className="font-semibold text-base text-stone-400">
              Marketplace
            </span>
          </li>
          <li>
            <Link href="#">All NFT's</Link>
          </li>
          <li>
            <Link href="#">Art</Link>
          </li>
          <li>
            <Link href="#">PFPs</Link>
          </li>
          <li>
            <Link href="#">Music</Link>
          </li>
          <li>
            <Link href="#">Photography</Link>
          </li>
          <li>
            <Link href="#">Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
