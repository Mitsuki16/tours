import React, { useState } from "react";

function TourItem({ id, name, imgurl, price, description, onNotInterested}) {

  const [seeMoreFlag, setSeeMoreFlag] = useState(true)
  let classes=' relative mt-20 rounded-2xl shadow-[0_20px_60px_15px_rgba(0,0,0,0.3)] '
  let seeMoreText = 'See Less'
  if (seeMoreFlag){
    seeMoreText = 'See More'
  }

  return (
    <div className={classes}>
      <div>
        <img
        alt={name}
          className="rounded-t-2xl w-[150pc] h-[20pc] object-cover"
          src={imgurl}
        />
        <div className="p-5">
          <h1 className=" font-black">{name}</h1>
          <p className="mt-4 indent-8">{seeMoreFlag? description.toString().substring(0,210) + "..." : description}</p>
          <a role="button" onClick={(e) => setSeeMoreFlag(!seeMoreFlag)} className="text-blue-400 w-40 h-30">{seeMoreText}</a>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-3 bg-cyan-400 rounded-lg ">
        <h2>{price}</h2>
      </div>
      <div className="flex justify-center pb-3 ">
      <button onClick={() => {onNotInterested(id)}} className="rounded-2xl bg-cyan-400 self-center w-[36pc] p-4 m-4">Not Interested</button>
      </div>
    </div>
  );
}

export default TourItem;
