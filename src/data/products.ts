import productJacket from "@/assets/product-jacket-1.jpg";
import productHoodie from "@/assets/product-hoodie-1.jpg";
import productCargo from "@/assets/product-cargo-1.jpg";
import productSneaker from "@/assets/product-sneaker-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Bomber Tático Elite",
    price: 489.90,
    category: "Casacos",
    image: productJacket,
    description: "Jaqueta bomber militar com acabamento premium. Tecido resistente e forro interno macio. O ícone do streetwear urbano.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "2",
    name: "Hoodie Phantom Black",
    price: 349.90,
    category: "Casacos",
    image: productHoodie,
    description: "Moletom oversized com capuz duplo. Algodão premium 100% peruano. Silhueta dominante para as ruas.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "3",
    name: "Cargo Stealth Ops",
    price: 399.90,
    category: "Calças",
    image: productCargo,
    description: "Calça cargo com bolsos táticos e ajuste no tornozelo. Tecido ripstop de alta durabilidade. Feita para quem domina.",
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "4",
    name: "Runner Elite V1",
    price: 599.90,
    category: "Tênis",
    image: productSneaker,
    description: "Tênis premium com amortecimento de alta performance. Design exclusivo Elite da Rua. Conforto e atitude em cada passo.",
    sizes: ["39", "40", "41", "42", "43"],
  },
];
