import { configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import dataReducer from "../features/dataSlice";


import storage from "redux-persist/lib/storage/session" //? default : localStorage
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

const persistConfig = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer.reducer)

const store = configureStore({

    reducer:{
        auth: persistedReducer,
        data: dataReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})
export const persistor = persistStore(store)
export default store