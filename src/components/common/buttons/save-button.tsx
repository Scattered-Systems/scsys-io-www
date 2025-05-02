/*
  Appellation: create-button <components>
  Contrib: @FL03
*/
'use client';
// imports
import * as React from 'react';
import { Loader2Icon, SaveIcon } from 'lucide-react';
// components
import { Button } from '@/components/ui/button';

type Props = {
  isSaving?: boolean;
  showLabel?: boolean;
};

export const SaveButton: React.FC<
  Omit<React.ComponentPropsWithRef<typeof Button>, 'children'> & Props
> = ({
  ref,
  size = 'default',
  variant = 'ghost',
  disabled,
  isSaving,
  showLabel,
  onClick,
  ...props
}) => {
  const buttonSize = showLabel ? size : 'icon';
  // return the button with a tooltip
  return (
    <Button
      {...props}
      ref={ref}
      size={buttonSize}
      variant={variant}
    >
      {isSaving ? (
        <Loader2Icon className="animate-spin h-4 w-4" />
      ) : (
        <SaveIcon className="h-4 w-4" />
      )}
      <span className={showLabel ? 'animate-pulse not-sr-only' : 'sr-only'}>
        {isSaving ? 'Saving...' : 'Save'}
      </span>
    </Button>
  );
};
SaveButton.displayName = 'CreateButton';

export default SaveButton;
