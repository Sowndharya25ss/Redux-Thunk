import userSlice from "../userSlice";

const action = userSlice.actions

export const fetchUserMiddleware = async (dispatch) => {

    try {
      dispatch(action.userLoading())
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      dispatch(action.userData(data))
    } catch (err) {
      dispatch(action.userError())
    } 
}

