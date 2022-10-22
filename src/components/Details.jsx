import React from "react";

const Details = () => {
  return (
    <div className="mt-20 bg-black text-white p-5">
      <p className="text-center text-5xl">This Webinar Provides</p>
      <div className="flex text-center justify-around">
        <div className="flex  flex-col text-center md:flex-row p-5">
          <div className="pr-5 m-10">
            <p className="text-3xl">Unique Opportunity</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              molestias?
            </p>
          </div>
          <div className="m-10">
            <p className="text-3xl">Financila Freedom to fulfill your dream</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              molestias?
            </p>
          </div>
          <div className="m-10">
            <p className="text-3xl">Lifestyle & Recognition</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              molestias?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
