import SideNaV from '@/app/ui/dashboard/sidenav'
import React from "react";

export default function Layout({ children}: {children:React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNaV />
            </div>
            <div className="grow p-6 md:overFlow-y-auto md:p-12">{children}</div>
        </div>
    );
}