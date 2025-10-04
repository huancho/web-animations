'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

export default function HeightDrawer() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, { height: refHeight }] = useMeasure();

  return (
    <div className="flex flex-col gap-4 items-start min-h-[242px]">
      <button
        className="bg-foreground text-background h-10 px-4 rounded-md cursor-pointer"
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </button>

      <motion.div
        animate={{ height: refHeight }}
        className="overflow-hidden bg-foreground text-background rounded-lg max-w-md"
      >
        <div ref={ref} className="flex flex-col p-4 gap-1">
          <h4 className="font-semibold">Fake Family Drawer</h4>
          <p className="text-gray-600">
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          <AnimatePresence mode="popLayout">
            {showExtraContent ? (
              <motion.p
                key="extra-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-600"
              >
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
