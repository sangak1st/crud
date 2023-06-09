import React from 'react'

export const Nav = () => {
    return (
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
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="button">
                        <i className="fa fa-search" aria-hidden="true">Search</i>
                    </button>
                </form>
            </div>
        </nav>
    )
}
export default Nav;