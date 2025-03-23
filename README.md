# My Next.js Project

# CHRAN - Center for Human Rights and Accountability Network

## Description

CHRAN is a pro-democracy, human rights, and civil society organization dedicated to strengthening and preserving democracy in Nigeria. Established with a commitment to justice and accountability, CHRAN has been at the forefront of the movement for democratic governance, social justice, and human rights across the country.

CHRAN passionately pursues advocacy initiatives, organizes public lectures, seminars, and symposia on critical themes, all aimed at raising awareness and fostering civic responsibility. These efforts are not only a testament to our dedication to democratic values but also a proactive stance in educating and engaging citizens in the democratic process.

## Features

- **Admin Authentication**: Secure login for administrators to publish articles and blogs.
- **Blog Section**: Display blog articles for visitors to read and engage with.
- **Donation System**: Support advocacy initiatives through secure donations.
- **Contact Form**: Allow visitors to send inquiries and feedback.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:lordgreg003/Chran.git
   ```

# Navigate to the project directory

cd Chran

# Install dependencies

npm install ```
or
pnpm install

# Run the development server

npm run dev

# or

pnpm

# Build the project for production

npm run build

# or

pnpm build

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations and transitions.
- **Axios**: Promise-based HTTP client for API requests.
- **Redux Toolkit**: State management library for React.
- **React Icons**: Library for using popular icons in your project.
- **Lucid React**: Beautiful and customizable icons.
- **Next Themes**: Library for implementing light/dark mode.
- **TypeScript**: Static type checking for JavaScript.
- **Vercel**: Deployment platform for Next.js apps.

## Architecture

The project follows a structured architecture with the following key folders and routes:

### Folder Structure

- **`src/app`**: Contains the main application logic and routing.
  - **`redux`**: Manages global state using Redux Toolkit.
  - **`types`**: Contains TypeScript type definitions.
  - **`api`**: Handles API requests and integrations.
  - **`components`**: Reusable UI components.
  - **`lib`**: Utility functions and helpers.

### Routing (App Router)

The application uses Next.js's App Router for routing. Below is a breakdown of the routes and their sizes:

| Route                             | Size    | First Load JS |
| --------------------------------- | ------- | ------------- |
| **`/`**                           | 4.25 kB | 198 kB        |
| **`/_not-found`**                 | 983 B   | 106 kB        |
| **`/aboutus`**                    | 3.25 kB | 124 kB        |
| **`/admin`**                      | 2.87 kB | 142 kB        |
| **`/all`**                        | 4.1 kB  | 153 kB        |
| **`/allarticle`**                 | 3.5 kB  | 144 kB        |
| **`/articles`**                   | 4.02 kB | 195 kB        |
| **`/articles/[id]`**              | 2.03 kB | 136 kB        |
| **`/blo`**                        | 169 B   | 106 kB        |
| **`/blo/[slug]`**                 | 3.78 kB | 169 kB        |
| **`/blo/[slug]/opengraph-image`** | 0 B     | 0 B           |
| **`/blo/detail/[slug]`**          | 433 B   | 111 kB        |
| **`/blo/detail1/[slug]`**         | 433 B   | 111 kB        |
| **`/blo/detail3/[slug]`**         | 433 B   | 111 kB        |
| **`/blo/detail4/[slug]`**         | 433 B   | 111 kB        |
| **`/blo/detail5/[slug]`**         | 433 B   | 111 kB        |
| **`/blo/detail6/[slug]`**         | 433 B   | 111 kB        |
| **`/blo/detail7/[slug]`**         | 433 B   | 111 kB        |
| **`/blo/detail8/[slug]`**         | 433 B   | 111 kB        |
| **`/blo/details/[slug]`**         | 433 B   | 111 kB        |
| **`/blog`**                       | 10.6 kB | 228 kB        |
| **`/blog/[slug]`**                | 2.28 kB | 151 kB        |
| **`/blogs`**                      | 169 B   | 106 kB        |
| **`/blogs/[slug]`**               | 1.02 kB | 119 kB        |
| **`/blogs/detail/[slug]`**        | 395 B   | 106 kB        |
| **`/blogs/detail1/[slug]`**       | 395 B   | 106 kB        |
| **`/blogs/detail2/[slug]`**       | 395 B   | 106 kB        |
| **`/blogs/details/[slug]`**       | 433 B   | 111 kB        |
| **`/completed-project`**          | 169 B   | 106 kB        |
| **`/contact`**                    | 2.29 kB | 118 kB        |
| **`/create`**                     | 1.66 kB | 136 kB        |
| **`/detail`**                     | 1.51 kB | 162 kB        |
| **`/detail/[id]`**                | 1.4 kB  | 123 kB        |
| **`/donate`**                     | 2.71 kB | 118 kB        |
| **`/events`**                     | 169 B   | 106 kB        |
| **`/events/[slug]`**              | 2.39 kB | 113 kB        |
| **`/new`**                        | 169 B   | 106 kB        |
| **`/new/[slug]`**                 | 169 B   | 106 kB        |
| **`/news`**                       | 169 B   | 106 kB        |
| **`/news/[id]`**                  | 755 B   | 119 kB        |
| **`/ongoing-project`**            | 169 B   | 106 kB        |
| **`/opengraph-image.jpg`**        | 0 B     | 0 B           |
| **`/privacy`**                    | 1.39 kB | 107 kB        |
| **`/robots.txt`**                 | 0 B     | 0 B           |
| **`/set`**                        | 1.46 kB | 135 kB        |
| **`/terms`**                      | 1.23 kB | 107 kB        |
| **`/video`**                      | 169 B   | 106 kB        |
| **`/video/[slug]`**               | 1.25 kB | 123 kB        |
| **`/videos`**                     | 169 B   | 106 kB        |
| **`/videos/[slug]`**              | 1.25 kB | 123 kB        |
