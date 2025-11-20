"use client";

import { FC } from "react";

export interface JokeProps {
  topic: string;
}

export const Joke: FC<JokeProps> = ({ topic }) => {
  const pun = `Why did the ${topic} cross the road? To get to the other side!`;
  return (
    <div className="mt-4 p-4 bg-muted rounded-md">
      <p className="text-lg">{pun}</p>
    </div>
  );
};
