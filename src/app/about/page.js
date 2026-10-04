import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-foreground">About House Wear</h1>
        <p className="mt-6 text-foreground">
          House Wear is a clothing brand for men and women. We focus on good
          quality, comfortable fit and fair prices.
        </p>
        <p className="mt-4 text-foreground">
          This website is a demo store built as a project. Orders placed here
          are for testing only.
        </p>
      </main>
    </>
  );
}