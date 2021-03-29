import React, { Component } from "react";
import "../../../../css/style.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router";
import {
  MDBIcon,
  MDBAnimation,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
} from "mdbreact";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { Button } from "reactstrap";

class CarFeatured extends Component {

  state = {
    modal2: false,
    modal3: false,

  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    //Destructuring ค่า props ที่ส่งมาจาก src/pages/Car.js
    const { data, buttonDetail } = this.props;
    
    return (
      <div className="container row feature">
        {data &&
          data.map((e) => {
            if (e.id_type == 1) {
              return (
                <div
                  className="feature-row feature-col border mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
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
                          <Button color="#ff7b00"
                            className="border-warning" onClick={this.toggle(2)}>
                            ติดต่อผู้ขาย
                          </Button>

                          <MDBModal
                            isOpen={this.state.modal2}
                            toggle={this.toggle(2)}
                            side
                            position="top-right"
                          >
                            <MDBModalHeader
                              toggle={this.toggle(2)}
                              style={{
                                backgroundColor: "orange",
                                color: "white",
                              }}
                            >
                              สามารถติดต่อได้ที่...
                            </MDBModalHeader>
                            <MDBModalBody>
                              <Card.Body>
                                <Card.Title className="text-left pink-text">
                                  <h3 className="text-center">
                                    **คุณ {data.seller_name}**
                                  </h3>
                                </Card.Title>
                                <hr color="red" style={{ width: "80%" }} />
                                <Card.Text className="text-left ">
                                  <h5>
                                    <MDBIcon icon="phone red-text" />{" "}
                                    {data.seller_phone}
                                    <br></br>
                                  </h5>
                                  <h5>
                                    <MDBIcon fab icon="facebook red-text" />{" "}
                                    {data.seller_facebook}
                                    <br></br>
                                  </h5>
                                  <h5>
                                    <MDBIcon fab icon="line red-text" />{" "}
                                    {data.seller_line}
                                    <br></br>
                                  </h5>
                                </Card.Text>
                              </Card.Body>
                            </MDBModalBody>
                          </MDBModal>

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
export default CarFea