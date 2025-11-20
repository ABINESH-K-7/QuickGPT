import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 w-full">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          About Smart GPT
        </h1>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Welcome to <strong>Smart GPT</strong>! Our app is designed to provide users with intelligent, AI-driven solutions that simplify daily tasks and enhance productivity.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          With Smart GPT, you can generate content, fetch information, and interact with AI-powered tools effortlessly. Our mission is to make AI accessible, easy to use, and secure for everyone.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We value user experience, innovation, and privacy. Our team is constantly improving Smart GPT to bring you the best AI-powered assistance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600 dark:text-blue-400">
          Our Vision
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          To empower individuals and businesses with AI tools that are intuitive, reliable, and secure, helping them achieve more every day.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600 dark:text-blue-400">
          Our Values
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>Innovation – constantly improving our technology</li>
          <li>Security – protecting user data and privacy</li>
          <li>User-Centric – designing tools that are easy and effective</li>
          <li>Transparency – clear and honest communication with our users</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300">
          Thank you for choosing Smart GPT! We are committed to bringing you the best AI experience possible.
        </p>
      </div>
    </div>
  );
};

export default About;
