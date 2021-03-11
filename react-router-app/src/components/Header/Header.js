import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <div class='container-fluid'>
                <a class='navbar-brand' href='#'>
                    React Router
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarNav'>
                    <ul class='navbar-nav'>
                        <li class='nav-item'>
                            <NavLink
                                activeClassName='active'
                                to='/'
                                exact
                                className='nav-link '
                                aria-current='page'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li class='nav-item'>
                            <NavLink
                                activeClassName='active'
                                className='nav-link'
                                to='/posts'
                            >
                                Posts
                            </NavLink>
                        </li>
                        <li class='nav-item'>
                            <NavLink
                                activeClassName='active'
                                className='nav-link'
                                to='/contact'
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li class='nav-item'>
                            <NavLink
                                activeClassName='active'
                                className='nav-link'
                                to='/users'
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
