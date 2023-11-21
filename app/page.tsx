import Container from "./components/Container";
import HeroBanner from "./components/HeroBanner";
import { products } from "@/utils/data"
import ProductCard from "./components/products/ProductCard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HeroBanner/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCard 
            data={product}
            key={product.id}
            />
          })}
        </div>
      </Container>
    </div>
  )
}