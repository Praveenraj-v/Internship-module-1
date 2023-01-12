import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import SideNavbar from "./components/SideNavbar";
import SearchBar from "./components/SearchBar";

export default function Result() {
    const [stateFilter, setStateFilter] = useState('');
    const [universityFilter, setUniversityFilter] = useState('');
    const [universityList, setUniversityList] = useState([]);
    const [filteredUniversityList, setFilteredUniversityList] = useState([]);

    useEffect(() => {
        var getItem = localStorage.getItem('search_key')
        fetch('http://universities.hipolabs.com/search?country=India', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                setUniversityList(data);
            })
    }, [])

    useEffect(() => {
        let newList = [];
        for (const i of universityList) {
            if(i['state-province'] == stateFilter){
                newList.push(i);
            }
        }
        setFilteredUniversityList(newList);
    },[stateFilter])

    useEffect(() => {
        let newList = [];
        for (const i of universityList) {
            if(i.name == universityFilter){
                newList.push(i);
            }
        }
        setFilteredUniversityList(newList);
    },[universityFilter])

    return (
        <>

            <div className="flex">
                <SideNavbar setFilter={setStateFilter} />
                <div className="px-[50px] overflow-y-scroll h-screen w-full">
                    <div className="sticky top-2">
                        <SearchBar setFilter={setUniversityFilter} />
                    </div>
                    <Pagination itemsPerPage={15} items={filteredUniversityList.length == 0 ? universityList : filteredUniversityList} />
                </div>
            </div>
        </>
    );
}