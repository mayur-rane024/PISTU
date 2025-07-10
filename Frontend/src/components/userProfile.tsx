import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { handleLogout } from "@/functions/checkAuth";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const UserProfile: React.FC<any> = ({ theme, setTheme }) => {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      if (currentUser) {
        setUser(currentUser);
        // console.log("User fetched:", currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const showCart = () => {
    navigate(`/cart`);
  };

  const showWishlist = () => {
    navigate(`/wishlist`);
  };

  const showOrders = () => {
    navigate(`/orders`);
  };

  const showHome = () => {
    navigate(`/`);
  };

  const handleUserProfile = () => {
    navigate(`/user`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full p-0 w-10 h-10">
          <Avatar>
            {user?.photoURL ? (
              <AvatarImage src={user.photoURL} alt="User Avatar" />
            ) : (
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Fallback Avatar"
              />
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-32">
        <DropdownMenuLabel>User Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={handleUserProfile}
        >
          Profile Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={showWishlist}>
          Your Wishlists
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={showOrders}>
          Your Orders
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={showCart}>
          Your Cart
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={showHome}>
          Home
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light {theme === "light" && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark {theme === "dark" && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System {theme === "system" && "✓"}
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
