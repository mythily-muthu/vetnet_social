import React, { useState } from "react";
import { scrollImages } from "../utils";
import TitleContainer from "./TitleContainer";
const ValuedPartners = () => {
  const [partners, setPartners] = useState(scrollImages);

  return (
    <div className="flex flex-col w-full p-3 overflow-x-hidden">
      <TitleContainer text={"Valued Partners"} />
      <div className="flex flex-col sm:flex-row  w-full md:w-[90%] mx-auto gap-y-5">
        <div className="flex p-3 md:px-12 flex-col gap-y-5 sm:w-[60%] sm:px-10  ">
          <p className="flex md:text-start text-justify text-lg lg:px-10 w-full md:w-[70%]">
            Our partnerships with these esteemed organizations symbolize a
            shared commitment to excellence and innovation. Together, we are
            forging new paths and achieving greater success.
          </p>
        </div>

        <div className="flex sm:w-[60%] gap-5 overflow-hidden ">
          <div className="flex flash items-center">
            {scrollImages.map((image) => {
              return (
                <div className="flex  ">
                  <div className="flex w-[200px]  h-[60px]">
                    <img
                      className="w-full h-full object-contain"
                      src={image.image}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuedPartners;
