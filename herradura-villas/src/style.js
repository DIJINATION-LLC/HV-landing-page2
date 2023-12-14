const styles = { 
    boxWidth: "lg:max-w-[1240px] w-full",

    heading1:"font-poppins font-bold text-white xs:text-[46px] text-[32px] xs:leading-[70px] leading-[40px]",
    heading2:"font-poppins font-bold xs:text-[36px] text-[28px] xs:leading-[54px] leading-[36px]",
    heading3:"font-poppins font-semibold text-black xs:text-[30px] text-[22px] xs:leading-[35px] leading-[25px]",
    heading4:"font-poppins font-semibold text-black xs:text-[24px] text-[16px] xs:leading-[40px] leading-[30px]",
    heading5:"font-poppins font-semibold text-black xs:text-[20px] text-[18px] xs:leading-[30px] leading-[24px]",
    heading6:"font-poppins font-semibold text-black xs:text-[18px] text-[14px] xs:leading-[27px] leading-[22px]",
    paragraph:"font-poppins font-normanl text-black xs:text-[18px] text-[16px] xs:leading-[30px] leading-[24px]",

    flexCenter:"flex justify-center items-center",
    flexStart:"flex justify-center items-start",

    paddingX:"sm:px-14 px-6",
    paddingY:"sm:py-14 py-6",
    padding:"sm:p-14 p-6",

    marginX:"sm:mx-14 mx-6",
    marginY:"sm:my-14 my-6",

};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  export default styles;