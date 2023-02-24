import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import {FaArrowCircleUp} from 'react-icons/fa';
// import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<div id="goToTop" className="hidden-xs hidden-sm" style={{display:"block"}}>
	<span className="fa fa-angle-up" onClick={scrollToTop}
	style={{  position:"relative",

    width:"42px",
    height:"42px",
    lineHeight:"38px",
    margin:"3px",
    color:"#333e48",
    borderRadius:"50%",
    textAlign:"center",
    overflow:"hidden",
    backgroundColor:"#f2f5f7",
    border:'1px solid #a4d5dc',display: visible ? 'block' : 'none'}}></span>
     {/* <div id="goToTop" className="hidden-xs hidden-sm" style={{display:"block"}}>
        <span onClick={{scrollToTop}} className="fa fa-angle-up"></span></div> */}
	</div>
);
}

export default ScrollButton;



