import React from "react"
import Image from "next/image";
import { WorkProjects } from "@/myutils/workProjects";
import { ImagePreview } from "@/components/ImagePreview";

export default function Page({ params }: any) {
    const { project } = params;  //This project is the .../work/[project]/
    const workProject = WorkProjects[project]

    return (
        <div className="h-full w-full flex flex-col items-center justify-start px-[10%] py-12 gap-y-8">
            {/* Demo */}
            {
                workProject.demoImg ?
                <div className="relative w-full h-96 aspect-square object-contain">
                    <Image src={workProject.demoImg ?? ''} alt={workProject.title} fill className='w-full h-full absolute' loading="eager" />
                </div> : <></>
            }
            {/* Title */}
            <p className="md:text-3xl text-xl font-bold text-white">{workProject.title}</p>
            {/* Overview */}
            <p className="md:text-xl text-lg font-semibold text-white">{workProject.overview}</p>
            {/* Service Details */}
            {
                workProject.serviceDetails ? 
                    <div className="w-full">
                        <p className="md:text-xl text-lg font-bold">Service Details:</p>
                        <div className="w-full pl-8">
                            {
                                Array.isArray(workProject.serviceDetails) ?
                                    <ol className="list-decimal list-inside">
                                        {
                                            workProject.serviceDetails.map((detail, index) => {
                                                return (
                                                    <li key={index} className="font-normal">{detail}</li>
                                                )
                                            })
                                        }
                                    </ol> : <></>
                            }
                        </div>
                </div> : <></>       
            }
            {/* Tech Implementation */}
            <div className="w-full flex flex-col items-center justify-start gap-y-4">
                {/* Header */}
                <p className="w-full text-left md:text-xl text-lg font-bold text-white">Technical Implementation:</p>
                {/* System Diagram */}
                {
                    workProject.technicalImplementation.systemDesignDiagram ?
                        <div className="w-full h-auto flex flex-col items-center justify-start gap-y-3">
                            <div className="relative w-full h-96 object-contain">
                                {/* <Image src={workProject.technicalImplementation.systemDesignDiagram ?? ''} alt={workProject.title} fill className='w-full h-full absolute' loading="eager" /> */}
                                    <ImagePreview src={workProject.technicalImplementation.systemDesignDiagram ?? ''} alt={workProject.title} className='w-full h-full absolute cursor-zoom-in' />
                            </div>
                            <p className="font-semibold text-gray-300">System Design Diagram</p>
                        </div> : <></>
                }
                {/* Sub Category */}
                <div className="w-full lg:pl-16 pl-8 flex flex-col items-start justify-start gap-y-4">
                    {/* Tools Used */}
                    <div className="w-full">
                        {/* Heading */}
                        <div className="flex flex-row items-center justify-start gap-x-2">
                            <img src="/icons/circle-solid.svg" alt="circle" className="w-2 h-2"/>
                            <p className="font-semibold text-lg text-gray-200">Tools Used:</p>
                        </div>
                        <p className="pl-8">{workProject.technicalImplementation.toolsUsed.join(", ")}</p>
                    </div>
                    {/* ML Models Used */}
                    {
                        workProject.technicalImplementation.mlModelsUsed ? 
                        <div className="w-full">
                            {/* Heading */}
                            <div className="flex flex-row items-center justify-start gap-x-2">
                                <img src="/icons/circle-solid.svg" alt="circle" className="w-2 h-2"/>
                                <p className="font-semibold text-lg text-gray-200">ML Models Used:</p>
                            </div>
                            <p className="pl-8">{workProject.technicalImplementation.mlModelsUsed.join(", ")}</p>
                        </div> : <></>
                    }
                    {/* System Design Description */}
                    {
                        workProject.technicalImplementation.systemDesignDescription ? 
                        <div className="w-full">
                            {/* Heading */}
                            <div className="flex flex-row items-center justify-start gap-x-2">
                                <img src="/icons/circle-solid.svg" alt="circle" className="w-2 h-2"/>
                                <p className="font-semibold text-lg text-gray-200">System Design:</p>
                            </div>
                                {/* Description */}
                                <div className="pl-12">
                                    {
                                        Array.isArray(workProject.technicalImplementation.systemDesignDescription) ?
                                            <ol className="list-decimal list-outside">
                                                {
                                                    workProject.technicalImplementation.systemDesignDescription.map((desc, index) => {
                                                        return (
                                                            <li key={index}>{desc}</li>
                                                        )
                                                    })
                                                }
                                            </ol> : <p>{workProject.technicalImplementation.systemDesignDescription}</p>
                                    }
                                </div>
                        </div> : <></>
                    }
                </div>
            </div>
            {/* My Roles */}
            <div className="w-full flex flex-col items-center justify-start gap-y-4">
                <div className="w-full">
                        {/* Heading */}
                        <p className="font-bold md:text-xl text-lg text-gray-200">My Role:</p>
                        <div className="pl-8">
                            {
                                Array.isArray(workProject.myRoles) ?
                                    <ol className="list-decimal list-inside">
                                    {
                                        workProject.myRoles.map((role, index) => {
                                            return (
                                                <li key={index}>
                                                    <p className="inline font-semibold">{typeof role === "object" ? role.heading : role}:</p>
                                                    <p className="w-full pl-8">{typeof role === "object" ? role.description : ''}</p>
                                                </li>
                                            )
                                        })
                                    }
                                    </ol> : <p>{workProject.myRoles}</p>
                            }
                        </div>
                    </div>
            </div>
            {/* Challenges */}
            {
                workProject.challengesAndSolutions ?
                <div className="w-full flex flex-col items-center justify-start gap-y-4">
                <div className="w-full">
                        {/* Heading */}
                        <p className="font-bold md:text-xl text-lg text-gray-200">Challenges and Solutions:</p>
                        <div className="pl-8">
                            {
                                <ol className="list-decimal list-inside">
                                {
                                    workProject.challengesAndSolutions.map((chal, index) => {
                                        return (
                                            <li key={index}>
                                                <p className="inline font-semibold">{typeof chal === "object" ? chal.heading : chal}:</p>
                                                <p className="w-full pl-8">{typeof chal === "object" ? chal.description : ''}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ol>
                            }
                        </div>
                    </div>
                </div> : <></>
            }
            {/* Upcoming */}
            {
                workProject.upcoming ?
                <div className="w-full flex flex-col items-center justify-start gap-y-4">
                <div className="w-full">
                        {/* Heading */}
                        <p className="font-bold md:text-xl text-lg text-gray-200">Upcoming:</p>
                        <div className="pl-8">
                            {
                                <ol className="list-decimal list-inside">
                                {
                                    workProject.upcoming.map((upcomingFeature, index) => {
                                        return (
                                            <li key={index}>
                                                <p className="inline font-semibold">{typeof upcomingFeature === "object" ? upcomingFeature.heading : upcomingFeature}:</p>
                                                <p className="w-full pl-8">{typeof upcomingFeature === "object" ? upcomingFeature.description : ''}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ol>
                            }
                        </div>
                    </div>
                </div> : <></>
            }
            {/* Empty Footer */}
            <div className="flex-none w-full h-32">

            </div>
        </div>
    )
}