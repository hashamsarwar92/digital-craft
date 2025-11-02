"use client";

import { PRODUCT_CATAGORIES } from '@/config';
import React from 'react'
import NavItem from './NavItem';

const NavItems = () => {
    const [activeIndex, setActiveIndex] = React.useState<null | number>(null);
    const isAnyOpen = activeIndex !== null;
  return (
    <div className='flex gap-4 h-full'>
        {PRODUCT_CATAGORIES.map((category, i) => {

            const handleOpen = ()=>{
                if(activeIndex === i){
                    setActiveIndex(null);
                } else {
                    setActiveIndex(i);
                }
            }
            const isOpen = activeIndex === i;
            return (
                <NavItem key={category.value} category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen}/>
            )
        })}
    </div>
  )
}

export default NavItems