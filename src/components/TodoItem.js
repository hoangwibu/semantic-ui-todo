import React from 'react';
import { List, Button } from 'semantic-ui-react';

function TodoItem({ todo, onDelete }) {
    return (
        <List.Item>
            <List.Content floated="left">
                <List.Header>{todo}</List.Header>
            </List.Content>
            <List.Content floated="right">
                <Button icon="trash" color="red" onClick={() => onDelete(todo)} />
            </List.Content>
        </List.Item>
    );
}

export default TodoItem;
