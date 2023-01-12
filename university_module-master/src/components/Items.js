import { BuildingLibraryIcon } from '@heroicons/react/24/outline';

export default function Items({ currentItems }) {
    return (
        <div>
            {
                currentItems.map((e, index) => (
                    <div key={e.name} className="shadow-lg border rounded-md my-[10px] flex gap-[15px] items-center" >
                        <div>
                            <BuildingLibraryIcon className="w-[75px]" />
                        </div>
                        <div>
                            <p className="text-orange-900">{e.name}</p>
                            <a href={e.web_pages[0]} target="_blank" className="text-blue-800 underline">{e.domains[0]}</a>
                            <p className="text-[13px]">{e['state-province'] ? e['state-province'] : ''}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}