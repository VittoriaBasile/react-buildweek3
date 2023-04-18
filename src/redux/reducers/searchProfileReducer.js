import { GET_SEARCH_DATA } from "../actions";

const initialState = {
	content: "",
};

const searchProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SEARCH_DATA:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default searchProfileReducer;
