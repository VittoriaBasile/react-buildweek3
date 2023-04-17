import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		encryptTransform({
			secretKey1: process.env.REACT_APP_API_KEY,
			secretKey2: process.env.REACT_APP_SECRET_KEY,
		}),
	],
};

const rootReducer = combineReducers({
	// red1: ;
	// red2: ;
	// red3: ;
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
