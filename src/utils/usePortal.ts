import React, { useCallback } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = (elementId: string) =>
  useCallback(
    ({ children }: { children: React.ReactNode }) => {
      const node = document.getElementById(elementId);

      if (!node) return null;

      return createPortal(children, node);
    },
    [elementId],
  );
