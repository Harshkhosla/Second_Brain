
import { FiTwitter, FiVideo, FiFileText, FiLink, FiTag } from "react-icons/fi";

export const Sidebar = () => {
    return (
        <div className="  w-36 lg:w-48  xl:w-64  hidden md:block  p-5 bg-gray-100 h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Second Brain</h2>
            <nav className="space-y-4">
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                    <FiTwitter />
                    <span>Tweets</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                    <FiVideo />
                    <span>Videos</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                    <FiFileText />
                    <span>Documents</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                    <FiLink />
                    <span>Links</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                    <FiTag />
                    <span>Tags</span>
                </a>
            </nav>
        </div>
    )
}