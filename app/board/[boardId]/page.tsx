import React from "react";
import Canvas from "./_components/canvas";
import Room from "@/components/room";
import Loading from "./_components/loading";

interface BoardidPageProps {
  params: { boardId: string };
}

const BoardIdPAge = ({ params }: BoardidPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPAge;
