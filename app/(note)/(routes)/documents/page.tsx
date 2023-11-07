"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note added successfully!",
      error: "Failed to create a new note.",
    });
  };

  console.log(user?.username);

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/assets/images/empty-light.png"
        width={200}
        height={337.22}
        alt="empty img"
        className="dark:hidden"
        priority={true}
      ></Image>
      <Image
        src="/assets/images/empty-dark.png"
        width={300}
        height={300}
        alt="empty img"
        className="hidden dark:block"
      ></Image>
      <h2 className="text-lg font-medium">
        {!!user?.firstName
          ? `Welcome to ${user?.firstName}'s Jottion.`
          : `Welcome to ${user?.username}'s Jottion.`}
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentsPage;
