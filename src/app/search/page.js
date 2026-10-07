import Navbar from "@/components/Navbar";
import SearchGrid from "@/components/SearchGrid";

export const metadata = {
  title: "Search | Wear House",
};

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <SearchGrid />
    </>
  );
}