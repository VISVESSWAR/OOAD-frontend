import { useState } from "react";

const ProfileSettings = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [mfaEnabled, setMfaEnabled] = useState(false);

  const saveSettings = (e) => {
    e.preventDefault();
    // Add save settings logic here
    console.log("Settings saved!");
  };

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile & Security</h2>
        <form onSubmit={saveSettings} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={mfaEnabled}
              onChange={(e) => setMfaEnabled(e.target.checked)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
            />
            <span>Enable MFA</span>
          </label>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
