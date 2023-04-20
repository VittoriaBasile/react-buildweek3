export const SET_PROFILE = "SET_PROFILE";
export const PROFILE = "PROFILE";
export const ALL_PROFILE = "ALL_PROFILE";
export const GET_FORM_DATA = "GET_FORM_DATA";
export const GET_SEARCH_DATA = "GET_SEARCH_DATA";
export const POST_EXPERIENCES = "POST_EXPERIENCES";
export const ALL_EXPERIENCES = "ALL_EXPERIENCES";
export const CHANGE_EXP = "CHANGE_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const PUT_EXPERIENCES = "PUT_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const NEW_POST = "NEW_POST";
export const PUBLIC_POST = "PUBLIC_POST";
export const getFormAction = (content) => ({ type: GET_FORM_DATA, payload: content });
export const postFormAction = (content) => ({ type: POST_EXPERIENCES, payload: content });
export const putFormAction = (content) => ({ type: PUT_EXPERIENCES, payload: content });
export const getSearchAction = (content) => ({ type: GET_SEARCH_DATA, payload: content });
const generalProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
const persProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const searchProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
const postsEndpoint = "https://striveschool-api.herokuapp.com/api/posts";
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
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchProfileAction = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(searchProfileEndpoint + { GET_SEARCH_DATA }, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const searchedProfile = await response.json();
				dispatch({ type: PROFILE, payload: searchedProfile });
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

export const editProfileImageAction = (dataImage, userID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/picture", {
				method: "POST",
				headers: {
					// "Content-Type": "multipart/form-data",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: dataImage,
			});
			if (response.ok) {
				const newProfileImageData = await response.json();
				dispatch({ type: PROFILE, payload: newProfileImageData });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const postExperiencesAction = (newExp, userID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(newExp),
			});
			if (response.ok) {
				const newExperience = await response.json();
				dispatch({ type: POST_EXPERIENCES, payload: newExperience });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getExperiencesAction = (userID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences", {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const allExperiences = await response.json();
				dispatch({ type: ALL_EXPERIENCES, payload: allExperiences });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteExperiencesAction = (userID, expID) => {
	return async () => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences/" + expID, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				alert("Esperienza eliminata!");
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const putExperienceAction = (newData, userID, expID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences/" + expID, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(newData),
			});
			if (response.ok) {
				const newExpData = await response.json();
				dispatch({ type: CHANGE_EXP, payload: newExpData });
			}
		} catch (error) {
			console.log(error);
		}
	};
};
export const getPostsAction = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(postsEndpoint, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const allPosts = await response.json();
				dispatch({ type: GET_POSTS, payload: allPosts });
			}
		} catch (error) {
			console.log(error);
		}
	};
};
export const postPostAction = (newData) => {
	return async (dispatch) => {
		try {
			const response = await fetch(postsEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify({ text: newData }),
			});
			if (response.ok) {
				const newPostData = await response.json();
				dispatch({ type: PUBLIC_POST, payload: newPostData });
			}
		} catch (error) {
			console.log(error);
		}
	};
};
