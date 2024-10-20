import { Photo } from "@/components/Photo/photo";
import { Social } from "@/components/Social/social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              {"Hello I'm "}
              <br /> <span className="text-accent">Igor Gomes</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Iexcel at crafting elegant digital experiences and I am proficent
              in various programming languages and tecnologies.
            </p>
            <div className="flex flex-col cursor-pointer xl:flex-row gap-8 items-center">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Curriculo</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
