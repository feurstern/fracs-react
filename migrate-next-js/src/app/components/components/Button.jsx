import React from "react";
import Link from "next/link";

const Button = ({ styles }) => {
  return (
    <div>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounder-[10px] outline-none ${styles}`}
      >
        <Link href="/register">Register</Link>
      </button>
    </div>
  );
};

export default Button;
