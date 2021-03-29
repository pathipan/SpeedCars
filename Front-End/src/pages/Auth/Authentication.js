import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//รูปแบบการ export ทำตามนี้เลยครับ
export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    //เริ่มแรกเลยต้องเช็ค props ที่เรา map ไว้กับ authReducers 
    //src/redux/reducers / authReducers.js
    //ว่า authenticated เป็น true หรือเปล่า ถ้าไม่ใช่ก็  redirect ไปหน้าแรก
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    //เช็ค props authenticated ไว้ที่นี้ด้วยนะครับ 
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      // รูปแบบการทำเป็น HOC เราจะต้องเอา ส่ง ComposedComponent กลับไป
      // พร้อม props เดิมของ component นั้นๆ ด้วย
      return <ComposedComponent {...this.props} />
    }
  }

  //map เข้ากับ authReducers
  function mapStateToProps(state) {
    return {
      authenticated: state.authReducers.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}