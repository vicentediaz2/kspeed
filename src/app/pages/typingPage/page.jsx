import Sidebar from "@/app/components/common/Sidebar"

export default function home(){
    return(
        <div className="dark:bg-white flex items-center justify-center w-screen min-h-screen">
            <Sidebar />
            <div className="max-w-7xl w-full min-h-screen border"></div>
        </div>
    )
}