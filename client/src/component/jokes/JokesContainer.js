import React from 'react';
import axios from 'axios';
import Jokes from './Jokes';
import Authentication from '../auth/Authentication';

class JokesContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            jokes: []
        }
    }

    componentDidMount() {
        axios.get('/jokes')
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
                <h2>Jokes</h2>
                {this.state.jokes.map(joke => {
                    console.log(joke)
                    return <Jokes key={joke.id} joke={joke} />
                })}
            </div>
        )
    }
}

export default Authentication(JokesContainer);