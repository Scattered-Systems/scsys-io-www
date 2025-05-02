// imports
import * as React from 'react';
import { Loader2Icon, SaveIcon } from 'lucide-react';
// project
import { cn } from '@/lib/utils';
// components
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
  isSubmitting?: boolean;
  hideLabel?: boolean;
};

export const SubmitButton: React.FC<
  Omit<React.ComponentPropsWithRef<typeof Button>, 'children'> &
    SubmitButtonProps
> = ({
  ref,
  disabled,
  isSubmitting,
  hideLabel,
  size = 'default',
  variant = 'outline',
  ...props
}) => {
  return (
    <Button
      ref={ref}
      size={hideLabel ? 'icon' : size}
      variant={variant}
      disabled={disabled || isSubmitting}
      {...props}
    >
      {isSubmitting ? (
        <>
          <Loader2Icon className="h-4 w-4 anitmate-spin" />
          <span
            className={cn(
              'animate-pulse',
              hideLabel ? 'sr-only' : 'not-sr-only'
            )}
          >
            Submitting...
          </span>
        </>
      ) : (
        <>
          <SaveIcon className="h-4 w-4" />
          <span className={hideLabel ? 'sr-only' : 'not-sr-only'}>Submit</span>
        </>
      )}
    </Button>
  );
};
