'use client';

import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleCheck, Loader2 } from 'lucide-react';

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>(
    'idle'
  );
  const [feedback, setFeedback] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () => {
    setFeedback('');
    setIsOpen(false);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);

    setTimeout(() => {
      setFormState('idle');
      setFeedback('');
      setIsOpen(false);
    }, 3300);
  };

  return (
    <div className="min-h-40 flex items-center justify-center w-full">
      <motion.button
        layoutId="wrapper"
        className="bg-foreground text-background px-3 h-9 cursor-pointer"
        onClick={() => setIsOpen(true)}
        style={{ borderRadius: '8px' }}
      >
        <motion.span layoutId="title" className="text-sm block">
          Feedback
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId="wrapper"
            ref={ref}
            className="absolute bg-gray-200 text-background p-1 w-72 overflow-hidden"
            style={{ borderRadius: '8px' }}
          >
            <motion.span
              layoutId="title"
              className="absolute top-3 left-3 text-sm text-gray-500"
              style={{
                opacity: feedback ? 0 : 1,
              }}
            >
              Feedback
            </motion.span>
            <AnimatePresence mode="popLayout">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center space-y-1 text-sm h-36 bg-gray-200"
                  initial={{ y: -32, opacity: 0, filter: 'blur(4px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
                >
                  <CircleCheck className="text-blue-500 bg-blue-100 rounded-full" />
                  <h3 className="font-medium">Feedback received!</h3>
                  <p className="text-gray-500">Thanks for the contribution.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-foreground border border-gray-400 rounded-lg"
                  exit={{ y: 8, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
                >
                  <textarea
                    className="p-2 text-sm w-full min-h-24 focus:outline-none rounded-lg resize-none"
                    autoFocus
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                  <div className="flex justify-end p-2 border-t border-gray-400 border-dashed">
                    <motion.button
                      type="submit"
                      className="flex items-center justify-center bg-blue-500 text-foreground h-6 text-xs font-medium w-24 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
                    >
                      {formState === 'loading' ? (
                        <Loader2 className="animate-spin size-4" />
                      ) : (
                        'Send feedback'
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
