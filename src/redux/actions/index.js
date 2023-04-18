export const SET_PROFILE = "SET_PROFILE";
export const PROFILE = "PROFILE";
export const ALL_PROFILE = "ALL_PROFILE";
export const SEARCHED_PROFILE = "SEARCHED_PROFILE";
export const GET_FORM_DATA = "GET_FORM_DATA";

export const getFormAction = (content) => ({ type: GET_FORM_DATA, payload: content });
export const profileModel = {
	// "_id": "5d84937322b7b54d848eb41b", 				// server generated
	name: "Diego",
	surname: "Banovaz",
	email: "diego@strive.school",
	bio: "SW ENG",
	title: "COO @ Strive School",
	area: "Berlin",
	// "image": ..., 														// server generated on upload
	// "username": "admin", 											// server generated from Auth
	// "createdAt": "2019-09-20T08:53:07.094Z", 	// server generated
	// "updatedAt": "2019-09-20T09:00:46.977Z", 	// server generated
	// "__v": 0 																	// server generated
};
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

export const editProfileAction = (newData) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(newData),
			});
			if (response.ok) {
				const newProfileData = await response.json();
				dispatch({ type: PROFILE, payload: newProfileData });
			}
		} catch (error) {
			console.log(error);
		}
	};
};
