/*
  Appellation: dashboard <components>
  Contrib: @FL03
*/
// imports
import * as React from 'react';
// project
import { cn } from '@/lib/utils/cn';
// components
import { RefreshButton } from '@/components/common/buttons';
import {
  Scaffold,
  ScaffoldContent,
  ScaffoldHeader,
} from '@/components/common/scaffold';
import { Card } from '@/components/ui/card';
import { ActionGroup, ActionGroupItem } from '../action-group';

type DashboardScaffoldProps = {
  description?: React.ReactNode;
  title?: React.ReactNode;
  secondaryDisplay?: React.ReactNode;

  isLoading?: boolean;
  onRefresh?: () => void;
};
export const DashboardScaffold: React.FC<
  React.ComponentPropsWithRef<typeof Scaffold> & DashboardScaffoldProps
> = ({
  ref,
  className,
  children,
  secondaryDisplay,
  description,
  title = 'Dashboard',
  onRefresh,
  ...props
}) => {
  return (
    <Scaffold className={cn('relative h-full w-full', className)} {...props}>
      <ScaffoldHeader className="flex flex-nowrap items-start gap-4 lg:gap-6">
        <div className="flex flex-col mr-auto">
          {title && (
            <span className="text-xl font-semibold tracking-tight">
              {title}
            </span>
          )}
          {description && (
            <span className="text-muted-foreground">{description}</span>
          )}
        </div>
        {/* Dashboard Actions */}
        <ActionGroup variant="inline" className="ml-auto justify-end">
          <ActionGroupItem>
            <RefreshButton onRefresh={onRefresh} />
          </ActionGroupItem>
        </ActionGroup>
      </ScaffoldHeader>
      <ScaffoldContent className="h-full w-full flex flex-1 flex-row gap-2">
        {secondaryDisplay && (
          <div className="flex-1 h-full max-w-md">{secondaryDisplay}</div>
        )}
        <div className="flex-1 h-full w-full">
          <Card className="h-full w-full">{children}</Card>
        </div>
      </ScaffoldContent>
    </Scaffold>
  );
};
DashboardScaffold.displayName = 'DashboardScaffold';

export default DashboardScaffold;
