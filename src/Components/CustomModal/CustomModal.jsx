import React, {useState} from "react";
import {Modal, Button} from "antd";

function CustomModal({handleOk, handleCancel, isModalVisible, dataClick}) {

    const title = dataClick && dataClick.record.fio

    return (
        <>
            <Modal
                title={title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Дата: </p>
                <p>Тема: </p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
}

export default CustomModal;
