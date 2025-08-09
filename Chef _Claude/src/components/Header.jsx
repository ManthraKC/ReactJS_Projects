import chef from '../assets/chef-claude-icon.png'

export default function Header(){
    return (
        <header className="flex justify-center items-center h-18 w-full bg-white px-20 py-4 shadow-md ring-1 ring-slate-900/8 gap-4">
            <img className="size-12" src={chef} alt="Chef Logo" />
            <h2 className='text-black-600 font-bold text-2xl tracking-wide'>Chef Claude</h2>
        </header>
    );
}