import { MdFastfood } from "react-icons/md";
export default function Header() {
    return (
        <div className="bg-orange-300 h-30 mx-4 my-5 w-full max-w-[992px] rounded-xl p-3 flex items-center justify-center">
            <div className="bg-orange-200 h-full w-full p-6 rounded-xl flex gap-4 items-center justify-center">
            <h1 className="text-5xl font-light text-center text-gray-700">Pastelaria do Seu Zé</h1>
            <MdFastfood className="text-7xl mb-4 text-red-400"></MdFastfood>
            </div>
        </div>
    );
    }