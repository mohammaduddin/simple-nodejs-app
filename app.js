const fs = require('fs');
const path = require('path');

// File path to store JSON data
const filePath = path.join(__dirname, 'data.json');

// Function to read JSON data
function readData() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Function to write JSON data
function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Get all users
function getUsers() {
    return readData();
}

// Create a new user
function createUser(name, email) {
    const users = readData();
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    writeData(users);
    return newUser;
}

// Get a user by ID
function getUserById(id) {
    const users = readData();
    return users.find((user) => user.id === id);
}

// Example usage
const users = getUsers();
console.log('All users:', users);

const newUser = createUser('Heelaal Moollaa', 'heelaal.moollaa@example.com');
console.log('New user:', newUser);

const userById = getUserById(1);
console.log('User by ID:', userById);