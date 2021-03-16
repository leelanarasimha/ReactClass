import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div>
            <nav class='navbar navbar-expand-lg navbar-light bg-light'>
                <div class='container-fluid'>
                    <a class='navbar-brand' href='#'>
                        React Redux
                    </a>
                    <button
                        class='navbar-toggler'
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
                                <Link class='nav-link' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link class='nav-link' to='/posts'>
                                    Posts
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
