import { Children, React, useState } from "react";
import { Table } from "antd";

const { Column } = Table;

function TableContent({ info }) {
  console.log(info);

  return (
    <>
      <h1>Журнал</h1>

      <Table dataSource={info.data && info.data}>
        {info.columns &&
          info.columns.map((item) => (
            <Column
              title={item.title === "fio" ? "ФИО ученика" : item.title}
              key={item.key}
              dataIndex={item.title}

              onCell={(record, rowIndex) => {
                let {key, fio, ...obj} = info.data[rowIndex];
                console.log(info.data[rowIndex])
                let qq
                Object.values(obj).map(item => !item.mark ? qq="qwe" : "asd")
                return qq
              }}
            />
          ))}

        {/* {info.columns && (
          <Column
            title={
              info.columns && info.columns.title === "fio"
                ? "ФИО ученика"
                : info.columns.title
            }
            key={info.columns.key}
            dataIndex={info.columns.title}
            render={(text, record, index) => {
              console.log(Object.keys(record));
            }}
          />
        )} */}
      </Table>
    </>
  );
}

export default TableContent;
