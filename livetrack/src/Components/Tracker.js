import { Component } from "react";
import LiveBox from "./LiveBox";
import TrackerIcon from "/Users/rohanmote/Desktop/Covid_Live_Tracker/livetrack/src/Images/tracker.png";

export default class Tracker extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            date: "",
        }
    }

    monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    componentDidMount = () => {


        let p = fetch("https://data.covid19india.org/data.json");
        p.then(response => response.json())
            .then(data => this.setState({
                data: data.statewise,
                date: "" + new Date().getDate() + " " + this.monthsArray[new Date().getMonth()] + ", " + new Date().getFullYear(),
            }));

    }

    render() {
        return <>


            <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">

                <div id="navBar" className="container mx-auto h-24 flow-root flex-row font-mono font-bold backdrop-filter backdrop-blur-lg sticky top-0 mb-12 text-white border-b-2">



                    <div className="flex flex-row items-center float-left h-full">
                        <img src={TrackerIcon} className="w-24 h-24 animate-pulse"></img>
                        <h1 className="text-3xl">Covid Tracker</h1>
                    </div>

                    <div className="float-right flex items-center flex-row gap-4 h-full">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-3xl">LIVE</h1>
                    </div>
                </div>




                <div className="container mx-auto text-center mb-12">
                    <h1 className="text-white max-w-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto p-6 text-3xl font-extrabold">TODAY:  {this.state.date}</h1>
                </div>




                <div id="outerContainer" className="grid grid-cols-3 gap-x-12 gap-y-8 p-12 container mx-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md">
                    {this.state.data.map((element) => {
                        return <LiveBox stateName={element.state} active={element.active} confirmed={element.confirmed} recovered={element.recovered} deaths={element.deaths} updated={element.lastupdatedtime} />
                    })}

                </div>



            </div>
        </>
    }
}
