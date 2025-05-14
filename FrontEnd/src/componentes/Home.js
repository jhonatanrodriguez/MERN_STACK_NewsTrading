import React from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer } from "recharts";
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell } from "recharts";
import Header from './Header';
function Home() {
    const [bar, setBar] = useState([]);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [err, setErr] = useState([]);
    const fetchBarData = async () => {
        try {
            const response = await fetch('http://localhost:3000/get');
            const result = await response.json();
            setBar(result);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/topic');
            const result = await response.json();
            setData(result);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchData1 = async () => {
        try {
            const response = await fetch('http://localhost:3000/topic1');
            const result = await response.json();
            setData1(result);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchData2 = async () => {
        try {
            const response = await fetch('http://localhost:3000/topic3');
            const result = await response.json();
            setData2(result);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchData3 = async () => {
        try {
            const response = await fetch('http://localhost:3000/topic2');
            const result = await response.json();
            setData3(result);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchData4 = async () => {
        try {
            const response = await fetch('http://localhost:3000/topic4');
            const result = await response.json();
            setData4(result);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
        fetchData1();
        fetchData2();
        fetchData3();
        fetchData4();
        fetchBarData();
    }, []);
    
    const ElementsCards1 = data.map(dato => (
        <div key={dato.id}>
            <div class="h-[138px] w-[400px] rounded-lg flex flex-row items-center justify-start my-4">
                <div class="bg-cover bg-center w-[170px] h-[138px] rounded-lg mr-2"
                    style={{backgroundImage:`url(${dato.noti1.banner_image})`}}>
                </div>
                <div class="flex flex-col items-start justify-start w-[300px] h-[138px] mb-2">
                    <div class="flex flex-row items-center justify-center">
                        <div class="bg-cover bg-center w-[35px] h-[35px] rounded-full m-1"
                            style={{ backgroundImage: `url(${dato.noti1.banner_image})` }}>
                        </div>
                        <h1 class="text-base font-semibold">{dato.noti1.authors}<a class="text-gray-600 text-sm"> &bull; 1 hours ago</a></h1>
                    </div>
                    <h2 class="leading-tight mb-6 mt-2 text-base">{dato.noti1.tituloCorto}...</h2>
                    <small><a class="text-red-600 text-lg mb-0">{dato.noti1.category_within_source} </a > &bull; <a class="text-gray-600">2 min Read</a> </small>
                </div>
            </div>         
        </div>
    ));
    const ElementsCards2 = data1.map(dato => (
        <div class="flex flex-row items-center justify-center w-full h-100">
            <div key={dato.id} class="h-100 w-100 m-2 rounded-lg p-2 flex flex-col">
                <div class="h-[350px] w-full rounded-lg flex flex-col items-center justify-start m-2">
                    <div class="bg-cover bg-center w-full h-[350px] rounded-lg"
                        style={{ backgroundImage: `url(${dato.noti2.banner_image})` }}>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start w-full h-full m-2 p-2">
                    <div class="flex flex-row items-center justify-center">
                        <div class="bg-cover bg-center w-[50px] h-[50px] rounded-full mr-2"
                            style={{ backgroundImage: `url(${dato.noti2.banner_image})` }}>
                        </div>
                        <h1 class="text-xl font-semibold">{dato.noti2.authors}<a class="text-gray-600"> &bull; 1 hours ago</a></h1>
                    </div>
                    <h2 class="leading-tight mb-2 mt-2 text-2xl">{dato.noti2.title} </h2>
                    <h3 class="text-gray-500 mb-5 text-xl text-justify leading-tight">
                        {dato.noti2.summary}
                    </h3>
                    <small><a class="text-red-600 text-lg">{dato.noti2.category_within_source}</a > &bull; <a class="text-gray-600">2 min Read</a> </small>
                </div>
            </div>
        </div>
    ));
    const ElementsCards3 = data2.map(dato => (
        <div key={dato.id}>
            <div class="h-[185px] rounded-lg flex flex-row items-center justify-start">
                <div class="bg-cover bg-center w-[250px] h-[170px] rounded-lg mr-2"
                    style={{ backgroundImage: `url(${dato.noti4.banner_image})` }}>
                </div>
                <div class="flex flex-col items-start justify-start w-[300px] h-[170px] pl-2 mb-2">
                    <div class="flex flex-row items-center justify-center">
                        <div class='bg-[url("https://cdn.benzinga.com/files/images/story/2025/04/23/Elon-Musk-Listens-As-U-s--President-elec.jpeg?width=1200&height=800&fit=crop")] 
                                             relative bg-no-repeat bg-cover bg-center w-[30px] h-[30px] rounded-full m-1'></div>
                        <h1 class="text-base font-semibold">{dato.noti4.authors}<a class="text-gray-600"> &bull; 1 hours ago</a></h1>
                    </div>
                    <h2 class="leading-tight mb-5 mt-2 text-xl">{dato.noti4.tituloCorto} </h2>
                    <small><a class="text-red-600 text-base">{dato.noti4.category_within_source} </a > &bull; <a class="text-gray-600">2 min Read</a> </small>
                </div>
            </div>
        </div>
    ));
    const ElementsCards4 = data3.map(dato => (
        <div class=" flex flex-row items-center justify-center w-full h-100">
            < div key={dato.id} class="h-100 w-100 rounded-lg flex flex-col" >
                <div class="h-100 w-full m-2 rounded-lg p-2 flex flex-col">
                    <div class="bg-gray-400 h-[250px] w-full rounded-lg flex flex-col items-center justify-start m-2">
                        <div class="bg-cover bg-center w-full h-[250px] rounded-lg"
                            style={{ backgroundImage: `url(${dato.noti3.banner_image})` }}>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-start w-full h-full m-2 p-2">
                        <div class="flex flex-row items-center justify-center">
                            <div class="bg-cover bg-center w-[40px] h-[40px] rounded-full m-1"
                                style={{ backgroundImage: `url(${dato.noti3.banner_image})` }}>
                            </div>
                            <h1 class="font-semibold">{dato.noti3.authors}<a class="text-gray-600"> &bull; 20 mins ago</a></h1>
                        </div>
                        <h2 class="leading-tight mb-2 mt-2 text-lg">{dato.noti3.title}</h2>
                        <small><a class="text-red-600 text-base">{dato.noti3.category_within_source} </a > &bull; <a class="text-gray-600">2 min Read</a> </small>
                    </div>
                </div>
            </div >
        </div >
    ));
    const ElementsCards5 = data4.map(dato => (
        <div class=" flex flex-row items-center justify-center w-full h-100">
            < div key={dato.id} class="h-100 w-100 rounded-lg flex flex-col" >
                <div class="flex flex-row justify-center items-center w-100 h-[80px] m-5">
                    <div class="bg-cover bg-center w-[60px] h-[60px] rounded-full"
                        style={{ backgroundImage: `url(${dato.noti5.banner_image})` }}>
                    </div>
                    <div class="flex flex-col justify-center items-start w-[80%] p-3">
                        <h1 class="text-black font-semibold text-3xl">{dato.noti5.source}</h1>
                        <h3 class="text-red-600 font-normal">{dato.noti5.authors}</h3>
                    </div>
                </div>
            </div >
        </div >
    ));
    return (
        <div>
            <Header />
            <p class="p-8"><a class="text-red-600 text-xl">News Update:&nbsp;</a> &nbsp;
                Ukrainian troops saw Russian soldiers swept away &nbsp;&nbsp;
                <a class="text-red-600">&#9679;&nbsp;&nbsp;</a> Philadelphia under code red alert as millions from US East
                Coast &nbsp;&nbsp; <a class="text-red-600">&#9679;</a> &nbsp;&nbsp;Turkish lira crashes as</p>
            <div class="flex flex-row items-center justify-center w-full h-100">
                <div class='bg-[url("https://cdn.benzinga.com/files/images/story/2025/04/23/Elon-Musk-Listens-As-U-s--President-elec.jpeg?width=1200&height=800&fit=crop")]
                        relative bg-no-repeat bg-cover bg-center w-[67%] h-[605px] rounded-lg flex flex-row justify-start items-center'>
                    <div class="bg-white flex flex-row justify-center items-center w-[400px] h-[500px] rounded-lg p-2">
                        <div class="h-100 w-100 m-2 rounded-lg p-2 flex flex-col">
                            <div class="flex flex-col items-start justify-start w-full h-full m-2 p-2">
                                <div class="flex flex-row items-center justify-center">
                                    <div class='bg-[url("https://cdn.benzinga.com/files/images/story/2025/04/23/Elon-Musk-Listens-As-U-s--President-elec.jpeg?width=1200&height=800&fit=crop")] 
                                             relative bg-no-repeat bg-cover bg-center w-[50px] h-[50px] rounded-full mr-2'></div>
                                    <h1 class="text-xl font-semibold">Ananya Gairola<a class="text-gray-600 text-lg font-medium"> &bull; 5 mins ago</a></h1>
                                </div>
                                <h2 class="leading-tight mb-2 mt-2 text-4xl font-semibold">Elon Musk Equates Car Ownership In Future To Riding
                                    A Horse While Using A Flip Phone </h2>
                                <h3 class="text-gray-500 mb-5 text-lg text-justify leading-tight">
                                    On Tuesday, during Tesla Inc.'s TSLA first-quarter earnings
                                    call, CEO Elon Musk predicted that car ownership will soon
                                    become obsolete... <b class="text-black font-semibold">Read More</b> 
                                </h3>
                                <small class="text-gray-800 text-lg">April 15, 2025</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[33%] h-100 ml-3">
                    {ElementsCards1}
                </div>
            </div>
            <div class="flex flex-row justify-between items-center m-2">
                <p class="text-black text-4xl text-start font-bold m-2">Latest News</p>
                <p class="text-red-600 text-xl text-end m-2">See all > </p>
            </div>
            <div class="h-100 w-[33%] m-2 p-2 flex flex-row items-start justify-center w-full h-100">
                {ElementsCards2}
            </div>
            <div class="flex flex-row justify-between items-center m-2">
                <p class="text-black text-4xl text-start font-bold m-2">Trading </p>
                <p class="text-red-600 text-xl text-end m-2">See all > </p>
            </div>
            <div class="flex flex-row items-center justify-center w-full h-100">
                <div class="flex flex-col items-center justify-center w-[55%] h-100">
                    <div class='bg-[url("https://staticx-tuner.zacks.com/images/default_article_images/default39.jpg")] 
                        relative bg-no-repeat bg-cover bg-center w-[95%] h-[300px] m-2 rounded-lg'>
                    </div>
                    <div class="flex flex-col items-start justify-start m-2 p-2">
                        <div class="flex flex-row items-center justify-center">
                            <div class='bg-[url("https://staticx-tuner.zacks.com/images/default_article_images/default39.jpg")] 
                        relative bg-no-repeat bg-cover bg-center w-[40px] h-[40px] rounded-full mx-2 '></div>
                            <h1 class="text-xl font-semibold">Zacks Equity Research<a class="text-gray-600"> &bull; 3 hours ago</a></h1>
                        </div>
                        <h2 class="leading-tight mb-2 mt-2 text-2xl">Is Invesco FTSE RAFI US 1000 ETF  ( PRF )  a Strong ETF Right Now?</h2>
                        <h3 class="text-gray-500 mb-8 text-xl text-justify leading-tight">
                            Smart Beta ETF report for PRF ...                        
                        </h3>
                        <small><a class="text-red-600 text-lg">Zacks Commentary </a > &bull; <a class="text-gray-600">7 min Read</a> </small>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-start w-[45%] h-100">
                    {ElementsCards3}
                </div>
            </div>
            <div class="flex flex-row justify-between items-center m-2">
                <p class="text-black text-4xl text-start font-bold m-2">Charts </p>
                <p class="text-red-600 text-xl text-end m-2">See all > </p>
            </div>
            <div class="h-100 w-100">
               <div class="flex flex-row justify-center items-center">
                <div class="flex flex-col justify-center items-center w-[70%] ">
                    <h1 class="font-semibold text-[#3A5862] ">Overall Sentiment</h1>
                    <ResponsiveContainer width={"145%"} height={500}>
                        <BarChart data={bar} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="overall_sentiment_label"/>
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="overall_sentiment_score" fill="#b81414" name="Sentiment Score" activeBar={<Rectangle fill="#47ebeb" stroke="blue" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            </div>
            <div class="flex flex-row justify-between items-center m-2">
                <p class="text-black text-4xl text-start font-bold m-2">Weekly Highlight </p>
                <p class="text-red-600 text-xl text-end m-2">See all > </p>
            </div>
            <div class="flex flex-row items-start justify-center w-100 h-100">
                {ElementsCards4}
            </div>
            <div class="flex flex-row justify-between items-center m-2">
                <p class="text-black text-4xl text-start font-bold m-2">Top Creator </p>
                <p class="text-red-600 text-xl text-end m-2">See all > </p>
            </div>
            <div class="flex flex-row">
                {ElementsCards5}
            </div>
            <div class="flex flex-row w-full h-100">
                <div class="flex flex-row justify-center items-start flex flex-col w-[50%] h-[250px]">
                    <h1 class="text-3xl font-bold px-7 pb-5">NewsHub</h1>
                    <p class="px-7">Craft narratives that ignite inspiration, Knoledge, and
                        <br></br> entertainment.</p>
                    <div class="flex flex-row m-5">
                        <div class="flex flex-row mx-2">
                            <input placeholder="Your Email" class="flex flex-row justify-center items-center w-[300px] h-[40px] rounded-lg
                              border border-gray-400 p-2"></input>
                        </div>
                        <div class="flex flex-row">
                            <button class="bg-red-600 flex flex-row justify-center items-center text-white rounded-lg px-3 py-2">
                                Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center w-[50%] h-[250px] mt-8">
                    <div class="flex flex-col justify-center items-center w-[25%] h-[250px]">
                        <ul>
                            <li class="font-bold mb-5">Product</li>
                            <li class="mb-2">Overview</li>
                            <li class="mb-2">Features</li>
                            <li class="mb-2">Solution</li>
                            <li class="mb-2">Releases</li>
                        </ul>
                    </div>
                    <div class="flex flex-col justify-center items-center w-[25%] h-[250px]">
                        <ul>
                            <li class="font-bold mb-5">Company</li>
                            <li class="mb-2">About Us</li>
                            <li class="mb-2">Careers</li>
                            <li class="mb-2">Media</li>
                            <li class="mb-2">Contact</li>
                        </ul>
                    </div>
                    <div class="flex flex-col justify-center items-center w-[25%] h-[250px]">
                        <ul>
                            <li class="font-bold mb-5">Blog</li>
                            <li class="mb-2">Resources</li>
                            <li class="mb-2">NewsLetter</li>
                            <li class="mb-2">Events</li>
                            <li class="mb-2">Help Center</li>
                        </ul>
                    </div>
                    <div class="flex flex-col justify-center items-center w-[25%] h-[250px]">
                        <ul>
                            <li class="font-bold mb-5">Social</li>
                            <li class="mb-2">Twitter</li>
                            <li class="mb-2">Linkedin</li>
                            <li class="mb-2">Facebook</li>
                            <li class="mb-2">GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="border-gray-300 my-5"></hr>
            <div class="flex flex-row justify-between pl-4 pr-4 pb-10">
                <p class="flex flex-row">2024 NewsHub!.All rights reserved.</p>
                <ul class="flex flex-row">
                    <li class="mx-4">Terms of Service</li>
                    <li class="mx-4">Policy Service</li>
                    <li class="mx-4">Cookie Police</li>
                    <li class="mx-4">Partners</li>
                </ul>
            </div>
        </div>
    )
}
export default Home;