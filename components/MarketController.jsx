'use client'

import React, { useState } from "react";

const MarketController = ({ description }) => {
  // Remove the unnecessary line since you are not using descriptions in this component
  // const descriptions = description;

  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="max-w-5xl text-slate-700 mt-4">
      <div>
        <h1 className={`text-base ${expanded ? "block" : "line-clamp-1"}`}>
          {description} {/* Use description directly */}
        </h1>
      </div>
      <div className="mt-2">
        <button
          className="text-slate-500 hover:text-black"
          onClick={handleToggleExpand}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default MarketController;



