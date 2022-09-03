import React, { useState } from 'react';
import AddUsers from './components/users/AddUsers';
import UserList from './components/users/UserList';

function App() {
	const [users, setUsers] = useState([]);

	function addUserHandler(uName, uAge) {
		setUsers((preUserList) => {
			return [
				...preUserList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	}

	return (
		<React.Fragment>
			<AddUsers onAddUser={addUserHandler} />
			<UserList users={users} />
		</React.Fragment>
	);
}

export default App;
