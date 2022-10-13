import React, { useState, useEffect } from 'react';
import './css/table.css';

function TableProject() {
  const axios = require('axios').default;

  const [user, userSet] = useState('')

  const [load, loadSet] = useState(true)

  const getAllUser = () => {
    axios.get('https://api.randomuser.me/')
      .then(function (response) {
        console.log(response.data.results[0]);
        const user = response.data.results[0];
        userSet(user);
        loadSet(false)

      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      })
  }

  useEffect(() => {
    getAllUser();
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>
            <tr>
              {load ? (
                <div>loading...</div>
              ) : (
                <div>
                  <td className='cellId'>{user.id.name}</td>
                </div>
              )}
            </tr>
          </td>
          <td>
            <tr>
              {load ? (
                <div>loading...</div>
              ) : (
                <div>
                  <td className='cellNameFirst'>{user.name.first}</td>
                </div>
              )}
            </tr>
          </td>
          <td>
            <tr>
              {load ? (
                <div>loading...</div>
              ) : (
                <div>
                  <td className='cellNameLast'>{user.name.last}</td>
                </div>
              )}
            </tr>
          </td>
          <td>
            <tr>
              {load ? (
                <div>loading...</div>
              ) : (
                <div>
                  <td className='cellEmail'>{user.email}</td>
                </div>
              )}
            </tr>
          </td>
          <td>
            <tr>
              {load ? (
                <div>loading...</div>
              ) : (
                <div>
                  <td className='cellImg'><img src={user.picture.thumbnail} /></td>
                </div>
              )}
            </tr>
          </td>

        </tr>
      </tbody>
    </table>
  );
}
export { TableProject };