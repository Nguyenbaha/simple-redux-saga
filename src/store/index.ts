import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "@/store/test/testSaga";
import testReducer from "@/store/test/testSlice";


const sagaMiddleware = createSagaMiddleware();

export const reduxSagaStore = configureStore({
    reducer: {
        testReducer: testReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reduxSagaStore.getState>;
export type AppDispatch = typeof reduxSagaStore.dispatch;