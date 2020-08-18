import React from 'react'
import axios from 'axios'


class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios
        .get("http://localhost:5000/friends")
        .then((res) => {
            console.log(res)
            this.setState({
                friends: res.data
            })
        })
    }
}
