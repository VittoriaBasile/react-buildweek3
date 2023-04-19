import { PUT_EXPERIENCES } from "../actions";

const initialState = {
	content: null,
};

const modifyExpReducer = (state = initialState, action) => {
	switch (action.type) {
		case PUT_EXPERIENCES:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default modifyExpReducer;
