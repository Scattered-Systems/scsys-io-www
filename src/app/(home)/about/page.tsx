/*
  Appellation: page <module>
  Contrib: @FL03
*/
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Page() {
  return (
    <Card className="flex flex-1 flex-col w-full">
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>A little bit about us!</CardDescription>
      </CardHeader>
      <CardContent>
        Our team is dedicated to providing the best service possible to our customers. We are always looking for ways 
        to improve our products and services, so if you have any feedback or suggestions, please let us know!
      </CardContent>
    </Card>
  )
}