type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(() => resolve("User Server Loaded"), 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map((user) => {
                return (
                    <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm">
                            <div>{user.username}</div>
                            <div>{user.email}</div>
                            <div>{user.phone}</div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
