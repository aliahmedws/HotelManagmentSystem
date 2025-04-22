import React , {useState, useEffect, Fragment} from 'react'
import Table from 'react-bootstrap/Table';

const GUEST = () => {

    const guestData = [
        {
            Id: 1,
            FullName: 'Ismail Kayani',
            PhoneNumber: '03145797747',
            Email: 'kayaniIsmail16@gmail.com',
            CheckInDate: '2025-04-20',
            CheckOutDate: '2025-04-22',
        },
        {
            Id: 2,
            FullName: 'Areeba Shah',
            PhoneNumber: '03001234567',
            Email: 'areeba.shah@example.com',
            CheckInDate: '2025-04-19',
            CheckOutDate: '2025-04-21',
        },
        {
            Id: 3,
            FullName: 'Hamza Nadeem',
            PhoneNumber: '03219876543',
            Email: 'hamza.nadeem@example.com',
            CheckInDate: '2025-04-18',
            CheckOutDate: '2025-04-20',
        }
    ];

    //Here we will store for api response for all Guest 
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(guestData);
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
                        <td>{item.FullName}</td>
                        <td>{item.PhoneNumber}</td>
                        <td>{item.Email}</td>
                        <td>{item.CheckInDate}</td>
                        <td>{item.CheckOutDate}</td>
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