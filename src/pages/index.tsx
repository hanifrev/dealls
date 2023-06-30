import Image from "next/image";
import { Inter } from "next/font/google";
import Products from "@/components/Products";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
