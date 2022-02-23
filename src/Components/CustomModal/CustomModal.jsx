import React from "react";
import { Modal, Input, Button } from "antd";

function CustomModal({ handleOk, handleCancel, isModalVisible, dataClick, handleDeleteMark }) {
  const title = dataClick && dataClick.record.fio;

  const modalContent = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };

  return (
    <>
      <Modal
        title={title}
        visible={isModalVisible}
        centered={true}
        onOk={()=>handleOk(dataClick)}
        onCancel={handleCancel}
        okText={"Сохранить"}
        cancelText={"Отмена"}
        okType={"default"}
        maskStyle={{ backgroundColor: "#002B60", opacity: 0.8 }}
        
      >
        {dataClick &&
        dataClick.item.marks &&
        dataClick.item.marks.length > 0 ? (
          <div>
            {dataClick.item.marks.map((item) => (
              <div key={item.key} style={modalContent}>
                <span style={{ minWidth: 100 }}>Оценка: </span>
                <Input disabled={item.isEdit !== true} value={item.mark} />
                {item.isDelete && (
                  <Button danger style={{ marginLeft: "10px" }} onClick={()=>handleDeleteMark(item)}>
                    Удалить
                  </Button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div style={modalContent}>
            <span style={{ minWidth: 200 }}>Введите оценку: </span>
            <Input />
          </div>
        )}
      </Modal>
    </>
  );
}

export default CustomModal;
