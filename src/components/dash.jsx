import './css/dash.css';
import { Table } from './table';

function Dash() {
    return (
        <div class="container">
            <h1>Dashboard</h1>
            <nav class="nav__cont">
                <ul class="nav">
                    <li class="nav__items ">
                        <a href="">Home</a>
                    </li>
                    <li class="nav__items ">
                        <a href="">Product</a>
                    </li>
                    <li class="nav__items ">
                        <a href="">Logout</a>
                    </li>
                </ul>
            </nav>
            <div class="content">
                <div class="item-1">
                    <Table />
                </div>
                <div class="item-2">

                </div>
            </div>
        </div>
    );
}
export { Dash };