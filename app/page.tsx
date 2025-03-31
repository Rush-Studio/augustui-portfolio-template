import Header from "@/components/sections/Header";
import Profile from "@/components/Profile";
import Footer from "@/components/sections/Footer";
import InfoSection from "@/components/InfoSection";
import { allBlogs } from "content-collections";
import { ventures } from "@/config/ventures";
import { appearances } from "@/config/appearances";

export default function Home() {
  const scribbles = allBlogs.slice(0, 5);

  return (
    <div className="min-h-screen bg-background text-foreground pt-8">
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-3xl">
        <Profile />
        <InfoSection title="Currently" information={ventures} />
        <InfoSection title="Appearances" information={appearances} />
        <InfoSection title="Scribbles" information={scribbles} />
      </main>
      <Footer />
    </div>
  );
}
