import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { categories } from "@/data/products";

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Categories = ({ selectedCategory, onSelectCategory }: CategoriesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="py-16 camo-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Explore</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Categorias
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => onSelectCategory(cat)}
              className={`px-6 py-3 rounded-sm font-heading text-sm tracking-widest uppercase border-2 transition-all duration-300 ${
                selectedCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
