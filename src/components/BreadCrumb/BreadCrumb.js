// https://medium.com/@kcabading/creating-a-breadcrumb-component-in-a-next-js-app-router-a0ea24cdb91a
'use client'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

const CustomBreadcrumb = () => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )
    const activePathIndex = pathNames.length - 1;

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        let isActive = index == activePathIndex;
                        if (isActive) {
                            return (
                                <BreadcrumbItem key={index} active={true}>
                                    {link}
                                </BreadcrumbItem>
                            )
                        }
                        else {
                            return (
                                <BreadcrumbItem key={index} href={href}>
                                    {link}
                                </BreadcrumbItem>
                            ) 
                        }
                    })
                }
            </Breadcrumb>
        </div>
    )
}

export default CustomBreadcrumb