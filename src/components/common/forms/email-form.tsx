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
import { toast } from 'sonner';
import { z } from 'zod';
// project
import { logger } from '@/lib/logger';
import { cn } from '@/lib/utils';
// components
import { SubmitButton } from '@/components/common/buttons';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export const emailSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address'),
  })
  .passthrough();

export type EmailFormValues = z.infer<typeof emailSchema>;


type FormProps = {
  className?: string;
  defaultValues?: Partial<EmailFormValues>;
  values?: EmailFormValues;
  onSubmit?(data: EmailFormValues): void;
};

export const EmailForm: React.FC<
  FormProps & Omit<React.ComponentProps<'form'>, 'onSubmit' | 'defaultValue'>
> = ({ className, onSubmit, defaultValues, values, ...props }) => {
  // initialize the form
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues,
    values,
  });

  // handle form submission
  const handleSubmit = (formData: EmailFormValues) => {
    if (onSubmit) onSubmit(formData);
    // log the form data
    logger.debug('Form submitted with data:', formData);
    // notify the user
    toast.success('Email submitted successfully!');
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
          name="email"
          render={({ field: { value, ...field } }) => (
            <FormItem className="inline-flex flex-col w-full gap-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full"
                  placeholder="Enter an email address"
                  value={value ?? undefined}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton
          hideLabel
          type="submit"
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
    </Form>
  );
};
