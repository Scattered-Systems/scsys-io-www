/**
 * Created At: 2025-04-07:06:10:54
 * @author - @FL03
 * @description - Plus Button Component
 * @file - plus-button.tsx
 */
'use client';
// imports
import * as React from 'react';
import { Loader2Icon, PlusIcon } from 'lucide-react';
// components
import { TooltipButton } from './tooltip-button';

type Props = {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  isLoading?: boolean;
  showLabel?: boolean;
};

export const PlusButton: React.FC<
  React.ComponentProps<typeof TooltipButton> & Props
> = ({
  description = 'Create a new item',
  label = 'Create',
  onClick,
  size = 'icon',
  variant = 'ghost',
  asChild = false,
  isLoading = false,
  showLabel = true,
  ...props
}) => {
  const buttonSize = showLabel ? 'default' : size;
  // return the button with a tooltip
  return (
    <TooltipButton
      asChild={asChild}
      disabled={isLoading}
      size={buttonSize}
      variant={variant}
      {...props}
    >
      {isLoading ? (
        <Loader2Icon className="h-4 w-4 animate-spin transition-colors" />
      ) : (
        <PlusIcon className="h-4 w-4" />
      )}
      <span className={showLabel ? 'not-sr-only' : 'sr-only'}>{label}</span>
    </TooltipButton>
  );
};
PlusButton.displayName = 'PlusButton';

export default PlusButton;
