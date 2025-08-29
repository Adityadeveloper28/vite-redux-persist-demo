import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/userSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const fakeUser = { id: 1, name: "Aditya", email };
      dispatch(login(fakeUser));
    } else {
      alert("Please enter email & password");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          {isLoggedIn ? "Welcome Back 🎉" : "Login"}
        </h1>

        {isLoggedIn ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Welcome, {user.name} 👋
            </h2>
            <p className="text-gray-500 mb-6">{user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-200"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
