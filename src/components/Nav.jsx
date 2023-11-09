'use client'
import { Avatar, AvatarIcon, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AcmeLogo } from "./ui comp/AcmeLogo";
import { SearchIcon } from "./ui comp/SearchIcon";
import { userAccount } from "@/assets/constant";

export default function Nav() {
  const {data: session} = useSession()
  console.log(session)


  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
            {!session?.user ? 
            <Link href={"/login"}>
            <Avatar
            
            icon={<AvatarIcon/>}
            className={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/80"
            }}
            /> 
            </Link>
            :
            
              <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="#ffff"
              name="Jason Hughes"
              size="sm"
              src={session?.user?.image}
            />
          </DropdownTrigger>
            }
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem onClick={signOut} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
