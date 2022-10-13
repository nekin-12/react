import './css/dash.css';
import { Link } from "react-router-dom";
import { TableProject } from './table';

function Dash() {
    return (
        <div class="container">
            <h1>Dashboard</h1>
            <nav class="nav__cont">
                <ul class="nav">
                    <li class="nav__items ">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav__items ">
                        <Link to="/">Users</Link>
                    </li>
                    <li class="nav__items ">
                        <Link to="form">Logout</Link>
                    </li>
                </ul>
            </nav>
            <div class="content">
                <div class="item-1">
                    <h1>People of the day</h1>
                    <div class='contentItem-1'>
                        <TableProject />
                    </div>
                </div>
                <div class="item-2">

                </div>
            </div>
        </div>
    );
}
export { Dash };