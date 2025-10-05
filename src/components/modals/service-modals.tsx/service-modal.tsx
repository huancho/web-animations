'use client';

import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

const SERVICES = [
  {
    title: 'Branding',
    description: 'Build a strong and consistent brand identity.',
    longDescription:
      'We create visual identities that resonate with your audience — from logos and color palettes to tone of voice and brand guidelines. Our goal is to give your business a clear and memorable presence across all channels.',
    image: '/modals/branding.webp',
  },
  {
    title: 'Web Development',
    description: 'Custom websites and web applications.',
    longDescription:
      'We design and develop responsive, scalable, and user-friendly websites. Whether you need a marketing site or a fully interactive web app, we combine design and engineering to deliver seamless digital experiences.',
    image: '/modals/webdev.webp',
  },
  {
    title: 'UX/UI Design',
    description: 'Design experiences your users love.',
    longDescription:
      'Our team focuses on creating interfaces that are both visually appealing and highly intuitive. Through research, wireframing, and prototyping, we ensure your product is easy to use and engaging for every visitor.',
    image: '/modals/uxui.webp',
  },
  {
    title: 'Automation',
    description: 'Streamline workflows with automation.',
    longDescription:
      'We develop tailored scripts and integrations to save your team time on repetitive tasks. From automating data flows to building custom tools, we help you focus on growth instead of manual work.',
    image: '/modals/automation.webp',
  },
];

export default function ServiceModal() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () =>
    setActiveService(null)
  );

  useEffect(() => {
    if (activeService) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [activeService]);

  return (
    <>
      <AnimatePresence>
        {activeService && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <motion.div
                layoutId={activeService.title + 'container'}
                ref={ref}
                className="relative max-w-lg h-auto bg-[#1c1c1c] p-4 rounded-lg space-y-2"
              >
                <div className="flex items-center gap-4">
                  <motion.img
                    src={activeService.image}
                    alt={activeService.title}
                    width={1024}
                    height={1024}
                    className="object-cover w-12 h-auto rounded-lg"
                    layoutId={activeService.title + 'image'}
                  />

                  <div className="flex items-center justify-between w-full gap-8">
                    <div className="flex flex-col">
                      <motion.h2
                        layoutId={activeService.title + 'title'}
                        className="font-medium"
                      >
                        {activeService.title}
                      </motion.h2>
                      <motion.p
                        layoutId={activeService.title + 'description'}
                        className="text-sm text-gray-300"
                      >
                        {activeService.description}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={activeService.title + 'button'}
                      className="text-xs bg-foreground text-background px-2 py-1 rounded-full"
                    >
                      View
                    </motion.button>
                  </div>
                </div>

                <motion.p
                  key={activeService.title + 'longDescription'}
                  className="text-sm text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {activeService.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <ul className="[&>li:last-child>div:nth-child(2)]:border-b-0">
        {SERVICES.map((service) => (
          <motion.li
            key={service.title}
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setActiveService(service)}
            layoutId={service.title + 'container'}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              width={1024}
              height={1024}
              className="object-cover w-12 h-auto rounded-lg"
              layoutId={service.title + 'image'}
            />

            <div className="flex items-center justify-between w-full gap-8 border-b border-foreground/20 py-3">
              <div className="flex flex-col">
                <motion.h2
                  layoutId={service.title + 'title'}
                  className="font-medium"
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  layoutId={service.title + 'description'}
                  className="text-sm text-gray-300"
                >
                  {service.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={service.title + 'button'}
                className="text-xs bg-foreground text-background px-2 py-1 rounded-full cursor-pointer"
              >
                View
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
