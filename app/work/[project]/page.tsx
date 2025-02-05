import Header from "@/components/Header"
import React from "react"

export default function Page({ params }: any) {
    const { project } = params;  //This project is the .../work/[project]/
    return (
        <div className="h-full w-full flex flex-col items-center justify-start py-12">
            <p className="text-xl">{project}</p>
        </div>
    )
}