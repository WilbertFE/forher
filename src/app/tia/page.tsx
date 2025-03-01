import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function page() {
  const cards = [
    {
      title: "The Real Wilbert Bernardi",
      description: "How people misunderstanding me",
      content: [
        "Jacob, Olivia, David, Willy, and some of my closest friends think I'm numb (a human who can't like/fall in love with other people).  Not just my close friends actually, many people also think like that about me. ",
        "But they are wrong, I am human too, I can like other people. But for some reason, maybe this is my talent, I'm quite skilled at hiding my feelings, even for years I can. ",
        "Honestly Tia, one of the most difficult things for me was being able to appear in front of you 😅. Maybe I can actually make a presentation, but if it's in front of you, you can be sure my hands and feet are shaking hahaha. Because in my subconscious, I always want to appear perfect in front of you, which in the end, instead of being perfect, actually makes me nervous and make stupid mistakes (I don't know if this is a bad thing or a good thing hahaha).",
        "If you are aware, I also rarely come to your class, if you ask me why, the answer is because you are there, Tia 😭. I always try to avoid you, not because I don't want to meet you, but because I can't. If you're near me, you can be sure that my heart rate will increase 3x faster 😁, even speaking becomes slurred.",
      ],
    },
    {
      title: "I Love You",
      description: "Tia",
      content: [
        "Maybe the first time I had that feeling was in 10th grade. But at that time, I could only admire you from afar (right now too anyway). ",
        "I always saw you as a woman that I could never achieve. You are beautiful, smart, and have character. Like a fictional character. ",
        "I included your name in my prayers and many times in my diary. ",
        "But all I can do is look at you from a distance and pretend as best as I can like I don't feel anything. I might be an expert at this.",
        "I also gave up and tried to forget it. But who would have thought that recently you made code that seemed aimed at me (or maybe I was just being overly confident). ",
        "But if it's true, it will be the best thing that has ever happened in my life 😁.",
      ],
    },
    {
      title: "My Purpose",
      description: "Making this",
      content: [
        "My goal for this is not to ask you to make relationship with me. But I just want you to know that there is someone who admires you from a distance. Someone who always acts like a complete idiot, but in his heart there is something he wants to express. I just want you to know, there is someone who loves you. ",
        "And also, maybe there will never be a better opportunity to express this feeling. ",
        "I realized that the current me was just a child, there was no way I could be in relationship. I still live supported by my parents. I can't be financially independent yet, there's no way I can make someone's daughter happy.",
        "I didn't ask you on a relationship with me, because I couldn't either. And I also don't ask you to wait until I'm ready. Because I know, waiting without certainty is painful. ",
        "But if, for example, one day I can be financially independent and you still like me, maybe we can do it. Just maybe. ",
        "I pray for you, hopefully you can achieve whatever your dreams are.",
      ],
    },
  ];
  return (
    <div className="flex flex-wrap pt-36 pb-32 min-h-screen px-8 text-white bg-black">
      <div className="w-full flex flex-col gap-y-4 items-center">
        <h1 className="text-4xl mb-2 font-bold text-center tracking-wider">
          National Secret Data
        </h1>
        <div className="flex flex-col gap-y-8 items-center">
          {cards.map((card, i) => (
            <Card key={i} className="w-[320px]">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <Separator />
              <CardContent>
                <p className="line-clamp-2">{card?.content[0]}</p>
              </CardContent>
              <Separator />
              <CardFooter>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button>See</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-center">
                      <DrawerTitle>{card.title}</DrawerTitle>
                      <DrawerDescription>{card.description}</DrawerDescription>
                    </DrawerHeader>
                    <ScrollArea className="h-[300px] mx-auto w-[350px] rounded-md border p-4">
                      {card.content.map((p, i) => (
                        <div className="mb-4" key={i}>
                          <p>{p}</p>
                        </div>
                      ))}
                    </ScrollArea>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button>Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </CardFooter>
            </Card>
          ))}
        </div>
        <h1 className="text-4xl mb-2 font-bold text-center tracking-wider">
          Thanks for seeing this!!
        </h1>
      </div>
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Just Us</AlertDialogTitle>
            <AlertDialogDescription>
              This information was all something that had never been told to
              anyone. Im the only one in this world and now you.{" "}
              <span className="font-bold">
                I would appreciate it if you would keep it a secret between the
                two of us.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
