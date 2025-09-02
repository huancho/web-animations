import { cn } from '@/lib/utils';

export function TypographyH2({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn('text-xl font-bold tracking-tight', className)}
      {...props}
    >
      {children}
    </h2>
  );
}
