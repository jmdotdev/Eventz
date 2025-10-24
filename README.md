# EventZ

**EventZ** is an event management platform that allows users to browse and purchase tickets for various events. Users can print their tickets upon successful purchase. The platform also includes an admin interface to manage events and tickets, offering full CRUD (Create, Read, Update, Delete) functionalities. Additional features include user registration, login, and role-based access control.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Mock Server Usage](#mock-server-usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**EventZ**provides users with an intuitive platform for discovering and purchasing tickets for events. Once the ticket purchase is complete, users can print their tickets. Admins can manage event details and ticket inventory through a secure, role-based dashboard.

## Features

### User Features
- **Event Browsing:** Users can explore available events.
- **Ticket Purchase:** Secure purchase system for event tickets.
- **Print Tickets:** Users can print their purchased tickets.
- **User Authentication:** Users can register, log in, and manage their accounts.

### Admin Features
- **CRUD for Events:** Admins can create, update, delete, and view event details.
- **Ticket Management:** Admins can manage ticket sales and inventory.
- **User Management:** Admins can view and manage users registered on the platform.

## Technologies

- **Frontend:** Angular (Version X)
- **Backend:** .NET Core (API under development)
- **Database:** PostgreSQL
- **Mock Server:** Postman Mock Servers (For initial API development)

## Setup Instructions

### Prerequisites

- **Node.js** (v14.x or later)
- **Angular CLI** (v17.x or later)
- **.NET Core SDK** (v8.x or later)
- **Postman** (For API mocks)

### Clone the Repository

```bash
git clone https://github.com/yourusername/eventz.git
cd eventz
```

### Install Dependencies

For the Angular Frontend:

```bash
cd frontend
npm install
```

For the .NET Backend (API under development):

```bash
cd backend
dotnet restore
```

### Running the Frontend (Angular)

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200`.

### Running the Backend (When API is ready)

```bash
cd backend
dotnet run
```

### Mock Server Usage

Since the API is under development, we will be using **Postman Mock Servers** to simulate API responses. The mock server provides endpoints for user login, event listing, ticket purchase, and admin CRUD operations. 

#### How to Use Postman Mock Servers

1. Download and install Postman if you haven't already.
2. Import the Postman collection provided in this repo (`postman_collection.json`).
3. Start the mock server by selecting the collection and choosing "Mock Server."
4. Replace the base URLs in your Angular services with the mock server's URL until the API is ready.

## Contributing

We welcome contributions to **EventZ**. Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
