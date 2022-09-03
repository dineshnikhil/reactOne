import React, { useState } from 'react';

import Card from '../ui/Card';
import Button from '../ui/Button';

import classes from './AddUsers.module.css';
import ErrorModal from '../ui/ErrorModal';

function AddUsers(props) {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	function addUserHandler(event) {
		event.preventDefault();

		if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
			setError({
				title: 'Invalid Input!',
				message: 'Please enter a valid name and age. (non empty values)',
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age!',
				message: 'Please enter a valid age. (> 0)',
			});
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);

		setEnteredAge('');
		setEnteredUsername('');
	}

	function usernameChangeHandler(event) {
		setEnteredUsername(event.target.value);
	}

	function ageChangeHandler(event) {
		setEnteredAge(event.target.value);
	}

	function errorHandler() {
		setError(null);
	}

	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					title={error.title}
					content={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</React.Fragment>
	);
}

export default AddUsers;
