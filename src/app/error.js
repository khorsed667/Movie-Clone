"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center my-4">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        onClick={() => reset()}
        className="bg-amber-500 py-2 px-4 rounded text-white my-4"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
