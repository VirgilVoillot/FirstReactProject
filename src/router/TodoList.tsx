import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export function TodoList(){

    const myToDoList = ["Learn React", "Improve Website","Add backEnd", "Enjoy job"];

    const jsxList = myToDoList.map((title) => {
        return <OneTodo todo={title}/>;
        });
        
    return <Card sx={{ maxWidth: '90%', margin:'auto' }}>
        ToDo List
        <CardContent>
            <Typography color="text.secondary">
                <List>
                    {jsxList}
                </List>
            </Typography>
        </CardContent>
    </Card>
    ;
}

class OneTodo extends React.Component<any,any> {
    render() {
        return <ListItem><ListItemText primary={this.props.todo} /></ListItem>;
    }
  }

export function AddTodo(){}