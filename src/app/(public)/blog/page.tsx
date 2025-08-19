/**
 * Created At: 2025.08.17:15:46:07
 * @author - @FL03
 * @file - blog/page.tsx
 */
"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <Card className="flex flex-col flex-1 h-full w-full">
        <CardHeader>
          <CardTitle>Blog</CardTitle>
          <CardDescription>
            Stay updated and informed about major changes, proposals, releases,
            and more!
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
Page.displayName = "BlogPage";
