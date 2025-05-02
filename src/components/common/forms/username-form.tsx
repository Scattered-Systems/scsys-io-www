/**
 * 2025-04-02
 * @author: @FL03
 * @description:  a simple form for entering a username
 * @file: username-form.tsx
 */

'use client';
// imports
import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// project
import { logger } from '@/lib/logger';
import { cn } from '@/lib/utils';
// components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export const usernameSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters long')
      .max(20, 'Username must be at most 20 characters long')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores'
      ),
  })
  .passthrough();

export type UsernameFormValues = z.infer<typeof usernameSchema>;

type UsernameFormProps = {
  className?: string;
  onSubmit?: (data: UsernameFormValues) => void;
  defaultValues?: Partial<UsernameFormValues>;
  values?: UsernameFormValues;
};

export const UsernameForm: React.FC<
  UsernameFormProps &
    Omit<React.ComponentProps<'form'>, 'onSubmit' | 'defaultValue'>
> = ({ className, onSubmit, defaultValues, values, ...props }) => {

  // initialize the form
  const form = useForm<UsernameFormValues>({
    resolver: zodResolver(usernameSchema),
    defaultValues,
    values,
  });

  // handle form submission
  const handleSubmit = (data: UsernameFormValues) => {
    onSubmit?.(data);
    // log the form data
    logger.debug('Form submitted with data:', data);
    // reset the form after submission
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        className={cn('sm:max-w-[425px]', className)}
        onSubmit={form.handleSubmit(handleSubmit)}
        {...props}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
