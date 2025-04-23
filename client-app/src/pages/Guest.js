import React , {useState, useEffect, Fragment} from 'react'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import { Table } from 'antd';

const GUEST = () => {

    //Here we will store for api response for all Guest 
    const [data, setData] = useState([]);

    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        key: "id",
        hidden: true,
      },
      {
        title: "Name",
        dataIndex: "fullName",
        key: "fullName",
        align: "center",
      },
      {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        align: "center",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        align: "center",
      },
      {
        title: "Check-In Date",
        dataIndex: "checkInDate",
        key: "checkInDate",
        align: "center",
      },
      {
        title: "Check-Out Date",
        dataIndex: "checkOutDate",
        key: "checkOutDate",
        align: "center",
      },
      {
        title: "Action",
        dataIndex: "action",
        align: "center",
        key: "action",
        render: (_, record) =>
          data.length >= 1 ? (
            <div>
              <EditOutlined
                style={{ color: "green" }}
                onClick={() => handleEdit(record)}
              ></EditOutlined>
  
              <DeleteOutlined
                style={{ color: "red", marginLeft: 12 }}
                onClick={() => {
                  handleDelete(record);
                }}
              ></DeleteOutlined>
            </div>
          ) : null,
      },
    ].filter((item) => !item.hidden);
    const handleEdit = (record) => {
      // console.log(record);
      // navigate("form/" + record.id, { state: { record: record } });
    };
  
    const handleDelete = (value) => {
      // Modal.confirm({
      //   title: "Are you sure you want to delete: " + value.title,
      //   onOk: () => {
      //     fetch(window.ApiBasePath + "/booking/" + value.id, {
      //       method: "DELETE",
      //     }).then((res) => res.json);
      //     forceUpdate();
      //   },
      // });
    };
    useEffect(() => {
        fetch(window.ApiBasePath + "/Guest")
            .then((res) => res.json())
            .then((result) => {
                const list = result || [];
                setData(list);
            });
    }, [])

    return(
        <>
           <Table
                pagination={{ pageSize: 4 }}
                columns={columns}
                //loading={dataFetched? false : true}
                key={data.id}
                dataSource={data}
              />
        </>
    )
}

export default GUEST;