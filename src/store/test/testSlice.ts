//  Định nghĩa reducer và actions cho test state.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Test {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface TestState {
    tests: Test[];
    loading: boolean;
    error: string | null;
}

const initialState: TestState = {
    tests: [],
    loading: false,
    error: null,
};

const testSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        getTestsPending(state) {
            state.loading = true;
            state.error = null;
        },
        getTestsSuccess(state, action: PayloadAction<Test[]>) {
            state.tests = action.payload;
            state.loading = false;
        },
        getTestsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getTestsPending, getTestsSuccess, getTestsFailure } = testSlice.actions;

export default testSlice.reducer;