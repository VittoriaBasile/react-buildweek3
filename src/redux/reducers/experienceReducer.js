import { POST_EXPERIENCES } from "../actions";

const initialState = {
	content: null,
};

const setNewExperienceReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_EXPERIENCES:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default setNewExperienceReducer;
