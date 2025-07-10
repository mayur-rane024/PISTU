import React from "react";
import { Button } from "@/components/ui/button";
import { LucideTrash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CartItemProps } from "@/types/userType";

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateQuantity(item.bookId, parseInt(e.target.value));
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1 mx-4">
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-sm text-gray-600">₹ {item.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600">
          ₹ {item.discountedPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="mx-2">
              {item.quantity}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {[1, 2, 3, 4, 5].map((qty) => (
              <DropdownMenuItem key={qty} onClick={() => handleQuantityChange}>
                {qty}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          className="text-red-600"
          onClick={() => onRemoveItem(item.bookId)}
        >
          <LucideTrash className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
