import { useEffect, useState } from "react";
import { getLoggedinUser } from "../../helpers/api_helper";

const useProfile = () => {
  const accessToken = getLoggedinUser();
  const [loading, setLoading] = useState(accessToken ? false : true);
  const [userProfile, setUserProfile] = useState(
    accessToken ? { accessToken } : null
  );

  useEffect(() => {
    const accessToken = getLoggedinUser();

    setUserProfile(accessToken ? accessToken : null);
    setLoading(accessToken ? false : true);
  }, []);


  return { userProfile, loading, accessToken };
};

export { useProfile };