import Navbar from "@/components/Navbar";
import ShopGrid from "@/components/ShopGrid";

const names = { men: "Men", women: "Women", all: "All" };

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  const initialCategory = names[params?.category] || null;

  return (
    <>
      <Navbar />
      <ShopGrid
        key={initialCategory ?? "none"}
        initialCategory={initialCategory}
      />
    </>
  );
}