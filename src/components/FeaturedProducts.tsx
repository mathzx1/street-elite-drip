import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Coleção</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Produtos em <span className="text-gold-gradient">Destaque</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  product,
  index,
  isInView,
}: {
  product: (typeof products)[0];
  index: number;
  isInView: boolean;
}) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative overflow-hidden bg-card rounded-sm mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 p-3 bg-primary text-primary-foreground rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingBag size={18} />
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</p>
        <h3 className="font-heading text-lg font-semibold tracking-wide">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        {/* Sizes */}
        <div className="flex gap-2 pt-1">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 text-xs font-bold rounded-sm border transition-colors ${
                selectedSize === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <p className="font-heading text-xl font-bold text-primary">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
