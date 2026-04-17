import Navbar from "../../components/Navbar";
import Button from "../../components/ui/Button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roomify | Kunal Kushwaha" },
    { name: "description", content: "Welcome to Roomify" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <h1 className="text-3xl text-indigo-700 font-extrabold">Home</h1>
      
    </div>
  )
}
