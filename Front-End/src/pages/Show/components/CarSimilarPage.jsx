import React, { Component } from "react";
import { debounce } from "lodash";
import { connect } from "react-redux";
import { loadCars } from "../../../redux/actions/carActions";
import CarSimilar from "./CarSimilar";
//ใช้ความสามารถของ browserHistory ในการสั่งเปลี่ยน url ไปยังเพจที่ต้องการ
import { browserHistory } from "react-router";

class CarSimilarPage extends Component {
  //มีการใช้ Modal ของ reactstrap ซึ่งจะต้องเก็บ State การแสดง modal ไว้
  state = {
    modal: false,
    modalTitle: "",
  };

  //สั่ง dispach ฟังก์ชัน cars ดึงเอาข้อมูลรายชื่อรถ
  componentDidMount() {
    this.props.dispatch(loadCars());
  }

  render() {
    const { cars } = this.props;

    //ถ้ามี error
    if (cars.isRejected) {
      return <div>{cars.data}</div>;
    }

    //debounce เป็นการหน่วงการส่งตัวอักษรเป็นฟังก์ชันของ lodash ทำเพื่อเรียกใช้การ filter ข้อมูล
    const carSearch = debounce((term) => {
      this.handleSearch(term);
    }, 500);

    return (
      <div>
        {/* แสดงข้อความ Loading ก่อน */}
        {cars.isLoading && (
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <div className="row-12">
          <CarSimilar data={cars.data} buttonDetail={this.handleDetail} />
        </div>
      </div>
    );
  }

  //ฟังก์ชันแสดงหน้าจอรายละเอียดงานซ่อม
  //โดยใช้ browserHistory สั่งเปลี่ยนไปยัง route ที่ต้องการ
  handleDetail = (id) => {
    browserHistory.push(`/showcar/detail/${id}`);
  };

  //ฟังก์ชัน filter ข้อมูล
  handleSearch = (term) => {
    this.props.dispatch(loadCars(term));
  };
}

function mapStateToProps(state) {
  return {
    cars: state.carReducers.cars,
    car: state.carReducers.car,
    carDelete: state.carReducers.carDelete,
    carSave: state.carReducers.carSave,
  };
}

export default connect(mapStateToProps)(CarSimilarPage);
