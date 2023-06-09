import React, { useEffect, useState } from 'react';
import '../styles/listUser.css';
import Nav from './Nav'
import fetchUser from '../services/UserService';

export const ListUsers = () => {

    const [users, setUsers] = useState('');


    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        const fetchAPI = async () => {
            let res = await fetchUser();
            if (res && res.data && res.data.data) {
                setUsers(
                    res.data.data
                )
            }
        }
        fetchAPI();
    }

    console.log(users)
    return (
        <div className='listUsers'>
            <Nav />
            <div className='content'>
                <div className='add-user'>
                    <button className='btn btn-outline-primary m-3'>
                        <i className="fa fa-plus me-2" aria-hidden="true"></i>
                        Add User
                    </button>
                    <div className='users'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {users && users.length &&
                                users.map((user, index) => {
                                    return (
                                        <tbody key={index} >
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <button className='btn btn-outline-warning me-3'>Edit</button>
                                                    <button className='btn btn-outline-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>


                                    )

                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
