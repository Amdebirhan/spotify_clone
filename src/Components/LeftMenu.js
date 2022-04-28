import React from 'react'
import { SiSpotify } from 'react-icons/si'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

import '../Styles/LeftMenu.css'
import { MenuList } from './MenuList'
import Menu from './Menu'
import MenuPlayList from './MenuPlayList'
import { PlayList } from './PlayList'
import TrackList from './TrackList'

function LeftMenu() {
    return (
        <div className="left__menu">
            <div className="logo__container">
                <i><SiSpotify /></i>
                <h2>Spotify</h2>
                <i><HiDotsHorizontal /></i>
            </div>
            <div className="search__box">
                <input type={'text'} placeholder={'Search...'} />
                <i className='search__icon'><BiSearch /></i>
            </div>
            <Menu title={'Menu'} menuObject={MenuList} />
            <MenuPlayList />
            <TrackList />
        </div>
    )
}

export default LeftMenu