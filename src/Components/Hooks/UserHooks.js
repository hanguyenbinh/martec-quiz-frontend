import { useEffect, useState } from "react";
import { getLoggedinUser, getLoggedinUserEmail } from "../../helpers/api_helper";

const useProfile = () => {
  const accessToken = getLoggedinUser();
  const email = getLoggedinUserEmail();
  const [loading, setLoading] = useState(accessToken && email ? false : true);
  useEffect(() => {
    const accessToken = getLoggedinUser();
    const email = getLoggedinUserEmail();
    setLoading(accessToken && email ? false : true);
  }, []);


  return { loading, accessToken, email };
};

export { useProfile };