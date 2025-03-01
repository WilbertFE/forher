"use client";

import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { MailOpen } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  const words = [
    {
      text: "Hello,",
      className: "text-white",
    },
    {
      text: "Tia",
      className: "text-cyan-400",
    },
  ];
  return (
    <div className="flex flex-wrap pt-36 pb-32 min-h-screen px-8 bg-black">
      <div className="w-full flex flex-col gap-y-4 items-center">
        <TypewriterEffect
          className="text-5xl text-center tracking-wider"
          words={words}
        />
        <p className="text-white text-sm">Someone I Admire 👋😁</p>
        <div className="my-12"></div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>
              <MailOpen /> Open Some Secret
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                National Secret Data Information
              </AlertDialogTitle>
              <AlertDialogDescription>
                what you will see in the future is something unexpected and
                unimaginable.{" "}
                <span className="font-bold">But I Hope You Continue It 😁</span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => push("/tia")}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
