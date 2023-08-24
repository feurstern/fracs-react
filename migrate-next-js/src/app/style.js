const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
  heading3: "font-poppins font-semibold xs:text-[25px] text-[20px] text-black xs:leading-[50px] ",
  paragraph: "font-poppins font-normal text-black text-[18px] leading-[30.8px] text-justify",

  galleryImageContainer : "grid grid-cols-2 md:grid-cols-3 gap-4",
  textHoverImage : "text-white text-[16px]",
  modalImage : 'fixed top-0 left-0 right-0 bottom-0',
  registerProgramContainer : 'grid grid-cols-1 flex justify-center items-center md:grid-cols-3 gap-5',
  defaultHeaderFont : "font-poppins font-bold xl:text-2xl lg:text-xl md:text-xl ss:text-[15px] xs:text-[12px] ",
  'defaultNavLinkFont' : "font-poppins font-semibold xl:text-2xl lg:text-2xl md:text-xl ss:text-[13px] xs:text-[11px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetween : "flex justify-between items-center",
  flexStart2 : "flex justify-start items-start",
  flexEnd : "flex justify-end items-end",
  flexEvently : "flex justify-evenly content-evenly items-center place-content-evenly place-items-center",
  
  // lineBorder : "border border-black",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  circleDiv: "flex justify-center items-center border rounded-full border-solid border-[red] bg-dimBlue w-[64px] h-[64px]",
  
  buttonPrimary: "bg-blue-500 hover:bg-blue-700 text-white p-1 m-0 rounded",
  buttonPrimaryRound: "bg-blue-500 hover:bg-blue-700 text-white p-1 rounded-full"

};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionBackReverse :`flex md:flex-row flex-col-reverse ${styles.paddingX}`,  
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionTagImg : `flex-1 flex ${styles.flexStart} md:ml-10 ml-0 md:mt-0 mt-10 fixed`,
  sectionInfo: `flex-1 ${styles.flexStart}`,
};

export const card_css = {
  card_box: `flex flex-wrap m-0 w-full`,
  card: `max-w-xs m-4 p-4 border solid #ccc`,
};

export default styles;