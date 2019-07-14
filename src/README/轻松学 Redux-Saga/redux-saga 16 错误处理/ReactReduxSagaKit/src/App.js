import React, { Component } from 'react';
import PropTypes from "prop-types"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "antd";

import { increment, decrement } from "./modules/actions";
import { incrementAsync } from "./modules/actions/counter";
import { get_user } from "./modules/actions/user";

import './App.css';

class App extends Component {
    render(){
        const {incrementAsync, counter, get_user } = this.props;
        const { isFetching, error, user } = this.props.user;

        let data;
        if(error){
            data = error;
        }else if(isFetching){
            data = "Loading...";
        }else{
            data = user && user.data[0].name ? user.data[0].name : error;
        }

        return (
            <div className="container">
                <div>
                    <p className="APP-intro">{counter}</p>
                    <Button onClick={incrementAsync}>async</Button>
                    <br/>
                    <Button onClick={get_user}>Get User</Button>
                </div>
                <div>
                    <h1>{data}</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        user: state.user,
        counterAsyncNum: state.counterAsync,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({increment, decrement, incrementAsync, get_user}, dispatch);
App.propTypes = {
    counter: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
