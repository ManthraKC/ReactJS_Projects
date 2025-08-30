import Images from "../subcomponents/Images"

export default function Header(){
    return (
        <div className='flex h-23 w-full p-5 justify-around items-center bg-gradient-to-r from-yellow-600 to-yellow-400 gap-2'>
            <Images />
        <div className="head">
            <h1 className="text-4xl font-semibold text-white ">🍔Brrrgrrr</h1>
            <p className="text-sm text-center">Build Your Dream Burger - Fresh Ingredients, Infinite Possibilities!</p>
        </div>
        </div>
    );
}