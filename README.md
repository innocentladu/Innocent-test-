# Fitness Events Website

## Setup Instructions

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)
- MongoDB (or your choice of database)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/innocentladu/Innocent-test-.git
   cd Innocent-test-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables. Create a `.env` file in the root directory and include:
   ```env
   DATABASE_URL=your_database_url
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The application should now be running on [http://localhost:3000](http://localhost:3000).

## Documentation
- **Home Page:** Displays the list of upcoming fitness events.
- **Event Details:** Click on an event to see detailed information, including date, time, and location.
- **Registration:** Users can register for events online.
- **Contact:** Contact page for inquiries and support.

### Additional Notes
- Ensure that MongoDB is running if you're using it as your database.
- For any issues, please refer to the GitHub issues page or contact support.