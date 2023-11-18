import React from "react";
import Link from "next/link";
const BtnRegist = () => {
  return (
    <a className="px-4" href="/register" target="_blank">
      <button
        onClick={null}
        className="bg-red-300 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded inline-flex items-center mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          height="1em"
          viewBox="0 0 576 512"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>

        <span className="px-2">Daftar</span>
      </button>
    </a>
  );
};
export default BtnRegist;
