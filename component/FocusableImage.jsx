"use client"
export default function FocusableImage({src,alt}) {
    return <button onFocus={(e)=>{
        e.currentTarget.scrollIntoView({block:"center"})
    }} className={"focusable-img"} aria-label={alt}><img src={src} alt="" /></button>
}