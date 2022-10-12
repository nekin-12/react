import React, { useState, useEffect } from 'react';

function TableProject() {

    const [item, setItem] = useState([])

    const callApi = () => {
        fetch('https://api.randomuser.me/')
            .then((response) => console.log(response.json()))
            // .then((item) => setItem(item.all))
            .catch((error) => console.log(error));
    }

    const user = [{   
        results: []

    }]
    

    useEffect(() => {
        callApi()
    }, [])

    return (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {user.map((item)=>
                    <tr>
                        <td>{item.results}</td>
                        <td></td>
                    </tr>
                    )
                }
              </td>

            </tr>
          </tbody>
        </table>
      );

}

export { TableProject };