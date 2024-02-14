import React from "react";
import pradeep from "../assets/pradeep.jpeg";
const Founder = () => {
  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex flex-col md:flex-row my-10 w-full h-full sm:px-10 md:w-[90%] mx-auto bg-gray-50">
        <div className="flex p-3 md:p-12 flex-col gap-y-5">
          <h1 className="flex justify-center font-semibold text-3xl tracking-wide">
            Meet Our Founder
          </h1>
          <div className="flex w-full justify-center items-center">
            <img
              src={pradeep}
              alt="image"
              className="w-[300px] h-[250px] object-contain"
            />
          </div>
          <h1 className="flex justify-center font-semibold text-3xl tracking-wide">
            Major Pradeep Muthuswamy (Retd)
          </h1>
          <p className="flex md:text-start  text-justify tracking-wide ">
            Pradeep is the visionary founder behind Vetnet.Social. A seasoned
            veteran, he has more than a decade of leadership experience,
            including a transformative role in Software Development, Digital
            Transformation & IT modernisation of the Indian Army. Supported by a
            pre-incubation at the esteemed Indian School of Business (ISB),
            Pradeep combines real-world operational expertise with academic
            insight. His mission is clear: to use this diverse skill set to help
            veterans find fulfilling careers, acquire essential skills, and
            enrich the workforce with diversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
