import React from 'react';
import axios from 'axios';
import Jokes from './Jokes';

class JokesContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            jokes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3300/api/jokes')
            .then(res => {
                this.setState({
                    jokes: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.jokes.map(joke => {
                    return <Jokes key={joke.id} joke={joke} />
                })}
            </div>
        )
    }
}

export default JokesContainer;