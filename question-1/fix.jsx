class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };

        this.changename = this.changename.bind(this)
    }

    //Binded the this function and changed this to setstate
    changeName() {
        this.setState = 'Charlie';
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}