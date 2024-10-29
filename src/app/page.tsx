import { producttype } from "./types/producttype";
import Productitems from './components/Productitems';
import Cartitems from './components/Cartitems'
const products: producttype[] = [
  {
    id: "1",
    name: "go pro",
    price: 57,
    quantity: 0,
  },
  {
    id: "2",
    name: "tripod",
    price: 7.99,
    quantity: 0,
  },
  {
    id: "3",
    name: "bag",
    price: 4.99,
    quantity: 0,
  },
];

export default function Home() {
  return (
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    
        <div className="flex flex-col gap-8 ">
        <h1 className="text-3xl">E-commerce cart system</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Productitems key={product.id} product={product} />
          ))}
        </div>
        <Cartitems/>
      </div>
        
     
    </main>
   
    
  );
}
