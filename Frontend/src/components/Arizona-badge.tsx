import { Button } from "@/components/ui/button";
import icon from "@/assets/icon/Arizona.png";

export function BrandingBadge() {
  return (
    <Button
      onClick={() => window.open("https://sanketnangare.netlify.app", "_blank")}
      className="bg-white text-gray-600 text-xs rounded-b-none px-2 hover:bg-gray-200 border border-gray-200 border-b-0
                      dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:border-neutral-700 z-99"
    >
      <img src={icon} alt="Arizona" className="h-4 w-4" />
      <span className="hidden sm:inline ml-2">Made By Arizona</span>{" "}
    </Button>
  );
}
