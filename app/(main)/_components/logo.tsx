import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/assets/icons/logo-light.svg"
        width={30}
        height={30}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/assets/icons/logo-dark.svg"
        width={30}
        height={30}
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold")}>Jottion</p>
    </div>
  );
};
