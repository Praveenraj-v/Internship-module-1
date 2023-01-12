import { MagnifyingGlassIcon, CheckIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react";
import { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";

export default function SearchBar({ setFilter }) {
    const [nameList, setNameList] = useState([]);
    const [selected, setSelected] = useState();
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=India', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                setNameList(data);
            })
    }, [])

    const filteredUniversity =
        query === ''
            ? nameList
            : nameList.filter((university) =>
                university.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    function setDataInLocalstorage(university) {
        setFilter(university)
    }
    return (
        <div className=" w-[500px] mx-auto">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-full bg-white text-left shadow-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                            displayValue={(university) => university.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredUniversity.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredUniversity.map((university) => (
                                    <Link to="/result">
                                        <Combobox.Option
                                            key={university.name}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                }`
                                            }
                                            value={university}
                                            onClick={() => setDataInLocalstorage(university.name)}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span

                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {university.name}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                }`}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    </Link>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
