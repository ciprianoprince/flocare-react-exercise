import { ArrowRight, Search } from "lucide-react";
import { Badge, Button, ButtonGroup, InputGroup, InputGroupAddon, InputGroupInput } from "./components";
import { OTHER_ROUTES, ROUTES } from "./constants";
import { Link } from "react-router-dom";

export const App = () => {
    return (
        <main className="bg-[#fff9f2] min-h-screen w-full">
            <header className="fixed top-3 w-full flex justify-center">
                <div className="flex flex-row border shadow border-gray-700/20 rounded-md justify-between gap-8 items-center py-2 px-4">
                    <ul className="flex flex-row gap-6  ">
                        {ROUTES.map((route) => (
                            <li key={route.path} className="text-sm">
                                <Link to={`/#${route.label}`}>{route.label}</Link>
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

            <section className="flex flex-row items-center min-h-screen w-full">
                <div className="flex flex-row max-w-7xl mx-auto w-full items-center justify-between">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-6xl font-semibold tracking-tight mb-2">Direct Home Healthcare</h1>

                        <ButtonGroup className="p-0.5 bg-[#efece6] rounded-lg">
                            <Button variant="outline" size="sm" className="bg-[#fff9f2] text-gray-600 rounded-lg!">
                                Search for health workers
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex flex-row items-center justify-center"
                                disabled
                            >
                                <span className="text-gray-600">Find a Clinic</span>
                                <Badge className="text-white rounded-full font-normal leading-none h-auto block bg-[#dd9cad] text-xs">
                                    soon
                                </Badge>
                            </Button>
                        </ButtonGroup>

                        <InputGroup className="shadow border">
                            <InputGroupInput
                                placeholder="Search for a name, service, or anything..."
                                className=" border-gray-700/20! ring-green-900"
                            />
                            <InputGroupAddon>
                                <Search className="text-gray-700/50" />
                            </InputGroupAddon>
                        </InputGroup>

                        <div className="flex flex-row gap-2">
                            {OTHER_ROUTES.map((otherRoute) => (
                                <Button
                                    key={otherRoute.path}
                                    size="xs"
                                    className="border shadow border-gray-700/20 cursor-pointer hover:bg-blue-50 text-gray-600 rounded-md font-medium text-xs"
                                >
                                    <span>{otherRoute.label}</span>
                                    <ArrowRight className="size-3" />
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="w-md aspect-square">
                        <img src="./hero-img.png" alt="Hero image" className="w-full h-full" />
                    </div>
                </div>
            </section>
        </main>
    );
};
