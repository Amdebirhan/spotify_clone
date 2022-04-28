import React from 'react'
import { PlayList } from './PlayList'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import '../Styles/LeftMenu.css'
import TrackList from './TrackList'

function MenuPlayList() {
    return (
        <div className="playlist__container">
            <div className="name__container">
                <p>Playlist</p>
                <i><FaPlus /></i>
            </div>
            <div className="playlist__scroll">
                {
                    PlayList && PlayList.map((list) => (
                        <div className="playlists" key={list.id}>
                            <i><BsMusicNoteList /></i>
                            <p className='list' >{list.name}</p>
                            <i className='trash' ><BsTrash /></i>
                        </div>
                    ))
                }

            </div>
        </div >

    )
}

export default MenuPlayList