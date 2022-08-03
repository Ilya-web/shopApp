import React from 'react';

type TProps = {
  error: string;
};

export const Toaster: React.FC<TProps> = ({ error }: TProps) => {
  return <div>{error}</div>;
};
