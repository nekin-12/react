import './css/dash.css';
import { TableProject } from './table';

function Dash() {
    return (
        <div class="container">
            <h1>Dashboard</h1>
            <nav class="nav__cont">
                <ul class="nav">
                    <li class="nav__items ">
                        <div>
                            <a href="dash">Home</a>
                        </div>
                    </li>
                    <li class="nav__items ">
                        <a href="">Product</a>
                    </li>
                    <li class="nav__items ">
                        <a href="form.jsx">Logout</a>
                    </li>
                </ul>
            </nav>
            <div class="content">
                <div class="item-1">
                    <TableProject />
                </div>
                <div class="item-2">

                </div>
            </div>
        </div>
    );
}
export { Dash };