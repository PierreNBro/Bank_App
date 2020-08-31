import React from 'react';
import AccountComponent from '../components/account.component';

function Home() {
    return (
        <div className="flex flex-row h-screen">
            <div className="flex justify-center bg-gray-300 pt-4 w-24">
                HOME
            </div>
            <div className="flex flex-col w-full h-screen p-10">
                <div className="h-half">
                    <div className="mb-4">Accounts:</div>
                    <AccountComponent />
                </div>
                <div className="h-half">
                    <div className="mb-4">Joint Accounts:</div>
                    <AccountComponent />
                </div>
            </div>
        </div>
    );
}

export default Home;