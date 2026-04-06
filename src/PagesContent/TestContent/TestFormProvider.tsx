'use client';

import { ReactNode } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { testFormSchema, TestFormValues } from './schema';

interface TestFormProviderProps {
  children: ReactNode;
}

export function TestFormProvider({ children }: TestFormProviderProps) {
  const form = useForm<TestFormValues>({
    resolver: yupResolver(testFormSchema) as never,
    defaultValues: {
      answers: {},
    },
  });

  return (
    <FormProvider {...form}>
      {children}
    </FormProvider>
  );
}
