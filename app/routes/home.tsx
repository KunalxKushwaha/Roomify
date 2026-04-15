import Navbar from "../../components/Navbar";
import Button from "../../components/ui/Button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <h1 className="text-3xl text-indigo-700 font-extrabold">Home</h1>
      
      {/* Button component demo */}
      <div className="p-8 flex flex-col gap-4 max-w-md mx-auto mt-12">
        <h2 className="text-xl font-bold">Button Demo:</h2>
        <Button>Default (primary md)</Button>
        <Button variant="secondary" size="sm">Secondary Small</Button>
        <Button variant="ghost" size="lg" fullWidth> Ghost Large Full</Button>
        <Button variant="outline" className="hover:scale-105">Outline Custom</Button>
      </div>
    </div>
  )
}
