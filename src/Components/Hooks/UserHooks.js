import { useEffect, useState } from "react";
import { getLoggedinUser } from "../../helpers/api_helper";

const useProfile = () => {
  const accessToken = getLoggedinUser();
  useEffect(() => {
    const accessToken = getLoggedinUser();
  }, []);


  return { accessToken };
};

export { useProfile };