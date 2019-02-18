import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
    card: {
        minWidth: 275,
        margin: '20% 10%',
        borderRadius: '20px'
    },
    title: {
        fontSize: '20px',
    },
    btn: {
        justifyContent: 'center',
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div style={styles.card}>
                <Card>
                    <CardContent>
                    <div style={styles.title} color="textSecondary" gutterBottom>
                        Home from To Do List
                    </div>
                    </CardContent>
                    <CardActions style={styles.btn} >
                        <Button variant="contained" color="secondary" >
                            <Link to="/ToDo" style={styles.link}>Do a List</Link> 
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
};

export default Home;