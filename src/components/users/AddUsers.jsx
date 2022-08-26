import React from 'react'
import Card from '../ui/Card';
import classes from './AddUsers.moduel.css'

function AddUsers(props) {
    function addUserHandler(event) {
        event.preventDefault();
    }
  return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">username</label>
            <input id='username' type="text" />
            <label htmlFor="age">Age (years)</label>
            <input id='age' type="text" />
            <button type="submit">AddUser</button>
        </form>
    </Card>
  )
}

export default AddUsers