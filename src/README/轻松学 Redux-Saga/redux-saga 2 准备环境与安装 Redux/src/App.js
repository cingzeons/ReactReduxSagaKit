import React, { Component } from 'react';
import PropTypes from "prop-types"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "antd";

import { increment, decrement } from "./modules/actions";
import './App.css';

class App extends Component {
    render(){
        const { counter, user, increment, decrement } = this.props;

        console.log(this.props);
        return (
            <div className="container">
                <h1 className="jumbotron-heading text-center">{ counter }</h1>
                <h1 className="jumbotron-heading text-center">{ user }</h1>
                <p className="text-center">
                    {/*<button onClick={() => dispatch(increment(counter))} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={() => dispatch(decrement(counter))} className="btn btn-primary mr-2">Decrease</button>*/}
                    <button onClick={() => increment(counter)} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={() => decrement(counter)} className="btn btn-primary mr-2">Decrease</button>
                </p>

                <hr/>

                <Button>Button</Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
        user: state.user.user,
    }
};

/*const mapDispatchToProps = dispatch => {
    return {
        onIncrement(num){
            dispatch({
                type: INCREMENT,
                counter: num + 1
            });
        },
        onDecrement(num){
            dispatch({
                type: DECREMENT,
                counter: num - 1
            });
        }
    }
}*/

const mapDispatchToProps = dispatch => bindActionCreators({increment, decrement}, dispatch);

App.propTypes = {
    counter: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
