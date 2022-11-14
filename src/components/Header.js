import Image from "next/image";
import {MagnifyingGlassIcon,ShoppingCartIcon, Bars4Icon} from '@heroicons/react/24/outline'
function Header() {
  return (
    <header>
        {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-300 hover:bg-yellow-500">
            <input className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none" type="text"/>
            <MagnifyingGlassIcon className="h-12 p-4"/>
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-7 mx-6 whitespace-nowrap">
            <div className="link">
                <p>Hello Tarandeep Singh</p>
                <p className="font-extrabold">Account & List</p>
            </div>

            <div className="link">
                <p>Returns</p>
                <p className="font-extrabold">& Orders</p>
            </div>

            <div className="relative link flex items-center">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">2</span>
                <ShoppingCartIcon className="h-10"/>
                <p className="hidden md:inline font-extrabold mt-2">Basket</p>
            </div>
        </div>

      </div>
        {/* bottom nav */}
      <div className="flex items-center space-x-5 p-2 pl-5 bg-amazon_blue-light text-white text-sm" >
        <p className="link flex items-center">
            <Bars4Icon className="h-6 mr-1"/>
            All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        
      </div>
    </header>
  );
}

export default Header;
