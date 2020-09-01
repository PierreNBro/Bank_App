import React from 'react';
import AccountComponent from '../components/account.component';

function Home() {
    return (
        <div className="flex flex-row h-screen">
            <div className="flex justify-center bg-gray-300 pt-4 w-24">
                HOME
            </div>
            <div className="flex flex-col w-full h-screen p-10">
                <div className="flex flex-col justify-start h-half">
                    <div className="mb-4">Accounts:</div>
                    <div className="flex flex-row flex-wrap justify-between overflow-scroll">
                        <AccountComponent accountId="1234" balance="50,000.00" />
                        <AccountComponent accountId="7474" balance="20,000.00" />
                        <AccountComponent accountId="7555" balance="25,000.00" />
                    </div>
                </div>
                <div className="flex flex-col flex-wrap justify-start h-half">
                    <div className="mb-4">Joint Accounts:</div>
                    <div className="flex flex-row justify-between">
                        <AccountComponent accountId="4567" balance="200.00" />
                        <AccountComponent accountId="8907" balance="1,500.00" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;