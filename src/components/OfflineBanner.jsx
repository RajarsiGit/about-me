import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff } from "lucide-react";

export default function OfflineBanner() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {!online && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed left-0 right-0 top-0 z-[200] flex items-center justify-center gap-2 border-b border-amber-400/20 bg-[#0d0d10]/95 px-4 py-2.5 backdrop-blur-sm"
        >
          <WifiOff size={13} className="shrink-0 text-amber-400/70" />
          <span className="font-mono text-[11px] text-amber-400/70">
            You're offline — viewing cached content. The AI assistant and external links may not work.
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
