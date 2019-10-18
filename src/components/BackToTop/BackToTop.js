import React from 'react';

import './BackToTop.scss';

const backToTop = props => {
    window.addEventListener('scroll',() => {
		if(window.scrollY > 50 ){
			document.querySelector(".btn_up").classList.add("show");
		}
		else document.querySelector(".btn_up").classList.remove("show");
    })
    return(
        <div className="btn_up" onClick={props.clicked}>
            <img src="./assets/images/btn_up.png" alt="" className="img-fluid d-block" />
        </div>
    )
}

export default backToTop;