import react from "react";
function Header(){
    return(
        <div class ="bg-black w-full h-[70px] flex flex-row text-white items-center justify-start">
            <ul class="flex flex-row text-white items-center justify-center p-2">
                <li class="text-3xl px-5">NewsHub</li>
                <li class="mx-6">US</li>
                <li class="mx-6">orld</li>
                <li class="mx-6">Politics</li>
                <li class="mx-6">Business</li>
                <li class="mx-6">Opinion</li>
                <li class="mx-6">Health</li>
                <li class="mx-6">Entertainment</li>
                <li class="mx-6">Travel</li>
                <li class="mx-6">Sports</li>
            </ul>
        </div>
    )
}
export default Header;