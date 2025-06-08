# 🚀 Assured Gig MVP - Beginner's Guide

## 📖 What is This Project?

Assured Gig MVP is a web application that helps people find and manage gig work opportunities. Think of it like a digital marketplace where people can find temporary jobs or "gigs" and manage their work.

## 🎯 Who is This For?

- 👨‍💻 New developers learning web development
- 🎓 Students working on their first real project
- 🔍 Anyone interested in understanding a modern web application

## 🛠️ What You Need to Get Started

Before you begin, make sure you have these installed on your computer:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Git](https://git-scm.com/)
- A code editor (like [VS Code](https://code.visualstudio.com/))

## 🚀 How to Get Started (Step by Step)

### 1. Get the Code
```bash
# Copy this project to your computer
git clone https://github.com/Tejmul/Assuredgig-mvp.git

# Go into the project folder
cd assured-gig-mvp
```

### 2. Install Dependencies
```bash
# Install all the required packages
npm install
```

### 3. Set Up Environment
Create a new file called `.env` in the project root and add these lines:
```env
# Database connection
DATABASE_URL="your-database-url"

# Security settings
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Start the Development Server
```bash
# Start the development server
npm run dev
```

Now open your browser and go to: http://localhost:3000

## 📁 Understanding the Project Structure

Here's what each folder in the project does:

```
src/
├── app/              # Contains all the pages of your website
│   ├── page.tsx     # The main homepage
│   └── layout.tsx   # The main layout that wraps all pages
│
├── components/       # Reusable pieces of UI (like buttons, forms)
│   ├── ui/          # Basic UI components
│   └── shared/      # Components used across multiple pages
│
├── context/         # Manages global state (like user login status)
│
├── hooks/           # Custom React hooks for reusable logic
│
├── lib/             # Helper functions and utilities
│
└── registry/        # Component styles and configurations
```

## 🎨 Key Technologies Explained

### 1. Next.js
- What it is: A framework for building React applications
- Why we use it: Makes building websites faster and easier
- [Learn More](https://nextjs.org/learn/basics/create-nextjs-app)

### 2. TypeScript
- What it is: A programming language that adds types to JavaScript
- Why we use it: Helps catch errors before running the code
- [Learn More](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### 3. Tailwind CSS
- What it is: A CSS framework for styling
- Why we use it: Makes styling easier with pre-built classes
- [Learn More](https://tailwindcss.com/docs/installation)

### 4. Prisma
- What it is: A tool for working with databases
- Why we use it: Makes database operations simpler
- [Learn More](https://www.prisma.io/docs/getting-started)

## 🔑 Main Features

1. **User Authentication**
   - Sign up and login
   - Secure password handling
   - User profile management

2. **Gig Management**
   - Create new gigs
   - Browse available gigs
   - Apply for gigs
   - Track your applications

3. **User Dashboard**
   - View your active gigs
   - Track earnings
   - Manage profile settings

## 💻 Development Commands

Here are the main commands you'll use:

```bash
# Start the development server
npm run dev

# Build the project for production
npm run build

# Start the production server
npm run start

# Check for code errors
npm run lint
```

## 🐛 Common Issues and Solutions

1. **"Module not found" error**
   - Solution: Run `npm install` again

2. **Database connection issues**
   - Check your `.env` file
   - Make sure your database is running

3. **Port 3000 is already in use**
   - Solution: Close other applications using port 3000
   - Or use a different port: `npm run dev -- -p 3001`

## 📚 Learning Resources

### For Complete Beginners
- [Next.js Tutorial](https://nextjs.org/learn/basics/create-nextjs-app)
- [React Basics](https://reactjs.org/tutorial/tutorial.html)
- [TypeScript for Beginners](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### For Intermediate Developers
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## 🤝 How to Contribute

1. **Find an Issue**
   - Look for issues labeled "good first issue"
   - Comment on the issue you want to work on

2. **Make Changes**
   ```bash
   # Create a new branch
   git checkout -b fix/your-fix-name

   # Make your changes
   # Test your changes
   # Commit your changes
   git commit -m "fix: your fix description"

   # Push your changes
   git push origin fix/your-fix-name
   ```

3. **Create a Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Follow the template

## 📞 Need Help?

- Open an issue on GitHub
- Join our community chat
- Check the documentation

## 📝 License

This project is open source and available under the MIT License. Feel free to use it for learning or building your own projects!
