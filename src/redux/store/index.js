import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import editProfileReducer from "../reducers/editProfileReducer";
import profileReducer from "../reducers/profileReducer";
import searchProfileReducer from "../reducers/searchProfileReducer";
import allProfileReducer from "../reducers/allProfileReducer";
import profileFormReducer from "../reducers/ProfileFormReducer";

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		encryptTransform({
			secretKey: process.env.REACT_APP_SECRET_KEY,
		}),
	],
};

const rootReducer = combineReducers({
	editProfile: editProfileReducer,
	profile: profileReducer,
	searchProfile: searchProfileReducer,
	allProfile: allProfileReducer,
	profileForm: profileFormReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	// reducer
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
