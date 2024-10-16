import { Hero, GunScene, GunInfo } from "@/components";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/custom/ModeToggle";

export default function Home() {
  return (
    <main
      className="overflow-hidden main"
    >
      <div className="text-center container my-4 mx-auto z-10">
        <h1 className="text-3xl mb-4">Change the mode</h1>
        <div className="flex gap-2 justify-center">
          <Button className="buttonStyle">
            button
          </Button>
          <ModeToggle />
          <GunInfo />
        </div>
      </div>
      <GunScene />
      <Hero />
    </main>
  )
}