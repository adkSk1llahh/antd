import { React, useState } from "react";
import { Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../CustomModal/CustomModal.jsx";

function TableContent({
  info,
  showModal,
  handleOk,
  handleCancel,
  isModalVisible,
}) {
  const dataSource =
    info.data &&
    info.data.map((item) => {
      return item;
    });

  const columns =
    info.columns &&
    info.columns.map((item) => {
      const { title, key } = item;
      return {
        title: title === "fio" ? "ФИО ученика" : title,
        key: key,
        dataIndex: title === "fio" ? title : key,

        render: (item) => {
          if (typeof item === "string") {
            return item;
          } else {
            return (
              <div onClick={showModal}>
                {" "}
                {item.marks && item.marks.length > 0 ? (
                  item.marks[0].mark
                ) : (
                  <PlusOutlined />
                )}{" "}
              </div>
            );
          }
        },

        // onCell: (data, index) => {
        //   return {
        //     onClick: (event) => {
        //       console.log(data);
        //     },
        //   };
        // },
      };
    });

  return (
    <>
      <h1> Журнал </h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}

      />
      <CustomModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
    </>
  );
}

export default TableContent;
