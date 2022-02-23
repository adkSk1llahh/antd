import React from "react";
import {Modal} from "antd";

function CustomModal({handleOk, handleCancel, isModalVisible, dataClick}) {

    const title = dataClick && dataClick.record.fio

    return (
        <>
            <Modal
                title={title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                maskStyle={{backgroundColor: '#002B60', opacity: 0.8}}
            >
                <p>Дата: </p>
                <p>Тема: </p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
}

export default CustomModal;
