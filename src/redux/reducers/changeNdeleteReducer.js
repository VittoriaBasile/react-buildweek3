import { CHANGE_EXP } from "../actions";
import { DELETE_EXP } from "../actions";

const initialState = {
	content: [],
};

const changeNdeleteReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_EXP:
			return {
				...state,
				content: action.payload,
			};
		case DELETE_EXP:
			return {
				...state,
				content: state.content.filter((_, id) => id !== action.payload),
			};
		default:
			return state;
	}
};

export default changeNdeleteReducer;
