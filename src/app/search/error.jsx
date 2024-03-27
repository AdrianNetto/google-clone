"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went wrong &#128533;</h1>
      <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-600 transition duration-150">Try again</button>
    </div>
  )
}
