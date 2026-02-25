import productJacket from "@/assets/product-jacket-1.jpg";
import productHoodie from "@/assets/product-hoodie-1.jpg";
import productCargo from "@/assets/product-cargo-1.jpg";
import productSneaker from "@/assets/product-sneaker-1.jpg";
import pantsGringo1 from "@/assets/pants-gringo-1.avif";
import pantsGringo2 from "@/assets/pants-gringo-2.avif";
import pantsGringo3 from "@/assets/pants-gringo-3.avif";
import techFleece1 from "@/assets/tech-fleece-1.jpg";
import techFleece2 from "@/assets/tech-fleece-2.jpg";
import techFleece3 from "@/assets/tech-fleece-3.jpg";
import techFleece4 from "@/assets/tech-fleece-4.jpg";
import trapstar1 from "@/assets/trapstar-1.jpg";
import trapstar2 from "@/assets/trapstar-2.jpg";
import trapstar3 from "@/assets/trapstar-3.jpg";
import trapstar4 from "@/assets/trapstar-4.jpg";
import trapstar5 from "@/assets/trapstar-5.jpg";
import trapstar6 from "@/assets/trapstar-6.jpg";
import trapstar7 from "@/assets/trapstar-7.jpg";
import trapstar8 from "@/assets/trapstar-8.jpg";
import trapstar9 from "@/assets/trapstar-9.jpg";
import trapstar10 from "@/assets/trapstar-10.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
}

export const categories = [
  "Todos",
  "Casacos",
  "Calças",
  "Tênis",
  "Camisetas",
  "Conjuntos Gringos",
  "Conjunto Trapstar",
];

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
  {
    id: "5",
    name: "Calça Gringo Street Style",
    price: 135.00,
    category: "Calças",
    image: pantsGringo1,
    description: "Calça estilo gringo com caimento perfeito. Visual importado direto das ruas americanas. Atitude e estilo em cada detalhe.",
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: "6",
    name: "Calça Gringo Urban Fit",
    price: 135.00,
    category: "Calças",
    image: pantsGringo2,
    description: "Modelo urban fit com inspiração nas ruas de NY. Tecido premium e corte moderno. Para quem vive o lifestyle gringo.",
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: "7",
    name: "Calça Gringo Drip Edition",
    price: 135.00,
    category: "Calças",
    image: pantsGringo3,
    description: "Edição especial com design exclusivo US drip. Conforto e autenticidade em uma peça só. O gringo que mora no Brasil.",
    sizes: ["30", "32", "34", "36", "38"],
  },
  {
    id: "8",
    name: "Tech Fleece Preto/Cinza",
    price: 165.00,
    category: "Casacos",
    image: techFleece1,
    description: "Nike Tech Fleece com design two-tone preto e cinza. Logo borrada para o site não cair. Conforto e estilo premium das ruas.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "9",
    name: "Tech Fleece Cinza",
    price: 165.00,
    category: "Casacos",
    image: techFleece2,
    description: "Nike Tech Fleece full cinza mescla. Logo borrada para o site não cair. Tecido tecnológico com caimento perfeito.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "10",
    name: "Tech Fleece Preto",
    price: 165.00,
    category: "Casacos",
    image: techFleece3,
    description: "Nike Tech Fleece full black. Logo borrada para o site não cair. O clássico que nunca sai de moda. Atitude total.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "11",
    name: "Tech Fleece Dark",
    price: 165.00,
    category: "Casacos",
    image: techFleece4,
    description: "Nike Tech Fleece em tom escuro bicolor. Logo borrada para o site não cair. Visual discreto e poderoso.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "12",
    name: "Trapstar Decoded Black/France",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar1,
    description: "Conjunto Trapstar Decoded com bordado tricolor azul, vermelho e branco. Moletom + calça jogger. Estilo London direto das ruas.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "13",
    name: "Trapstar Decoded Grey/France",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar2,
    description: "Conjunto Trapstar Decoded cinza mescla com bordado tricolor. Moletom + calça jogger. Conforto e atitude premium.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "14",
    name: "Trapstar Shooters Black/Orange",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar3,
    description: "Conjunto Trapstar London Shooters preto com estampa laranja e azul. Moletom + calça jogger. Design exclusivo streetwear.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "15",
    name: "Trapstar Decoded Black/Red",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar4,
    description: "Conjunto Trapstar Decoded preto com bordado vermelho e cinza. Moletom + calça jogger. Visual dark e poderoso.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "16",
    name: "Trapstar Decoded Grey/Red",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar5,
    description: "Conjunto Trapstar Decoded cinza com bordado vermelho e verde. Moletom + calça jogger. Estilo discreto e autêntico.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "17",
    name: "Trapstar Decoded Black/Blue",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar6,
    description: "Conjunto Trapstar Decoded preto com degradê azul. Moletom + calça jogger. Visual ice blue das ruas de Londres.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "18",
    name: "Trapstar Decoded Grey/Blue",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar7,
    description: "Conjunto Trapstar Decoded cinza com degradê azul. Moletom + calça jogger. Tons frios para um visual clean.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "19",
    name: "Trapstar Irongate Black/Yellow",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar8,
    description: "Conjunto Trapstar Irongate preto com bordado amarelo arco. Moletom + calça jogger. Destaque e atitude nas ruas.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "20",
    name: "Trapstar Decoded Grey/Ice",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar9,
    description: "Conjunto Trapstar Decoded cinza com degradê ice blue e cinza. Moletom + calça jogger. Elegância streetwear.",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "21",
    name: "Trapstar Decoded Black/Navy",
    price: 240.00,
    category: "Conjunto Trapstar",
    image: trapstar10,
    description: "Conjunto Trapstar Decoded preto com degradê azul marinho. Moletom + calça jogger. Visual noturno e imponente.",
    sizes: ["P", "M", "G", "GG"],
  },
];
