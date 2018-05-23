import React from 'react';
import axios from 'axios';

export default class NewUser extends React.Component {
    state = {
        name: '',
        surname: '',
        date_of_birth: ''
    };


    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value,
                [event.target.surname]: event.target.value,
                [event.target.date_of_birth]: event.target.value
            }
        );
    };


    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            surname: this.state.surname,
            date_of_birth: this.state.date_of_birth
        };

        axios
            .post('/user/create', {user: user}).then(res => {
            console.log(res);
            console.log(res.data);
            this.addNewUser(user);
        });
    };

    addNewUser(user) {
        this.setState({
            users: this.state.users.concat(user)
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User name:
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>

                <label>
                    User surname:
                    <input type="text" name="surname" onChange={this.handleChange}/>
                </label>

                <label>
                    User birth date:
                    <input type="text" name="date_of_birth" onChange={this.handleChange}/>
                </label>

                <button type="submit">Add user</button>
            </form>
        );
    }
}




