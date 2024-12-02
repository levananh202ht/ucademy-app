import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconClock, IconEye, IconStart } from '../icons'


const CourseItem = () => {
    const courseInfo = [
        {
            icon: (className?: string) => <IconEye className={className}></IconEye>,
            title: '1000'
        },
        {
            icon: (className?: string) => <IconStart className={className}></IconStart>,
            title: '5.0'
        },
        {
            icon: (className?: string) => <IconClock className={className}></IconClock>,
            title: '30h25p'
        },
    ]
    return (
        <div className='bg-white border dark:bg-grayDarker dark:border-opacity-10 border-gray-200 p-5 rounded-lg'>
            <Link href="#" className='block h-[180px] relative'>
                <Image 
                src='https://images.unsplash.com/photo-1732192548673-e08daf9595cc?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                width={300}
                height={200}
                className='w-full h-full object-cover rounded'
                sizes="@media (min-width: 640px) 300px, 100vw"
                priority
                />
                <span className='absolute inline-block px-3 py-1 top-3 right-2 z-10 text-white font-medium bg-green-500 rounded-full text-xs'>
                    New</span>
            </Link>
            <div className="pt-4">
                <h3 className='font-bold text-lg mb-3'>Khoá học NextJS Pro - Xây dựng system hoàn chỉnh</h3>
                <div className="flex items-center gap-3 text-sx text-grayDark mb-5"> 
                    {
                        courseInfo.map((item, index) => (
                            <div className="flex items-center gap-1 " key={index}>
                                <div>{item.icon("size-4")}</div>
                                <span>{item.title}</span>
                            </div>
                        ))
                    }
                    <span className='font-bold  text-primary ml-auto text-base'>799.000</span>
                </div>
                <Link href='#' className='flex items-center justify-center mt-10 rounded-lg text-white font-semibold h-12 bg-primary w-full'>
                    Xem chi tiết
                </Link>
            </div>
            
        </div>
    )
}

export default CourseItem
