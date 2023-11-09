import { Button } from "@nextui-org/react";

export default function Banner() { 

    return (
        <div className="flex xl:space-x-[200px] justify-center items-center fixed w-full h-[80px] bg-black bottom-0">
        <div className="hidden xl:inline text-white">
            <h1 className="text-2xl font-bold">Don’t miss what’s happening</h1>
            <span className="text-[18px] font-normal">
                People here are the first to know.
            </span>
        </div>

        <div className="space-x-3 ">
        <Button>Login</Button>
        <Button>Sign up</Button>
        </div>
    </div>

    )
}