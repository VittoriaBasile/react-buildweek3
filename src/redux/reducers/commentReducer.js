import { COMMENTS } from "../actions";

const initialState = {
	content: null,
};

const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case COMMENTS:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default commentReducer;
