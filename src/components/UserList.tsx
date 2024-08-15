'use client'
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import {getTestsPending} from "@/store/test/testSlice";

const UserList: React.FC = () => {
    const [render, setRender] = useState(1) ;
    const dispatch = useDispatch<AppDispatch>();
    const { tests, loading, error } = useSelector((state: RootState) => state.testReducer);

    console.log('test": ', tests)
    useEffect(() => {
        setRender((prevState: number)=> prevState +1)

        dispatch(getTestsPending());
    }, [dispatch]);

    if (loading) return <div className="text-center mt-8">Loading...</div>;
    if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

    console.log("cehck render: ", render )
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tests?.map((test) => (
                    <div key={test.id} className="border p-4 rounded shadow">
                        <h3 className="font-bold">{test.name}</h3>
                        <p>Username: {test.username}</p>
                        <p>Email: {test.email}</p>
                        <p>Phone: {test.phone}</p>
                        <p>Website: {test.website}</p>
                        <p>Company: {test.company.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;