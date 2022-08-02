import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faBoxesStacked, faHouseUser,faMagnifyingGlassChart,faPallet,faWarehouse} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Navbar ()
{
	const router = useRouter()

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
								<div style={{textDecoration:'none'}} className="ml-10 flex items-baseline space-x-4">
								<FontAwesomeIcon style={{marginLeft:'1%' ,marginRight:"-1%	"}} icon={faHouseUser} onClick={() => router.push('/')}  />

									<Link
										href="/"
										smooth={true}
										offset={50}
										duration={500}
										icon={faHouseUser}
										className="cursor-pointer font-black font-semibold px-3 py-2 text-md hover:font-black"
										style={{color:"black"}}
																		>
										Home     |
									
									</Link>
									<FontAwesomeIcon style={{marginLeft:'1%' ,marginRight:"-1%	"}} icon={faWarehouse}  />

									<Link
										href="/zoneInventory"
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
									Zone Inventory     |
									</Link>		
									<FontAwesomeIcon style={{marginLeft:'1%' ,marginRight:"-1%	"}} icon={faPallet}  />
								
									<Link
										href="/menu"
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Pallet Inventory    |
									</Link>	
									<FontAwesomeIcon style={{marginLeft:'1%' ,marginRight:"-1%	"}} icon={faBoxesStacked}  />

									<Link
										href="/load"
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Active LoadTags list    |  
									</Link>
									<FontAwesomeIcon style={{marginLeft:'1%' ,marginRight:"-2%	"}} icon={faMagnifyingGlassChart}  />
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