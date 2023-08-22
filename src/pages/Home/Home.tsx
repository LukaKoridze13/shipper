import Footer from "@/components/Footer/Footer";

export default function Home() {
  return <div><Footer/></div>;
import { Header, TopSection } from "../../components";

export default function Home() {
  return (
    <div className="w-full max-w-[1536] mx-auto">
      <Header />
      <TopSection />
    </div>
  );
}
