// https://medium.com/@kcabading/creating-a-breadcrumb-component-in-a-next-js-app-router-a0ea24cdb91a
'use client'

import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import React from 'react'
import { usePathname } from 'next/navigation'

const formatLabel = (slug) => slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const CustomBreadcrumb = () => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )
    const activePathIndex = pathNames.length - 1;

    return (
        <Row className="d-flex align-items-center gap-3 mb-2">
            <Breadcrumb className="mb-0">
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        let isActive = index == activePathIndex;
                        if (isActive) {
                            return (
                                <BreadcrumbItem key={index} active={true}>
                                    {formatLabel(link)}
                                </BreadcrumbItem>
                            )
                        }
                        else {
                            return (
                                <BreadcrumbItem key={index} href={href}>
                                    {formatLabel(link)}
                                </BreadcrumbItem>
                            )
                        }
                    })
                }
            </Breadcrumb>
        </Row>
    )
}

export default CustomBreadcrumb
