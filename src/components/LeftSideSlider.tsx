import React from 'react';
import Fruits from '../images/fruits.png';
import Vegetables from '../images/veggies.png';
import Dairy from '../images/milk.png';
import Meat from '../images/meat.png';
import Bakery from '../images/bread.png';
import Oils from '../images/oils.png';

// Define types for props and product
type ProductCardProps = {
  image: string;
  name: string;
};

type Product = {
  id: number;
  name: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, name }) => (
  <div className="w-[132px] h-[174px] bg-[#FFFFFF] rounded-md flex flex-col mt-8 items-center justify-between p-2  transition-all duration-300 border border-[#FFFFFF] hover:border-red-500 hover:shadow-xl">
    <img src={image} alt={name} className="w-[120px] h-[115px] object-cover rounded-md mb-2" />
    <p className="text-sm text-center font-medium">{name}</p>
  </div>
);

const LeftSideSlider: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Fruits", image: Fruits },
    { id: 2, name: "Vegetables", image: Vegetables },
    { id: 3, name: "Dairy", image: Dairy },
    { id: 4, name: "Meat", image: Meat },
    { id: 5, name: "Bakery", image: Bakery },
    { id: 6, name: "Oils", image: Oils },
    { id: 7, name: "Oils", image: Oils },
    { id: 8, name: "Bakery", image: Bakery },
    { id: 9, name: "Bakery", image: Bakery },
    { id: 10, name: "Bakery", image: Bakery },
    { id: 11, name: "Bakery", image: Bakery },
    { id: 12, name: "Bakery", image: Bakery },
    { id: 13, name: "Bakery", image: Bakery },
    { id: 14, name: "Meat", image: Meat },
    { id: 15, name: "Meat", image: Meat },
    { id: 16, name: "Meat", image: Meat },
    { id: 17, name: "Meat", image: Meat },
  ];

  return (
    <div className="h-[1740px] overflow-hidden no-scrollbar"> {/* Limit height to fit 9 cards */}
      <div className="h-[1740px] overflow-y-scroll no-scrollbar flex flex-col items-center space-y-4">
        {products.map((product) => (
          <ProductCard key={product.id} image={product.image} name={product.name} />
        ))}
      </div>
    </div>
  );
};

export default LeftSideSlider;
