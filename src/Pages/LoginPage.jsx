function LoginPage() {
    return (
        <section className=" bg-PastelPink w-screen h-screen flex justify-center items-center">
            <main className="bg-pink-50 p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label  className="block text-sm font-medium text-gray-400">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-PastelBlue text-slate-400 font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        Login
                    </button>
                </form>
            </main>
        </section>
    );
}

export default LoginPage;