import React, { Component } from "react";
import "../../../../css/style.css";
import "react-slideshow-image/dist/styles.css";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router";
import { Tooltip } from "reactstrap";

class CarSpecial extends Component {
  render() {
    //Destructuring ค่า props ที่ส่งมาจาก src/pages/Car.js
    const { data, buttonDetail } = this.props;

    return (
      <div className="container row feature">
        {data &&
          data.map((e) => {
            if (e.id_type == 3) {
              return (
                <div
                  className="feature-row feature-col mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  id="main1"
                  key={e.id}
                >
                  <div className="row-12">
                    <div className="product-item">
                      <Link onClick={() => buttonDetail(e.id)}>
                        <div className="product-title">
                          <a href="">
                            {e.year} {e.brand} {e.generation} {e.car_makeover}
                          </a>
                        </div>
                        <div className="product-image">
                          <a href="">
                            <img src={e.image1} alt="Product Image" />
                          </a>
                          <div className="product-action">
                            <a href="">
                              <i className="fa fa-heart" />
                            </a>
                            <a href="">
                              <i className="fa fa-search" />
                            </a>
                          </div>
                        </div>
                      </Link>
                      <div className="product-price">
                        <div className="text-center">
                          <h5>ราคา 1,234,567 บาท</h5>
                        </div>
                        <div className="text-center">
                          <a
                            href="https://web.facebook.com/?_rdc=1&_rdr"
                            className="btn wishlist"
                          >
                            ติดต่อผู้ขาย
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    );
  }
}
export default CarSpecial;
