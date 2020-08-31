import React from 'react';

function Home() {
    return (
        <div className="flex flex-row h-screen">
            <div className="flex justify-center bg-gray-300 pt-4 w-24">
                HOME
            </div>
            <div className="flex flex-col w-full h-screen p-10">
                <div className="h-half">Accounts</div>
                <div className="h-half">Joint Accounts</div>
            </div>
        </div>

    );
}

export default Home;