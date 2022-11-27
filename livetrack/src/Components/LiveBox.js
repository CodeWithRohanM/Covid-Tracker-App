import { Component } from "react";
import Image from "/Users/rohanmote/Desktop/Covid_Live_Tracker/livetrack/src/Images/abstract.jpg";
export default class LiveBox extends Component {


    render() {
        return <>



                <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-row flow-root mb-4 justify-between">
                        <h5 className="text-xl font-bold float-left leading-none text-gray-900 dark:text-white w-3/10">State</h5>


                        <h5 className="float-right text-xl font-bold leading-none text-gray-900 dark:text-white overflow-hidden truncate w-3/5 text-right">{this.props.stateName}</h5>


                        
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-red-200 to-red-600">
                                        
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Total Active Cases
                                        </p>

                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        {this.props.active}
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-500">
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Total Confirmed
                                        </p>

                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {this.props.confirmed}
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-700">
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Total Recovered
                                        </p>

                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {this.props.recovered}
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Total Deaths
                                        </p>

                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {this.props.deaths}
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>













        </>
    }
}