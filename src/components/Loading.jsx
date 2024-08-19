import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <InfinitySpin
        visible={true}
        width="200"
        color="#818FB4"
        ariaLabel="infinity-spin-loading"
      />

      <h className="text-xl font-bold">Loading...</h>
    </div>
  );
}
