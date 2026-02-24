import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import categoryJackets from "@/assets/category-jackets.jpg";
import categoryPants from "@/assets/category-pants.jpg";
import categorySneakers from "@/assets/category-sneakers.jpg";
import categoryTshirts from "@/assets/category-tshirts.jpg";

const categories = [
  { name: "Casacos", image: categoryJackets },
  { name: "Calças", image: categoryPants },
  { name: "Tênis", image: categorySneakers },
  { name: "Camisetas", image: categoryTshirts },
  { name: "Conjuntos Gringos", image: categoryPants },
];

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="py-24 camo-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Explore</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Categorias
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300 rounded-sm" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ver coleção →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
