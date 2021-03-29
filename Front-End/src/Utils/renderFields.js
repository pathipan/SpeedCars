import React from "react";
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
const renderField = ({
  input,
  label,
  type,
  textarea,
  autoFocus,
  title,
  meta: { touched, error },
}) => {
  //สำหรับรูปแบบ Field ที่เป็น TextArea
  const textareaType = (
    <textarea {...input} placeholder={title} className="form-control" row="3" />
  );

  //สำหรับรูปแบบ Field ที่เป็น TextBox
  const inputType = (
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control"
      autoFocus={autoFocus}
    />
  );
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label"><span style={{color:'red'}}>* </span>{title}</label>
      <div className="col-sm-9">
        {/* ตรวจสอบก่อนว่า มีการส่ง textarea หรือเปล่า*/}
        {textarea ? textareaType : inputType}

        {/* ส่วนนี้จะแสดงข้อความ error ที่ได้จากการ validate */}
        {touched && error && <small className="text-danger">{error}</small>}
      </div>
    </div>
  );
};
export default renderField;
