import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserMiddleware } from "../../redux/middleWare/userMD";

function UserRedux() {
  const {loading, error, user} = useSelector((store) => store.userState)

  const dispatch = useDispatch()
  useEffect(function() {
    dispatch(fetchUserMiddleware);
  },[])

  const heading = <h1>User Examples</h1>; 

  if (loading) {
    return (
      <>
        {heading}
        <h3>Loading...</h3>
      </>
    );
  }

  if (error) {
    return (
      <>
        {heading}
        <h3>Error</h3>
      </>
    );
  }

  return (
    <>
      {heading}
      <h4>Name: {user.name}</h4>
      <h4>Phone: {user.phone}</h4>
    </>
  );
}

export default UserRedux;
