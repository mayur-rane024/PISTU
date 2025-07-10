import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown, MapPin } from "lucide-react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const CartCard: React.FC<any> = ({ discountedPrice, book }) => {
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();
  const firestore = getFirestore();
  const auth = getAuth();
  const navigate = useNavigate();
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  // Fetch user ID on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const getDeliveryDate = () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 7);
    return futureDate.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const addToCart = async () => {
    setCartLoading(true);
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to add items to your cart.",
      });
      setCartLoading(false);
      navigate("/login");

      return;
    }

    const cartRef = doc(firestore, `users/${user.uid}/cart/${book.bookId}`);
    const cartData = {
      ...book,
      quantity,
    };

    try {
      await setDoc(cartRef, cartData, { merge: true }); // Use merge for partial updates
      toast({ title: "Success", description: "Item added to cart!" });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast({ title: "Error", description: "Failed to add item to cart." });
    } finally {
      setCartLoading(false);
    }
  };

  const addToWishlist = async () => {
    setWishlistLoading(true);
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to add items to your wishlist.",
      });
      setWishlistLoading(false);
      navigate("/login");
      return;
    }

    const wishlistRef = doc(
      firestore,
      `users/${user.uid}/wishlist/${book.bookId}`
    );
    try {
      await setDoc(wishlistRef, book, { merge: true });
      toast({ title: "Success", description: "Item added to wishlist!" });
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast({ title: "Error", description: "Failed to add item to wishlist." });
    } finally {
      setWishlistLoading(false);
    }
  };

  const orderbook = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to order items.",
      });
      navigate("/login");
      return;
    }

    const orderData = {
      ...book,
      quantity,
      address: "Pune 411009",
      discountedPrice,
    };
    navigate("/order", {
      state: { orderData: [orderData] },
    });
  };

  return (
    <Card className=" border-none">
      <CardContent className="flex flex-col gap-4 pt-4 ">
        <div className="space-y-2">
          <h2 className="text-5xl font-bold dark:text-white">
            ₹ {discountedPrice}
          </h2>
          {/* <div
            className={`text-sm ${
              book.price > 500 ? "text-green-500" : "text-yellow-600"
            }`}
          >
            {book.price > 500 ? "FREE delivery" : "+ ₹  40"}
          </div> */}
          <div>
            <div className="font-semibold text-lg">{getDeliveryDate()}</div>
            Order within{" "}
            <span className="font-semibold text-green-500 text-lg">12 hrs</span>
            <a href="#" className="text-blue-600 px-2 text-lg">
              Details
            </a>
          </div>
          <p className="text-sm dark:text-white">
            <a href="#" className="text-blue-600 flex text-lg">
              <MapPin className="w-4 mr-2 " />
              Delivering to Pune 411009 Update location
            </a>
          </p>
        </div>

        <div
          className={`text-sm border px-2 py-1 my-1 w-fit rounded-lg ${
            book.inStock
              ? "text-green-600 border-green-600"
              : "text-red-600 border-red-600"
          }`}
        >
          {book.inStock ? "In Stock" : "Out of Stock"}
        </div>

        <div className="flex items-center gap-2">
          <Label className="dark:text-white font-medium">Quantity:</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center w-32 justify-between"
              >
                {quantity}
                <span className="ml-2">
                  <ChevronDown />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              {[1, 2, 3, 4, 5].map((num) => (
                <DropdownMenuItem key={num} onClick={() => setQuantity(num)}>
                  {num}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col gap-2 space-y-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={addToCart}>
                  {cartLoading ? <Check color="green" /> : "Add to Cart"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Want to place multiple Products Add to Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button onClick={orderbook}>Buy Now</Button>
        </div>

        <div className="flex justify-center items-center">
          {/* <Checkbox id="gift" /> */}
          <Label
            htmlFor="gift"
            className="ml-2 dark:text-white flex text-center justify-center items-center"
          >
            Planning to buy it later? Add to Wishlist
          </Label>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full"
                onClick={addToWishlist}
              >
                {wishlistLoading ? <Check color="green" /> : "Add to Wish List"}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to your catalog</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default CartCard;
