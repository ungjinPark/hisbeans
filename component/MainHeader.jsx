'use client'

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const MenuRenderer = ({pathname,menuitems}) => (
    
    <nav className="gnb">
        <ul>
        {menuitems.map((item,index)=>(<li key={index}><a href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : "false"}>{item.label}</a></li>))}
        </ul>
    </nav>
);

export default function MainHeader() {
    const [mounted,mount] = useState(false);
    const dialogRef = useRef(null);
    const isMobile = useState( useMediaQuery({query:"(max-width:900px)"}) );

    useEffect(()=>{
        if(!mounted) mount(true);
        dialogRef.current?.close();
    },[isMobile]);

    const pathname = usePathname();
    const menuitems = [
        {href:"/espresso",label:"에스프레소"},
        {href:"/hygiene",label:"위생 교육"},
        {href:"/milksteam",label:"우유스팀"},
        {href:"/utensils",label:"주방집기류"},
        {href:"/consideration",label:"교육자 참고사항"},
    ];

    
    
    return (
        <header>
            <h1 className="logo font-english-em"><a href="/" aria-label="Hisbeans Home">Hisbeans</a></h1>
            <button className="menu" aria-label="메뉴 열기" onClick={()=>{
                dialogRef.current?.showModal();
            }}>
                <i className="fa-solid fa-bars" style={{fontSize:"1.5rem"}}></i>
             </button>
            <dialog ref={dialogRef}>
                <button aria-label="닫기" className="btn-close" onClick={()=>{
                    dialogRef.current?.close();
                }}></button>
                <MenuRenderer menuitems={menuitems} pathname={pathname}></MenuRenderer>
            </dialog>
            <MenuRenderer menuitems={menuitems} pathname={pathname}></MenuRenderer>
          </header>
    )
}