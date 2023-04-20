import { JOBS } from "../actions";

const initialState = {
	content: "",
};

const searchJobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case JOBS:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default searchJobsReducer;
