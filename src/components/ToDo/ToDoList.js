import React from "react";
import { connect } from "react-redux";

const styles = {
    container: {
        display: "flex",
        alignItems: "center"
    }
};

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const toDo = this.props.toDo;
        const template = toDo ? (
            toDo.map((item, i) => {
                return (
                <div style={styles.container} key={i}>
                    <ul style={styles.box}>
                        <li>
                            {item.toDo}
                        </li>
                    </ul>
                </div>
                );
            })
        ) : (
            <div>Nothing to Do</div>
        );
        return template;
    }
}

const mapStateToProps = state => {
    return {
        toDo: state.toDo
    };
};
export default connect(mapStateToProps)(ToDoList);
