import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingPlants from './components/TrendingPlants';
import TopSelling from './components/TopSelling';
import CustomerReviews from './components/CustomerReviews';
import O2Plants from './components/O2Plants';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0f0a] text-white">
      <Navbar />
      <Hero />
      <TrendingPlants />
      <TopSelling />
      <CustomerReviews />
      <O2Plants />
      <Footer />
    </main>
  );
}