export const SET_PROFILE = "SET_PROFILE";
export const PROFILE = "PROFILE";
export const ALL_PROFILE = "ALL_PROFILE";
export const SEARCHED_PROFILE = "SEARCHED_PROFILE";

const generalProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
const persProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const searchProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

export const profileFetchAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(persProfileEndpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: PROFILE, payload: data });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchProfileAction = (userID) => {
  return async (dispatch) => {
    try {
      const response = await fetch(searchProfileEndpoint + { userID }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      if (response.ok) {
        const searchedProfile = await response.json();
        dispatch({ type: SEARCHED_PROFILE, payload: searchedProfile });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const allProfileFetchAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(generalProfileEndpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: ALL_PROFILE, payload: data });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
