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
            pages: [1, 2, 3, 4, 5]
        }
        this.getData = this.getData.bind(this)
    }
    componentWillReceiveProps() {
        this.getData();
    }
   
    getData = () => {
        var i = this
        console.log("sn");
        axios.get('https://demo9197058.mockable.io/users')
            .then(function (response) {
                console.log(response);
                // if (response.data) {
                i.setState({
                    entries: response.data,
                    filtered: response.data,
                    ELength: response.data.length
                }, () => {
                    i.filterPageContent(1);
                }

                )
                // }
            })

    }
    filterPageContent = (edx) => {
        let i = (edx - 1) * 5;
        var fa = this.state.entries
        if (this.state.entries) {
            if (i == 0) i = 5
            fa = fa.slice(i, i + 5)
            this.setState({ filtered: fa })
        }
    }

    AllInfo = (element) => {
        this.props.history.push(
            {
                pathname: `/user/+${element.id}`,
                state: { detail: element }
            })

    }
    searchByName = (name) => {
        let filtered = this.state.entries
        filtered = filtered.filter((entry) =>
            entry.first_name.toLowerCase().includes(name)
        );
        this.setState({
            filtered
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
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Name" onChange={(e) => this.searchByName(e.target.value)} aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name </th>
                                <th scope="col">Last Name </th>
                                <th scope="col">Company Name</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Zip</th>
                                <th scope="col">Email</th>
                                <th scope="col">Web</th>
                                <th scope="col">Age </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filtered && this.state.filtered.map((element) =>
                                <tr onClick={() => this.AllInfo(element)} >
                                    <th scope="row"> {element.first_name} </th>
                                    <td>{element.last_name} </td>
                                    <td>{element.company_name} </td>
                                    <td>{element.city} </td>
                                    <td>{element.state} </td>
                                    <td>{element.zip} </td>
                                    <td>{element.email} </td>
                                    <td>{element.web} </td>
                                    <td>{element.age}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {this.state.pages && this.state.pages.map((edx) =>

                                <li class="page-item"><a class="page-link" onClick={() => this.filterPageContent(edx)} > {edx} </a></li>
                            )}

                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default UserComponent
