import React from 'react';
import im1 from '../images/im1.png';
import im2 from '../images/im1.png';
import im3 from '../images/im2.png';
import im4 from '../images/im4.png';
import im5 from '../images/im5.png';
import im6 from '../images/im6.png';
import im7 from '../images/im7.png';
import im8 from '../images/im8.png';

interface Goods {
  name: string;
  weight: string;
  free: string;
  price: number;
  originalPrice: number;
  discount?: number;
  image: string;
}

const goodsList: Goods[] = [
  { name: 'B Natural Mixed Fruit Juice', weight: '', free: '(Buy one get one FREE)', price: 100, originalPrice: 180, discount: 40, image: im1 },
  { name: 'Hari Fresh White Protein Rich Eggs', weight: '10 pcs', free: '', price: 110, originalPrice: 120, discount: 40, image: im2 },
  { name: 'Go Cheese Slices', weight: '200 g', free: '', price: 140, originalPrice: 160, image: im3 },
  { name: 'Fresh Asparagus', weight: '200 g', free: '', price: 151, originalPrice: 168, image: im4 },
  { name: 'Fresh Cabbage', weight: '1 pc', free: '', price: 100, originalPrice: 110, image: im5 },
  { name: 'Fresh Broccoli', weight: '1 pc', free: '', price: 110, originalPrice: 120, image: im6 },
  { name: 'Fresh Radish', weight: '200 g', free: '', price: 140, originalPrice: 160, image: im7 },
  { name: 'Fresh Yellow Squash', weight: '500 g', free: '', price: 151, originalPrice: 168, image: im8 },
  { name: 'Fresh Spinach', weight: '', free: '(Buy one get one FREE)', price: 90, originalPrice: 100, image: im1 },
  { name: 'Fresh Basil', weight: '1 pc', free: '', price: 120, originalPrice: 140, image: im2 },
  { name: 'Fresh Beets', weight: '500 g', free: '', price: 80, originalPrice: 90, image: im3 },
  { name: 'Fresh Basil', weight: '100 g', free: '', price: 60, originalPrice: 70, image: im4 },
  { name: 'Fresh Carrot', weight: '', free: '(Buy one get one FREE)', price: 90, originalPrice: 100, discount: 20, image: im5 },
  { name: 'Fresh Pumpkin', weight: '1 pc', free: '', price: 110, originalPrice: 130, discount: 10, image: im6 },
  { name: 'Fresh Peas', weight: '500 g', free: '', price: 140, originalPrice: 160, image: im7 },
  { name: 'Fresh Zucchini', weight: '500 g', free: '', price: 130, originalPrice: 150, image: im8 },
  { name: 'Fresh Bell Pepper', weight: '1 pc', free: '', price: 80, originalPrice: 100, image: im1 },
  { name: 'Fresh Onion', weight: '1kg', free: '', price: 50, originalPrice: 60, image: im2 },
  { name: 'Fresh Garlic', weight: '200 g', free: '', price: 30, originalPrice: 40, image: im3 },
  { name: 'Fresh Ginger', weight: '200 g', free: '', price: 40, originalPrice: 50, image: im4 }
];

interface GoodsCardProps {
  goods: Goods;
}

const GoodsCard: React.FC<GoodsCardProps> = ({ goods }) => (
  <div className="w-[239.86px] h-[295px] bg-[#FFFFFF] rounded-lg border border-[#EDEDED] flex flex-col justify- p-0 mt-0 overflow-hidden relative hover:border-red-500 transition-all duration-300">
    {/* Discount Badge */}
    {goods.discount && (
      <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-l rounded-bl-2xl flex items-center justify-center">
        <span className="font-semibold text-center text-[#FFFFFF] text-[14px]">
          {goods.discount}% <br />
          OFF
        </span>
      </div>
    )}

    {/* Image */}
    <div className="w-full h-[200px] mb-0 overflow-hidden bg-[#F3F9FB] flex items-start">
      <img src={goods.image} alt={goods.name} className="w-full p-5 object-cover" />
    </div>

    <div className="p-4 flex flex-col justify-between h-[118px]">
      {/* Product Info */}
      <h3 className="text-sm text-[#222222] font-semibold mb-0 truncate max-h-[3rem] overflow-hidden">{goods.name}</h3>

      {/* Weight and Free Offer Text */}
      <div className="flex flex-col">
        {goods.weight && (
          <p className="text-xs text-[#222222] mb-1">{goods.weight}</p>
        )}
        {goods.free && (
          <p className="text-sm text-[#54B22C] mb-1">{goods.free}</p>
        )}
      </div>
      <div className="border-t border-[#EDEDED] my-1" />
      {/* Price and Button Container */}
      <div className="flex justify-between">
        <div>
          <span className="text-[18px] font-medium text-[#3BB77E] mr-1">
            ₹{goods.price}
          </span>
          <span className="text-[18px] font-[18px] text-[#ADADAD] line-through ml-1">
            ₹{goods.originalPrice}
          </span>
        </div>
        {/* button */}
        <div>
          <button className="py-1 px-4 border border-[#0B6E27] rounded-md font-medium text-[14px] text-[#0B6E27] hover:bg-[#0B6E27] hover:text-[#FFFFFF]">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
);

const GoodsGrid: React.FC = () => (
  <div className="container m-auto  mx-5 px-10 py-10">
    {/* Center the grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mx-auto">
      {goodsList.map((goods, index) => (
        <GoodsCard key={index} goods={goods} />
      ))}
    </div>
  </div>
);

export default GoodsGrid;
