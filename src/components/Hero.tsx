import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Elite da Rua streetwear"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-sm md:text-base tracking-[0.4em] uppercase text-primary mb-6"
        >
          Streetwear Premium
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          <span className="text-gold-gradient">ELITE</span>
          <br />
          <span className="text-foreground">DA RUA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 font-light tracking-wide"
        >
          Vista sua essência. Domine as ruas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Comprar Agora
          </a>
          <a
            href="#categories"
            className="px-10 py-4 border border-foreground/30 text-foreground font-heading text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Ver Coleção
          </a>
        </motion.div>

        {/* Delivery badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 inline-flex items-center gap-2 px-6 py-2 border border-border rounded-full text-sm text-muted-foreground"
        >
          🇧🇷 Entregamos para todo o Brasil
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
