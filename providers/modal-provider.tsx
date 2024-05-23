"use client"; //this means that is not server component but it is still rendered on server side

import RenameModal from "@/components/modals/rename-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <RenameModal />
    </>
  );
};
