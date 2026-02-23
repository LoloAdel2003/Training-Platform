"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import CartItemCard from "@/components/student/cart/CartItemCard";
import { clearCart } from "@/store/slices/cartSlice";
import { DynamicBreadcrumb } from "@/components/custome/DynamicBreadcrumb";
import PageTitle from "@/components/custome/PageTitle";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const route=useRouter()
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const dispatch = useAppDispatch();
  const handleCheckout=()=>{
    route.push("/cart/checkout")
  }

  return (
    <div className="">
     
       

      {/* Cart header */}
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <PageTitle />
        <div className="flex gap-4 items-center">
        <span className="text-gray-700 dark:text-gray-400">
          {cartItems.length} items (${totalPrice})
        </span>
        {cartItems.length > 0 && (
      <Button
  onClick={() => dispatch(clearCart())}
  variant="destructive"   // لأن إزالة كل شيء هو إجراء حساس
  size="sm"               // حجم صغير مناسب للأزرار الثانوية
  shadow="sm"             // إضافة ظل خفيف
  className="px-4 py-1 transition-colors"
>
  Remove All
</Button>

        )}
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-3 mb-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItemCard key={item.id} item={item} />)
        ) : (
         <div className="flex flex-col items-center gap-4 py-22">
  <div className="text-6xl text-gray-300">🛒</div>

  <p className="text-foreground text-center max-w-sm">
    Your cart is empty. Discover courses and start building new skills today.
  </p>

  <div className="flex gap-3">
    <Link href="/categories" className="text-white bg-primary px-4 py-2 rounded-sm hover:bg-primary/50">
      Browse Courses
    </Link>
    <Link href="/popular" className="border border-primary hover:bg-primary/10 text-primary px-4 py-2 rounded-sm">
      Popular Courses
    </Link>
  </div>

  <p className="text-xs text-gray-500 ">
    Learn something new every day 
  </p>
</div>

        )}
      </div>

      {/* Footer actions */}
       {(cartItems.length >0 )&&(
      <div className="flex justify-end gap-4">
       {/* زر Learn More */}
<Button
  variant="outline"       // لأنه زر ثانوي
  size="lg"
  shadow="sm"
  className="px-6 py-2 transition-colors"
>
  Learn More &rarr;
</Button>

{/* زر Checkout */}
<Button
  onClick={handleCheckout}
  variant="default"       // زر أساسي
  size="lg"
  shadow="md"
  className="px-6 py-2 transition-colors"
>
  Checkout
</Button>

      </div>
       )}
    </div>
  );
};

export default CartPage;
