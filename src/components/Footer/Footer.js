import React from 'react';

import './Footer.scss';

const footer = () => (
    <footer id="#footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list_social">
              <li>
                <a href="https://www.facebook.com/academy.ureka/" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="/assets/images/fb.png" alt="" className="img-fluid d-block mx-auto" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/academy.ureka/" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="/assets/images/youtube.png" alt="" className="img-fluid d-block mx-auto" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/academy.ureka/" target="_blank" rel="noopener noreferrer">
                  <figure>
                    <img src="/assets/images/instagram.png" alt="" className="img-fluid d-block mx-auto" />
                  </figure>
                </a>
              </li>
            </ul>
            <p>
              Trụ sở: Số 2 Đường 44 Thảo Điền, Quận 2 <br />
              Cơ sở 2: 39L Miếu Nổi, P. 3 Bình Thạnh             
            </p>
            <div className="d-none d-sm-block text-center">
                Điện thoại: +84 (0) 899 971 919 | Email: contact@uacademy.com
            </div>
            <div className="d-block d-sm-none text-center">
                Điện thoại: +84 (0) 899 971 919<br />
                Email: contact@uacademy.com
            </div>    
          </div>
        </div>
      </div>
    </footer>
)

export default footer;