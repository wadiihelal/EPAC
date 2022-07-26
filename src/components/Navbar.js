import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
	return (
		<div>
			<nav className=" shadow-sm  w-full ">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer" >
									EPAC <span  href="/" className="text-blue-500">Technologies</span>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
									href="/"
										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Home
									</Link>
									<Link
										href="/zoneInventory"
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Zone Inventory
									</Link>										
									<Link
										href="/menu"
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Pallet Inventory
									</Link>										
									<Link
										href="/stats"
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Statistics
									</Link>								


								</div>
							</div>
						</div>
					</div>
				</div>


			</nav>
		</div>
	);
}

export default Navbar;