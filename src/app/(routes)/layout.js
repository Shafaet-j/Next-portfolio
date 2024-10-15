import MouseEffect from '@/components/MouseEffect/MouseEffect'
import Footer from '@/components/shared/Footer/Footer'
import Navbar from '@/components/shared/Navbar/Navbar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className=" bg-[#070A29] text-[#adbef8]">
            <Navbar />
            <div className=" min-h-[calc(100vh-220px)]">{children}</div>
            <Footer />
            <MouseEffect />
        </div>
    )
}

export default layout