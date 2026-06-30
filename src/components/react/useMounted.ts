import { useEffect, useState } from 'react';

/** Avoid hydration mismatches by rendering static markup until the client mounts. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
