import { createContext, useCallback, useContext, useRef, type ReactNode } from "react";

type Listener = (id: string) => void;

type SectionExpandValue = {
  requestOpen: (id: string) => void;
  subscribe: (listener: Listener) => () => void;
};

const SectionExpandContext = createContext<SectionExpandValue | null>(null);

export function SectionExpandProvider({ children }: { children: ReactNode }) {
  const listeners = useRef<Set<Listener>>(new Set());

  const subscribe = useCallback((listener: Listener) => {
    listeners.current.add(listener);
    return () => {
      listeners.current.delete(listener);
    };
  }, []);

  const requestOpen = useCallback((id: string) => {
    listeners.current.forEach((l) => l(id));
  }, []);

  const valueRef = useRef<SectionExpandValue>({ requestOpen, subscribe });

  return <SectionExpandContext.Provider value={valueRef.current}>{children}</SectionExpandContext.Provider>;
}

export function useSectionExpand() {
  return useContext(SectionExpandContext);
}

/** Opens the target section (if collapsed) and smooth-scrolls to it. */
export function openAndScrollTo(id: string, requestOpen?: (id: string) => void) {
  requestOpen?.(id);
  // Let the panel start expanding before measuring the scroll target.
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
