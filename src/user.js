import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { withRouter } from "react-router-dom";

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            ELength: 0,
            currentPage: 1,
            profile: {},
            pages: [1, 2, 3, 4, 5]
        }
        this.getData = this.getData.bind(this)
    }
    componentDidMount() {
        console.log("Hi");

        this.getData();
    }

    getData = () => {
        debugger
        let i = this.props.location.state.detail
        this.setState({
            profile: i
        })

    }
    render() {
        return (
            <div className="list-head ">

                <nav className="navbar navbar-light" style={{ 'backgroundColor': '#e3f2fd' }}>
                    <h3>Data Peace</h3>
                </nav>
                <br />

                <div className="container">

                    <h3> {this.state.profile.first_name} {this.state.profile.last_name} </h3>

                    <table class="table">

                        <tbody>

                            <tr >
                                <td scope="row"> Company Name  </td>
                                <td scope="row"> {this.state.profile.company_name} </td>
                                {/* <td>{element.last_name} </td> */}

                            </tr><tr >
                                <td scope="row"> City  </td>
                                <td scope="row"> {this.state.profile.city} </td>
                                {/* <td>{element.last_name} </td> */}

                            </tr><tr >
                                <td scope="row"> State </td>
                                <td scope="row"> {this.state.profile.state} </td>
                                {/* <td>{element.last_name} </td> */}

                            </tr><tr >
                                <td scope="row"> ZIP </td>
                                <td scope="row"> {this.state.profile.zip} </td>
                                {/* <td>{element.last_name} </td> */}

                            </tr><tr >
                                <td scope="row"> Email  </td>
                                <td scope="row"> {this.state.profile.email} </td>
                                {/* <td>{element.last_name} </td> */}

                            </tr><tr >
                                <td scope="row"> Web</td>
                                <td scope="row"> {this.state.profile.web} </td>
                                {/* <td>{element.last_name} </td> */}

                            </tr><tr >
                                <td scope="row"> Age </td>
                                <td scope="row"> {this.state.profile.company_name} </td>
                                {/* <td>{element.last_name} </td> */}

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default UserComponent
