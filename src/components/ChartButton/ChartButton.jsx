import React, { useState } from 'react';
import DisplayChart from '../DisplayChart';
import Modal from '../Modal/Modal';
import './ChartButton.css'

const ChartButton = (props) => {

    const[hideShow,setHideShow]=useState(false)

    const handleHideShow = () =>{
        setHideShow(!hideShow)
    }


    return(
        <div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1 onClick={handleHideShow}>Show Chart</h1>
            </a>
        <Modal onClick={handleHideShow}hideshow={hideShow}><DisplayChart/></Modal>
        </div>
    )
}
export default ChartButton