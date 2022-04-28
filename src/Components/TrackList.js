import React from 'react'
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'
import track from '../img/track.png'

function TrackList() {
    return (
        <div className="track__list">
            <div className="trackList__top">
                <img src={track} alt="" />
                <p>Track Name<span>Track Name</span></p>
            </div>
            <div className="trackList__bottom">
                <i><BsFillVolumeUpFill /></i>
                <input type="range" />
                <i><BsMusicNoteList /></i>
                <i><FaDesktop /></i>
            </div>
        </div>
    )
}

export default TrackList