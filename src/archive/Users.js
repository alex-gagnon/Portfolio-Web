import React, {Component} from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    componentDidMount() {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        )
    }
}

export default Users;