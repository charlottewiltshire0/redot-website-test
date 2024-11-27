import IconArrowRight from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface WarningProps {
  mainMessage?: string;
  subMessage?: string;
  link?: string;
}

export const Banner = ({ mainMessage, subMessage, link }: WarningProps) => {
  if (!mainMessage) return null;

  return (
    <div className="flex items-center justify-center gap-3 bg-black py-3 text-sm font-medium text-white">
      <p className="text-white/60">{subMessage}</p>
      {subMessage && (
        <div>
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <p>{mainMessage}</p>
              <motion.svg
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              >
                <IconArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
              </motion.svg>
            </Link>
          ) : (
            <p>{mainMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};
