import React, { useEffect } from 'react'
import Banner from './Banner'
import { FaUsers } from 'react-icons/fa'
import '../Styles/MainContainer.css'
import { AudioList } from './AudioList'

function MainContainer() {
    useEffect(() => {
        const allLi = document.querySelector('.menu__list ul').querySelectorAll('li');
        function changeMenuActive() {
            allLi.forEach(n => n.classList.remove('active'));
            this.classList.add("active")
        }
        allLi.forEach(n => n.addEventListener('click', changeMenuActive));
    }, [])
    return (
        <div className="main__container">
            <Banner />
            <div className="menu__list">
                <ul>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Popular</a></li>
                </ul>
                <p><i><FaUsers /></i> 12.3M <span>Followers</span></p>
            </div>
            <AudioList />
        </div>
    )
}

export default MainContainer