# Team Flow Tasks

TeamFlow – Real-Time Team Task Manager

Create a React + Vite project called “TeamFlow – Real-Time Team Task Manager”.

Tech Stack

Use only:

- React

- Vite

- JavaScript

- React Router DOM

- Bootstrap 5

- Bootstrap Icons

- CSS

Do not use TypeScript, Tailwind CSS, Redux, backend, API, database, authentication, or real-time functionality.

Project Structure

Create the following structure:

src/

├── components/

│   ├── Navbar.jsx

│   ├── Sidebar.jsx

│   └── Layout.jsx

│

├── pages/

│   ├── Login.jsx

│   ├── Register.jsx

│   ├── Dashboard.jsx

│   ├── Projects.jsx

│   ├── Tasks.jsx

│   ├── Kanban.jsx

│   ├── Calendar.jsx

│   ├── TeamMembers.jsx

│   ├── Activity.jsx

│   ├── Notifications.jsx

│   └── Settings.jsx

│

├── context/

├── services/

├── data/

├── utils/

├── App.jsx

├── main.jsx

└── index.css

Routing

Configure React Router DOM with these routes:

/login

/register

/dashboard

/projects

/tasks

/kanban

/calendar

/team

/activity

/notifications

/settings

Use "BrowserRouter", "Routes", "Route", and "NavLink".

Layout

Create a professional responsive SaaS dashboard:

┌─────────────────────────────────────────────┐

│                  Navbar                     │

├──────────────┬──────────────────────────────┤

│              │                              │

│   Sidebar    │       Page Content           │

│              │                              │

│              │                              │

└──────────────┴──────────────────────────────┘

Create reusable:

- "Navbar.jsx"

- "Sidebar.jsx"

- "Layout.jsx"

The dashboard pages should use the "Layout" component.

Sidebar

Create a Bootstrap-based sidebar with:

- Dashboard

- Projects

- Tasks

- Kanban

- Calendar

- Team Members

- Activity

- Notifications

- Settings

Use Bootstrap Icons for each menu item.

Use "NavLink" so the currently selected page has an active style.

Add a TeamFlow logo/title at the top.

Navbar

Create a responsive navbar containing:

- TeamFlow logo/name

- Search input

- Notification icon

- User profile section

- User name

- Logout button

Use Bootstrap components and Bootstrap Icons.

Dashboard Page

Create a professional dashboard containing:

Summary Cards

- Total Projects

- Total Tasks

- Completed Tasks

- Pending Tasks

Use Bootstrap cards.

Recent Projects

Display projects using Bootstrap cards or a table.

Example data:

Website Redesign

Mobile Application

Marketing Campaign

E-Commerce Platform

Task Overview

Display:

- Completed

- In Progress

- Pending

- Overdue

Use Bootstrap progress bars.

Recent Activity

Show recent team activities using Bootstrap list groups.

Projects Page

Create a projects management page with:

- Page title

- Add Project button

- Search box

- Project cards/table

- Project name

- Description

- Team members

- Progress

- Status

- Due date

Use static/mock data.

Tasks Page

Create a task management page with:

- Add Task button

- Search

- Filter by status

- Filter by priority

- Task table

Columns:

Task

Project

Assigned To

Priority

Status

Due Date

Actions

Use Bootstrap badges for priority and status.

Kanban Page

Create a Kanban board with four columns:

To Do

In Progress

Review

Completed

Display task cards inside each column.

Use Bootstrap cards and responsive layout.

No drag-and-drop functionality is required yet.

Calendar Page

Create a simple professional calendar UI.

Show:

- Current month

- Previous/Next buttons

- Calendar grid

- Sample task/event indicators

Static data is enough.

Team Members Page

Create a team members page displaying:

- Profile/avatar

- Name

- Email

- Role

- Department

- Status

Use Bootstrap cards or table.

Example members:

John Smith

Sarah Johnson

David Wilson

Emily Davis

Michael Brown

Activity Page

Create an activity timeline/list.

Example activities:

John created a new project

Sarah completed a task

David updated project status

Emily added a new team member

Michael commented on a task

Use Bootstrap list groups and icons.

Notifications Page

Create a notification list containing:

- New task assigned

- Task completed

- Project updated

- New team member

- Upcoming deadline

Show unread notifications using Bootstrap badges.

Settings Page

Create a professional settings page with sections:

Profile Settings

- Name

- Email

- Phone

Account Settings

- Username

- Password field

- Language

Notification Settings

Use Bootstrap switches for:

- Email notifications

- Task notifications

- Project notifications

- Team notifications

These can be UI-only.

Login Page

Create a professional Bootstrap login page with:

- TeamFlow logo

- Email input

- Password input

- Remember me checkbox

- Login button

- Link to Register

Authentication should NOT be implemented.

The Login button can simply navigate to "/dashboard".

Register Page

Create a Bootstrap registration page with:

- Full Name

- Email

- Password

- Confirm Password

- Register button

- Link to Login

No real registration/authentication is required.

Bootstrap Requirements

Use Bootstrap 5 components/classes such as:

container

container-fluid

row

col

card

btn

btn-primary

btn-secondary

table

table-responsive

badge

alert

form-control

form-select

navbar

list-group

progress

modal

dropdown

Use Bootstrap Icons wherever appropriate.

Install:

npm install bootstrap bootstrap-icons react-router-dom

Import Bootstrap in "main.jsx":

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

Responsive Design

Make the entire application responsive for:

- Desktop

- Laptop

- Tablet

- Mobile

On mobile:

- Sidebar should collapse or become a mobile menu.

- Navbar should remain usable.

- Tables should become horizontally scrollable.

- Cards should stack vertically.

- Kanban columns should become horizontally scrollable or stack.

- Forms should use full available width.

Use Bootstrap responsive utilities such as:

d-none

d-md-block

d-lg-flex

col-12

col-md-6

col-lg-3

container-fluid

Design

Create a clean, modern SaaS dashboard design.

Use:

- White cards

- Light background

- Rounded cards

- Subtle shadows

- Consistent spacing

- Professional typography

- Bootstrap buttons and badges

- Clean icons

- Responsive layout

Create custom styles in:

src/index.css

Do not use Tailwind CSS.

Mock Data

Create reusable mock/static data inside:

src/data/

For example:

projects.js

tasks.js

teamMembers.js

activities.js

notifications.js

Use this data inside the pages.

Code Quality

- Use functional React components.

- Use reusable components.

- Use clean JSX.

- Use meaningful variable names.

- Avoid duplicate code.

- Keep components organized.

- Use "NavLink" for navigation.

- Use Bootstrap classes wherever possible.

- Use custom CSS only where necessary.

Do not implement:

- Authentication

- Backend

- REST APIs

- Database

- Redux

- WebSockets

- Real-time functionality

- JWT

- Firebase

This is currently a frontend-only React project with mock data.

Final Output

After creating the project, show:

1. Folder Structure

Show the complete project folder structure.

2. Files Created

List all important files created.

3. Installed Packages

Show the required npm packages:

react

react-dom

react-router-dom

bootstrap

bootstrap-icons

vite

4. Run Commands

Show:

npm install

npm run dev

5. Available Routes

Show:

/login

/register

/dashboard

/projects

/tasks

/kanban

/calendar

/team

/activity

/notifications

/settings

Make sure all routes work correctly and the application starts successfully with:

npm run dev

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://team-flow-buddy-35.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5647b676-6312-45ad-af41-a3a797515610).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
