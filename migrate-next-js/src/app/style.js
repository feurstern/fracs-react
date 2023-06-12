const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[25px] text-[20px] text-black xs:leading-[50px] ",
    paragraph: "font-poppins font-normal text-black text-[18px] leading-[30.8px] text-justify",

    defaultHeaderFont : "font-poppins font-semibold text-3xl text-white text-dimWhite",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween : "flex justify-between",
    flexStart2 : "flex justitfy-start items-start",
    
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionBackReverse :`flex md:flex-row flex-col-reverse ${styles.paddingX}`,  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionTagImg : `flex-1 flex ${styles.flexStart} md:ml-10 ml-0 md:mt-0 mt-10 fixed`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
  
