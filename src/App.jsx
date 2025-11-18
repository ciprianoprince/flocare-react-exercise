import { Button } from "./components";
import { ROUTES } from "./constants";

export const App = () => {
    return (
        <main className="bg-[#fff9f2] min-h-screen w-full">
            <header className="fixed top-3 w-full flex justify-center">
                <div className="flex flex-row border shadow border-gray-700/20 rounded-md justify-between gap-4 items-center py-2 px-4">
                    <ul className="flex flex-row gap-2">
                        {ROUTES.map((route) => (
                            <li key={route.path} className="text-sm">
                                {route.label}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-row gap-2">
                        <Button variant="outline" size="sm" className="border-gray-700/20 font-normal">
                            Login
                        </Button>
                        <Button size="sm" className="bg-[#294b49] text-white font-normal">
                            Sign up
                        </Button>
                    </div>
                </div>
            </header>
        </main>
    );
};
