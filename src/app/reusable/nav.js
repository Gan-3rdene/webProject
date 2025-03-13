import BurgerMenu from "../reusable/burger_menu";
import Image from "next/image";

export default function NavigationBar() {
    return (
        <header className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 ">
            <nav className="flex items-center justify-between">
                {/* <div>
                    <BurgerMenu/>
                </div> */}
                <div className="flex items-center align-middle space-x-4">
                    <Image src="/resources/cartridge.jpg" width={50} height={50}/>
                    <p>Whatever Games</p>
                </div>
                <div className="flex border border-black rounded-full w-80 items-center space-x-40">
                    <p className="text-black text-opacity-50 ms-2">Search for games</p>
                    
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>

                {/* <form className="border border-black rounded-full w-80 h-8 items-center space-x-40">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>
                </form> */}

                <div className="flex items-center">
                    <img src="/resources/circle-user-round.svg" width="25vw" height="25vw"></img>
                    <p className="ms-4">
                        Signup
                    </p>
                </div>
            </nav>
        </header>
    )
}