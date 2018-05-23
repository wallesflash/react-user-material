import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class User_list extends React.Component {
    state = {
        users: [],
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

    // addNewUser(user) {
    //     console.log(user);
    //
    //     this.setState({
    //         users: this.state.users.concat(user)
    //     });
    // }

    handleSubmit = event => {
        event.preventDefault();

        const user_data = {
            name: this.state.name,
            surname: this.state.surname,
            date_of_birth: this.state.date_of_birth
        };

        axios
            .post('/user/create', {user: user_data})
            .then(
                // to samo
               this.updateList
                // this.updateList
            );

        event.target.name.value =  "",
        event.target.surname.value =  "",
        event.target.date_of_birth.value = ""


    };

    updateList = (res) => {
        console.log(res);
        this.setState({ users: res.data });

    };

    componentDidMount() {
        this.reloadList();
    };

    reloadList = () => {
        axios.get('/user/list').then(res => {
            console.log(res);
            this.setState({ users: res.data });
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>


                     <TextField label="User name" type="text" name="name" onChange={this.handleChange}></TextField>
                     <TextField label="User surname" type="text" name="surname" onChange={this.handleChange}></TextField>
                     <TextField label="Birth date" type="text" name="date_of_birth" onChange={this.handleChange}></TextField>

                    <Button variant='raised' color='primary' type="submit">Add user</Button>
                </form>
                <ul>
                    { this.state.users.map(user =>
                        <li key={user.id}>
                            { user.name + " " + user.surname}
                        </li>
                    )}
                </ul>
            </div>

        );
    };
}



