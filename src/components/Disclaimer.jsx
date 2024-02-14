import React from "react";

const Disclaimer = () => {
  return (
    <div className="flex flex-col p-7 w-full bg-gray-800 text-white gap-y-5">
      <p className="flex text-2xl tracking-wider justify-center">Disclaimer</p>
      <p className="font-thin tracking-wide">
        VetNet.Social never solicits payment from job seekers at any stage of
        the recruitment process. If you encounter any suspicious activity or
        requests for payment, please do not respond and report it to us
        immediately at info@vetnet.social. Please note, all legitimate
        transactions with VetNet.Social will exclusively be conducted through
        our official payment gateway, accessible via our website or app.
      </p>
    </div>
  );
};

export default Disclaimer;
