
import Preset from '../Lists/Preset';
import Container from '../subcomponents/Container.jsx';

export default function PresetBurger() {
    return (
        <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 mb-0">
            <h2 className="text-xl font-semibold border-b-2 mb-4"> 🍽️ Preset Burgers</h2>
            
            <div className="flex flex-col gap-4 p-5 text-black">
                {Preset.map((item) => (
                    <Container key={item.id} items={item} />
                ))}
            </div>
        </div>
    );
}
