import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import './single.scss';

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>

                        <div className="item">
                            <img src="https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="itemImg" />

                            <div className="details">
                                <h1 className="itemTitle">Mubashira Megh</h1>

                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+88 017973635</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">Nobodoy Housing, Dhaka-1207</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">Bangladesh</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <Chart aspect={3 / 1} title="Users Spending ( Last 6 Month )" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Single;