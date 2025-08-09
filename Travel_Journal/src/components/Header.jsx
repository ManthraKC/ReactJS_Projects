 import globalicon from '../assets/globe-icon3.png'

export default function Header(){
    return (
        <header className="flex bg-red-500 p-4 text-white font-bold justify-center items-center " >
           <img  src={globalicon} alt="Logo" className="size-6 mr-2" />
            <h4>my travel journal.</h4>
        </header>
    );
}