import React from 'react';

import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
// import btn_search from '../../assets/images/btn_search.png';
import NavigationItems from './NavigationItems/NavigationItems';
import FontAwesome from '../FontAwesome/FontAwesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';



const nav = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <figure>
            <img src='/assets/images/logo.png' alt="" className="img-fluid mx-auto" />
          </figure>
        </Link>
        <div className="phone_serch_mb d-flex d-sm-flex d-md-none align-items-center">
          <div className="sodt">
            <button type="button" className="goidt" data-toggle="modal" data-target="#call_confirmation">
              <FontAwesome icon={faPhone}/>
            </button>
          </div>
          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <figure>
              <img src="/assets/images/btn_search.png" alt="" className="img-fluid mx-auto d-block" />
            </figure>
          </button>
          <div className="dropdown-menu">
              <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavigationItems />
            <div className="d-none d-sm-none d-md-flex align-items-center position-relative">
                <div className="sodt">
                    <button type="button" className="goidt" data-toggle="modal" data-target="#call_confirmation">
                        +84 (0) 899 971 919
                    </button>
                </div>
                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <figure>
                    <img src="/assets/images/btn_search.png" alt="" className="img-fluid mx-auto d-block" />
                </figure>
                </button>
                <div className="dropdown-menu">
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}
export default nav;