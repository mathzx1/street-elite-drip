import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <FeaturedProducts selectedCategory={selectedCategory} />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
