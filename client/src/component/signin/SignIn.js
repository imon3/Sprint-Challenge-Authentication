import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/login', this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.history.push('/jokes')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Create Username' type='text' name='username' value={this.state.username} onChange={this.handleInput} />
                    <input placeholder='Create Password' type='text' name='password' value={this.state.password} onChange={this.handleInput} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignIn;