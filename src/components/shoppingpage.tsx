import React, { useState } from 'react';
import TopHeader from './TopHeader';
import { ChevronRight } from 'lucide-react';
import CustomArrows from './sliderCategories';
import LeftSideSlider from './LeftSideSlider';
import GoodsGrid from './MainGrid';
import Pagination from './Pagination';

const ShopPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 32;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <TopHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mt-11 pt-6 sm:pt-10 bg-[#F9F9F9]">
          <h2 className="text-xl sm:text-2xl font-semibold text-start text-gray-800">Shop Unique Ingredients</h2>
        </div>
        <div className="mt-2 bg-[#F9F9F9]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-xl text-gray-800">Categories</h2>
            <div className="flex items-center text-red-500 cursor-pointer">
              <span className="mr-1 underline decoration-red-500" style={{ textUnderlineOffset: '3px' }}>
                View All
              </span>
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white rounded-xl p-4">
          <CustomArrows />
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-1 w-full lg:w-[204px] bg-white p-4 rounded-md">
            <LeftSideSlider />
          </div>
          <div className="lg:col-span-5 bg-white rounded-md">
            <GoodsGrid />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;