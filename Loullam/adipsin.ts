type User = {
  email: string;
  // ... other properties
};

// A generic function to get a specific property from an array of objects.
function getUserProp<T, K extends keyof T>(usersArray: T[], prop: K): T[K][] {
  return usersArray.map(user => user[prop]);
}

// Example usage:
const usersArray: User[] = [
  { email: 'user1@example.com' },
  { email: 'user2@example.com' },
  // ... more users
];

// Get all emails from the usersArray.
const allEmails = getUserProp(usersArray, "email");
