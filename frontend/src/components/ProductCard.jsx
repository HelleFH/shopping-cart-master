import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";

const ProductCard = ({ item }) => {
  const { addCart } = useAppStore();
  const navigate = useNavigate();
  const productName = (name) => {

    return name;
  };
  return (
    <div className="flex items-center bg-white relative flex-col justify-between p-[10px] shadow-md rounded-[1px]">
      <div className="h-[150px] sm:h-[200px]">
        <img
          src={item.image}
          onClick={() => navigate(`/product/${item.id}`)}
          className="w-full object-cover cursor-pointer"
          alt=""
        />
      </div>
      <div className="py-[8px]  flex flex-col gap-[4px]">
        <h2
          className="cursor-pointer font-bold"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          {productName(item.title)}
        </h2>
        <h2 className="text-center">
          {"£"}
          <span className="">{Math.ceil(item.price)}</span>
        </h2>
      </div>
      <div className="">
        <button style={{ backgroundColor: "#ca9176", color: "#F0F0F0" }}

          onClick={() => addCart(item, navigate)}
          className="mb-6 mt-4 border-[2px] hover:bg-black hover:text-white hover:border-0 border-none px-[20px] py-[5px]"
        >
          Add To Cart
        </button>
      </div>

  
    </div>
  );
};

export default ProductCard;
