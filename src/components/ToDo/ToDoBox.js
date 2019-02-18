import React from "react";
import { connect } from "react-redux";
import { setTodo } from "../../actions/setTodo";
import Button from "@material-ui/core/Button"

const styles = {
    boxContainer:{
        margin: '20px'
    },
    inputb: {
        border: '1px solid gray',
        padding: '10px',
        fontSize: '16px'
    },
    addButton:{
        margin: '10px'
    }
};

class ToDoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        value: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSend = this.onSend.bind(this);
        
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ value: e.target.value });
        
    }

    onSend(e) {
        e.preventDefault();
        const obj = {
        toDo: this.state.value,
        };
        this.props.setTodo(obj);
        this.setState({ value: "" });
    }

    render() {
        return (
        <div style={styles.boxContainer}>
            <form autoComplete="off" onSubmit={this.onSend}>
            <input style={styles.inputb}
                id="query"
                onChange={this.onChange}
                type="text"
                placeholder="Add Something To Do"
                value={this.state.value}
            />
            <Button style={styles.addButton} variant="contained" color="primary" type="submit" >Add</Button>
            </form>
        </div>
        );
    }
    }
    const mapStateToProps = state => {
        return {
            toDo: state.toDo
        };
    };
    const mapDispatchToProps = dispatch => {
        return {
            setTodo: toDo => {
                dispatch(setTodo(toDo));
            }
        };
    };
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ToDoBox);
