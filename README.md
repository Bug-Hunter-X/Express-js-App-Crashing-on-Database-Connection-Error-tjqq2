# Express.js Database Connection Error Handling

This repository demonstrates a common error in Express.js applications: crashing due to unhandled database connection errors.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution using async/await and try...catch blocks for robust error handling.

## Bug

The application attempts to query a database without proper error handling. If the database connection fails, the application crashes.

## Solution

The solution utilizes async/await and try...catch blocks to gracefully handle database connection errors.  If an error occurs, it logs an error message and sends an appropriate response to the client instead of crashing.

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `node bug.js` (and `node bugSolution.js` to see solution)