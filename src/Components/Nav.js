import React from 'react';


import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/Menu';
import Settings from '@material-ui/icons/Settings';
import Tune from '@material-ui/icons/Tune';
import Help from '@material-ui/icons/Help';
import Apps from '@material-ui/icons/Apps';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Nav.css';
import ShowIcons from './ShowIcons';



export default function Nav() {
    return <div className='nav'>
        <div className='left-container'>
            <Menu />
            <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
        </div>
        <div className='right-container'>
        <div className='search-box'>
                <SearchIcon className='search-icon'/>
                <input type="text" placeholder='Search mail' />
                <Tune className='tune-icon'/>

                </div>
                <div className='last-container'>
                <ShowIcons Icons={Help} />
                <ShowIcons Icons={Settings} />
                <ShowIcons Icons={Apps} />
                <ShowIcons Icons={AccountCircle} />
                </div>
        </div>


    </div>;
}
;