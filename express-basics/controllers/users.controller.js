const users = [
	{ id: 1, name: 'Max', age: 23 },
	{ id: 2, name: 'John', age: 22 },
	{ id: 3, name: 'Jill', age: 21 },
];

// Get all users

exports.getAllUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {users}
	})
}

// Get user by ID

exports.getUserById = (req, res) => {

}


// Save new user
// Update user (patch)
// Delete user
