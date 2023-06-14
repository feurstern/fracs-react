import React from "react";
import styles, {layout} from "@/app/style";
import Button from "@/app/components/components/Button";

const Section7 = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex flex-row flex-col bg-black-radient-2 rounded-[20px] box-shadow`}
    >
      <div className={`flex-1 flex flex-col`}>
        <h2 className={`${styles.heading2}`}>Let's Register to Our Program!</h2>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
      </div>
    </section>
  );
};

export default Section7;
