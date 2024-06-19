"use client";

import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.location.href =
      "http://localhost:3000/recovery?access_token=" +
      window.location.hash.split("=")[1];
  }, []);
  return <div>page</div>;
};
export default page;
