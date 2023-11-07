import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px]">
        <Image
          src="/assets/images/404-dark.png"
          fill
          className="hidden dark:block object-contain"
          alt="error"
        />
        <Image
          src="/assets/images/404-light.png"
          fill
          className="dark:hidden object-contain"
          alt="error"
        />
      </div>
      <h2 className="text-2xl font-bold">404 Not Found</h2>
      <h2 className="text-xl font-medium">Oops! Something is missing.</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
}
