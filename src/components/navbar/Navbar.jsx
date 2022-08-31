import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div class="navbar bg-base-100 bg-blue-600 text-slate-400">
            <div class="flex-1" onClick={() => navigate('/')}>
                <a class="btn btn-ghost normal-case text-xl">Fatih Günaydın</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li onClick={() => navigate('/about')}><a>About</a></li>
                    <li><a>Profile</a></li>
                    <li tabindex="0">
                        <a>
                            Account
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2 bg-base-100">
                            <li onClick={()=>navigate('/register')}><a>Register</a></li>
                            <li onClick={() => navigate('/login')}><a>Login</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a class="justify-between">Profile</a></li>
                        <li><a>About</a></li>
                        <li><a>Register</a></li>
                        <li><a>Login</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
