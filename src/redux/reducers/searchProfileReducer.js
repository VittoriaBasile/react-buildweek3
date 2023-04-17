import { SEARCHED_PROFILE } from "../actions";

const initialState = {
	content: null,
};

const searchProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCHED_PROFILE:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default searchProfileReducer;
