//max-w-7xl : Max width cap (~80rem) : Prevents content becoming too wide
//This component creates a centered, responsive container with a maximum width and horizontal padding to standardize page layout spacing.
import { cn } from '@/lib/utils'
import React from 'react'

const MaxWidthWapper = ({
    className, 
    children
}:{
    className?: string;
    children: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-2.5 md:px-20", className)}>{children}</div>
  )
}

export default MaxWidthWapper