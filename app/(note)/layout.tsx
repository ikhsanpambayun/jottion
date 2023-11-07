"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Sidebar from "./_components/sidebar";
import { SearchCommand } from "@/components/search-command";

const NoteLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#0A0A0A]">
      <Sidebar />
      <div className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </div>
    </div>
  );
};

export default NoteLayout;
