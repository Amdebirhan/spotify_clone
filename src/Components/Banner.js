import React from 'react'
import Artist from '../img/bass-guitar.jpg'
import Check from '../img/check.png'
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa'

function Banner() {
    return (
        <div className="banner">
            <img className='banner__image' src={Artist} alt="" />
            <div className="content">
                <div className="bread__crump">
                    <p>Home<span>/Popular Artist</span></p>
                    <i><FaEllipsisH /></i>
                </div>
                <div className="artist">
                    <div className="artist__left">
                        <div className="name">
                            <h2>A-Ha</h2>
                            <img src={Check} alt="" />
                        </div>
                        <p><i><FaHeadphones /></i>12,234<span> Monthly Listners</span></p>
                    </div>
                    <div className="artist__right">
                        <a href="#">Play</a>
                        <a href="#"><i><FaCheck /></i>Following</a>
                    </div>
                </div>
            </div>
            <div className="bottom__layer">

            </div>
        </div >
    )
}

export default Banner