import React, { useState } from "react";
import { Modal, Button } from "antd";

function CustomModal({handleOk, handleCancel, isModalVisible} ) {
  
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default CustomModal;
