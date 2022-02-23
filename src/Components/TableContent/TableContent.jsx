import React from "react";
import {Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import CustomModal from "../CustomModal/CustomModal.jsx";

function TableContent({
                          info,
                          showModal,
                          handleOk,
                          handleCancel,
                          isModalVisible,
                          dataClick,
                      }) {


    const dataSource =
        info.data &&
        info.data.map((item) => {
            return item;
        });

    const columns =
        info.columns &&
        info.columns.map((item) => {
            const {title, key} = item;
            return {
                title: () => {
                    return <span style={tableHeaderStyle}>{title === "fio" ? "ФИО ученика" : title}</span>
                },
                key: key,
                dataIndex: title === "fio" ? title : key,
                render: (item, record) => {
                    if (typeof item === "string") {
                        return item;
                    } else {
                        return (
                            <>
                                <div onClick={(e) => showModal(item, record)} style={contentStyle}>
                                    {item.marks && item.marks.length > 0 ? (
                                        <span style={iconStyle}>{item.marks[0].mark}</span>
                                    ) : (
                                        <PlusOutlined style={iconStyle}/>
                                    )}
                                </div>
                            </>

                        );
                    }
                },
            };
        });

    const title = {
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        color: "rgba(0, 0, 0, 0.85)"
    }

    const tableHeaderStyle = {
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "22px",
        color: "rgba(0, 0, 0, 0.85)",
        display: "block",
        textAlign: "center"
    };

    const contentStyle = {
        display: "flex",
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    }

    const iconStyle = {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        width: "34px",
        height: "34px",
        cursor: "pointer",
        color: "#1890FF"
    }

    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                title={() => {
                    return <span style={title}> Журнал </span>
                }}
            />
            <CustomModal
                handleOk={handleOk}
                handleCancel={handleCancel}
                isModalVisible={isModalVisible}
                dataClick={dataClick}
            />
        </>
    );
}

export default TableContent;
