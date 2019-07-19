import React from 'react';
import Featured from './featured';
import Matches from './matches';
import MeetPlayer from './meetPlayer';
import Promotion from './promotion';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayer/>
            <Promotion/>
        </div>
    );
};

export default Home;