import React from "react";
import { useNavigate } from "react-router-dom";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useAppStore } from "../../store/appStore";

const CartCard = ({ item }) => {
  const { removeCart, addCartQty, removeCartQty } = useAppStore();
  const productName = (name) => {

    return name;
  };
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-5 h-full content-center items-center bg-white gap-[5px] border-b-[1px] pb-[10px] w-full">
           <h2
          onClick={() => removeCart(item.product.id)}
          className="cursor-pointer text-left pl-3 text-red-500"
        >
          Remove
        </h2>
      <div className="h-[80px] w-[80px]">
        <img
          onClick={() => navigate(`/product/${item.product.id}`)}
          src={item.product.image}
          className="h-full w-full cursor-pointer object-contain"
          alt=""
        />
      </div>{" "}
      <div className="text-nowrap">
        <h2
          onClick={() => navigate(`/product/${item.product.id}`)}
          className="text-nowrap cursor-pointer font-bold text-[16px]"
        >
          {productName(item.product.title)}
        </h2>
      </div>
      <div className="flex h-full items-center justify-center">
        <div
          onClick={() => {
            item.quantity === 1
              ? removeCart(item.product.id)
              : removeCartQty(item.product.id);
          }}
          className="flex relative bg-white md:h-[30px] md:w-[30px] h-[24px] w-[24px] items-center justify-center rounded-full border-[1px] p-[2px] text-center text-[35px] "
        >
          <span className="translate-x-[-50%] absolute translate-y-[-50%] top-[50%] left-[50%]">
            <HiMinus size={12} />
          </span>
        </div>
        <h2 className="px-2 font-semibold">{item?.quantity}</h2>
        
          <button
            onClick={() => addCartQty(item.product.id)}
            className=" relative md:h-[30px] md:w-[30px] h-[24px] w-[24px] items-center justify-center rounded-full border-[1px] p-[2px] text-center text-[18px]"
          >
            <span className="translate-x-[-50%] absolute translate-y-[-50%] top-[50%] left-[50%]">
              <HiPlus size={12} />
            </span>
          </button>
        
      </div>
      <div className="flex text-right max-w-[120px] flex-col justify-between">
        <h2 className="ml-[20px] text-center font-semibold ">
          {"£"}
          <span className="text-black">
            {Math.ceil(item.product.price)}
          </span>
        </h2>
   
      </div>
    </div>
  );
};

export default CartCard;
