import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="empty-org" width={200} height={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" mt-6" size="lg">
            Create organization
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[500px]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmptyOrg;
