import {Children, React, useState} from "react";
import {Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const {Column} = Table;

function TableContent({info}) {

    const dataSource = info.data && info.data.map((item) => {
        return item
    })

    const columns = info.columns && info.columns.map(item => {
        const {title, key} = item
        return {
            title: title === "fio" ? 'ФИО ученика' : title,
            key: key,
            dataIndex: title === 'fio' ? title : key,

            // render: (text, record, index) => {
            //     // const {key, fio, ...obj} = record
            //     // for (const [key, value] of Object.entries(obj)) {
            //     //     return text ? text : value.marks.length > 0 ? "Оценка" : <PlusOutlined />
            //     // }
            //
            //     return record ? text : 1234
            //
            // }

            // render: (item, text) => text ? text : Object.values(item).marks > 0 ? "qwe" : <PlusOutlined />
            render: (item) => {
                const items = []
                if (typeof item === 'object') {
                    items.push(item)
                }
                console.log(items)
            }
        }
    })

    // console.log(dataSource)
    // console.log(columns)

    return (
        <>
            <h1>Журнал</h1>
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
        </>
    );
}

export default TableContent;
