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
import { toast } from 'sonner';

export const usernameSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters long')
      .max(20, 'Username must be at most 20 characters long')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores',
      ),
  })
  .loose();

export type UsernameFormValues = z.infer<typeof usernameSchema>;

type UsernameFormProps = {
  className?: string;
  onSubmit?: (data: UsernameFormValues) => void;
  defaultValues?: Partial<UsernameFormValues>;
  values?: UsernameFormValues;
  showLabel?: boolean;
};

export const UsernameForm: React.FC<
  UsernameFormProps &
    Omit<React.ComponentProps<'form'>, 'onSubmit' | 'defaultValue'>
> = ({ className, onSubmit, defaultValues, values, showLabel, ...props }) => {
  // initialize the form
  const form = useForm<UsernameFormValues>({
    resolver: zodResolver(usernameSchema),
    defaultValues,
    values,
  });

  // handle form submission
  const handleSubmit = (formData: UsernameFormValues) => {
    toast.promise(
      async () => {
        if (onSubmit) onSubmit(formData);
      },
      { success: 'Email submitted successfully!' },
    );
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
          name='username'
          render={({ field }) => (
            <FormItem>
              <div className='inline-flex flex-nowrap items-center gap-1'>
                <FormLabel className={showLabel ? 'not-sr-only' : 'sr-only'}>
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your username'
                    {...field}
                    className='w-full'
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
