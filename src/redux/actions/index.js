export const SET_PROFILE = "SET_PROFILE";
export const PROFILE = "PROFILE";

const persProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";

export const profileFetchAction = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(persProfileEndpoint, {
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
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
