import { combineReducers, configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import appReducer from './feature/global/appReducer';

const rootReducers = combineReducers({
    app: appReducer,
})

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
    reducer: { rootReducers },
    middleware: middleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
