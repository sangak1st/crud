import React, { useEffect } from 'react';
import '../styles/listUser.css'

export const ListUsers = () => {

    useEffect(() => {
        let res = fetch(`https://reqres.in/api/users?page=2`)
    }, [])
    return (
        <div className='listUsers'>
            <nav className='navigation'>
                <h1 className='title'>ListUser</h1>
                <div className='navbar'>
                    <div className='logout'>
                        <button className='btn btn-outline-primary mb-3'>
                            <i
                                className="fa fa-sign-out"
                                style={{ marginRight: '5px' }}
                                aria-hidden="true"
                            >
                                LogOut
                            </i>

                        </button>
                    </div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="button">
                            <i class="fa fa-search" aria-hidden="true">Search</i>
                        </button>
                    </form>
                </div>
            </nav>

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
                                    <th>id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Avata</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nguyễn</td>
                                    <td>Sang</td>
                                    <td>sangak1st@gmail.com</td>
                                    <td>abc</td>
                                    <td>
                                        <button className='btn btn-outline-warning me-3'>Edit</button>
                                        <button className='btn btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mạnh</td>
                                    <td>Sang</td>
                                    <td>sang166464@huce.edu.vn</td>
                                    <td>abc</td>
                                    <td>
                                        <button className='btn btn-outline-warning me-3'>Edit</button>
                                        <button className='btn btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
