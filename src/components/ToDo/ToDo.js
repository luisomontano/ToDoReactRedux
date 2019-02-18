import React from "react";
import { connect } from "react-redux";
import ToDoBox from './ToDoBox'
import ToDoList from './ToDoList'

const styles = {
    ToDoCard: {
        background: 'white',
        height: '300px',
        width: '600px',
        margin: '3em auto',
        border: '1px solid gray',
        borderRadius: '.2em',
        boxShadow: 'rgb(85, 85, 85) 0px 1.5em 1.9em -1em ',
        overflow: 'hidden',
        transition: 'transform .8s cubic-bezier(.63,-0.32,.4,1.39)'
    },
    
};

class ToDo extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    
    render(){
        return(
            <div style={styles.ToDoCard}>
                <ToDoBox style={styles.box} />
                <ToDoList />
            </div>
        )
    }
};
const mapStateToProps = state => {
    return {
        toDo: state.toDo
    };
};
export default connect(mapStateToProps)(ToDo);





