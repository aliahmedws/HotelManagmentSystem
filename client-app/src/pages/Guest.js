import React , {useState, useEffect, Fragment} from 'react'
import Table from 'react-bootstrap/Table';

const GUEST = () => {

    //Here we will store for api response for all Guest 
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(window.ApiBasePath + "/Guest")
            .then((res) => res.json())
            .then((result) => {
                const list = result || [];
                setData(list);
            });
    }, [])

    return(
        <Fragment>
            <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
                data.map((item, index) => {
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>    
                        <td>{item.fullName}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                        <td>{item.checkInDate}</td>
                        <td>{item.checkOutDate}</td>
                      </tr>
                    );
                })
                :
                'Loading...'
        }
       
        
      </tbody>
    </Table>
        </Fragment>
    )
}

export default GUEST;