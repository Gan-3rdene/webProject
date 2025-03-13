import Image from "next/image";
import NavigationBar from "./reusable/nav";
import GameCard from "./reusable/game_card";
import FooterBar from "./reusable/footer";

export default function Home() {
  return (
    <body className="overflow-y-auto">
      <NavigationBar/>
      <div className="border border-black-400 lg:w-11/12 w-11/12 mx-auto"/>
      <div className="ms-10 mt-4 space-y-2">
        <p>Latest Games</p>
        <div className="flex space-x-8"> 
          <GameCard image="/resources/snake.jpg" title="Metal Gear V" tags={"Action, Story"} description="METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions."/>
          <GameCard image="/resources/hedgehog.jpg" title="Sonic Frontiers" tags={"Platform, Action"} description="Worlds are colliding in Sonic the Hedgehog’s newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. "/>
          <GameCard image="/resources/ape.jpg" title="Ape Out" tags={"Top-Down, Action"} description="APE OUT is a wildly intense and colorfully stylized smash ‘em up about primal escape, rhythmic violence, and frenetic jazz. Build up nearly unstoppable momentum and use your captors as both weapons and shields to crush everyone on your procedurally generated path to freedom."/>
          <GameCard image="/resources/hedgehog.jpg" title="Sonic Frontiers" tags={"Platform, Action"} description="Worlds are colliding in Sonic the Hedgehog’s newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. "/>
          <GameCard image="/resources/hedgehog.jpg" title="Sonic Frontiers" tags={"Platform, Action"} description="Worlds are colliding in Sonic the Hedgehog’s newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. "/>
        </div>
      </div>

      <div className="ms-10 mt-4 space-y-2">
        <p>Popular Games</p>
        <div className="flex space-x-8"> 
          <GameCard image="/resources/snake.jpg" title="Metal Gear V" tags={"Action, Story"} description="METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions."/>
          <GameCard image="/resources/hedgehog.jpg" title="Sonic Frontiers" tags={"Platform, Action"} description="Worlds are colliding in Sonic the Hedgehog’s newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. "/>
          <GameCard image="/resources/ape.jpg" title="Ape Out" tags={"Top-Down, Action"} description="APE OUT is a wildly intense and colorfully stylized smash ‘em up about primal escape, rhythmic violence, and frenetic jazz. Build up nearly unstoppable momentum and use your captors as both weapons and shields to crush everyone on your procedurally generated path to freedom."/>
          <GameCard image="/resources/hedgehog.jpg" title="Sonic Frontiers" tags={"Platform, Action"} description="Worlds are colliding in Sonic the Hedgehog’s newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. "/>
          <GameCard image="/resources/hedgehog.jpg" title="Sonic Frontiers" tags={"Platform, Action"} description="Worlds are colliding in Sonic the Hedgehog’s newest high-speed adventure! In search of the missing Chaos emeralds, Sonic becomes stranded on an ancient island teeming with unusual creatures. Battle hordes of powerful enemies as you explore a breathtaking world of action, adventure, and mystery. "/>
        </div>
      </div>
      <FooterBar/>

    </body>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
