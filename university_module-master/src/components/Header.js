export default function Header({ setIsOpen }) {
    return (
        <>
            <div className="bg-[black] text-yellow-400 h-[90px] flex items-center justify-between px-[50px]">
                
                <div className="relative border w-fit px-[5px] py-[5px]">
                    <p className="text-[40px]">Tomang</p>
                    <p className="absolute top-[49px] left-[25px] text-[14px]">university finder</p>
                </div>

                <button onClick={() => setIsOpen(true)} className="bg-yellow-400 text-white px-[30px] py-[5px] h-fit">Login</button>
            </div>
        </>
    );
}