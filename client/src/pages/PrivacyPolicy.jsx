import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Privacy Policy</h1>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          At <strong>Smart GPT</strong>, your privacy is extremely important to us. We are committed to protecting the personal information you share while using our app.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We may collect minimal information necessary to provide our services and improve user experience. This includes data such as usage activity and basic account information.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We do <strong>not</strong> share your personal information with third parties without your consent, except when required by law.
        </p>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          By using Smart GPT, you agree to our privacy practices as described here. We continuously review our policies to ensure your data is handled responsibly and securely.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600 dark:text-blue-400">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>Account information (email, username)</li>
          <li>Preferences and settings</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600 dark:text-blue-400">How We Use Your Data</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>To personalize your experience</li>
          <li>To provide customer support</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about our privacy policy, feel free to contact us through the app.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
