/**
 * Created At: 2025-04-04:14:27:21
 * @author - @FL03
 * @description - Link Button Component with tooltip, icons, and more.
 * @file - link-button.tsx
 */
'use client';
// imports
import * as React from 'react';
import Link from 'next/link';
// components
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// project
import { Url } from '@/types';

type Props = {
  asChild?: boolean;
  showIcon?: boolean;
  showLabel?: boolean;
  description?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  href?: Url;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const LinkButton: React.FC<
  React.ComponentProps<typeof Button> &
    Props
> = ({
  asChild = false,
  showIcon = true,
  showLabel = true,
  description,
  disabled,
  href,
  icon,
  label: name,
  size = 'default',
  variant = 'link',
  onClick,
  ...props
}) => {
  if (!href) {
    disabled = true;
    href = '#';
  }

  const buttonSize = showIcon && !showLabel ? 'icon' : size;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            {...props}
            asChild={asChild}
            disabled={disabled}
            size={buttonSize}
            variant={variant}
          >
            <Link href={href} onClick={onClick}>
              {showIcon && icon}
              <span className={showLabel ? 'not-sr-only' : 'sr-only'}>
                {name}
              </span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{description ?? `Navigate to ${name}`}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};