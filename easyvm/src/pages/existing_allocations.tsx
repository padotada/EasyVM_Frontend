import React from 'react';
import UpArrow from "../assets/up_arrow.svg";
import ThreeDots from "../assets/three_dots.svg";

const ExistingAllocations: React.FC = () => {
    const vmData = [
        {id: 1, name: 'VM-1', createdBy: 'destructivebasket', vmid:9001, running: true, network: 'vmbr0'},
        {id: 2, name: 'VM-2', createdBy: 'nito', vmid:9002, running: false, network: 'vmbr0'}
    ];
    return (
        <div className="min-h-screen bg-[#0D1117] ml-65 flex justify-center items-start pt-20">   
            <div className="w-full max-w-5xl px-6">
                <h1 className="text-white text-[48px] font-bold mb-5 mt-5">Existing Allocations</h1>

                {/* Header Rows */}
                <div className="grid grid-cols-7 gap-4 mb-4 pb-2 border-b-2 border-dashed border-blue-500/30 font-bold text-white items-center">
                    <div className="col-span-1 pl-2">Name</div>
                    <div className="col-span-2 text-center">Created By</div>
                    <div className="col-span-1 text-center">VMID</div>
                    <div className="col-span-1 text-center">Running?</div>
                    <div className="col-span-1 flex items-center justify-between gap-2">
                        <span>Network</span>
                        <img src={UpArrow} alt="Up Arrow"/>
                    </div>
                    <div className="col-span-1"></div>
                </div>

                {/* Data Rows */}
                <div className="flex flex-col gap-2">
                    {vmData.map((vm) => (
                        <div key={vm.id} 
                            className="grid grid-cols-7 gap-4 py-3 px-2 border border-dashed border-blue-500/30 rounded bg-[#1c2128] hover:bg-[#2d333b] transition-colors items-center text-gray-300">
                            
                            <div className="col-span-1 font-medium text-white">{vm.name}</div>
                            
                            <div className="col-span-2 text-center">{vm.createdBy}</div>
                            
                            <div className="col-span-1 text-center font-mono">{vm.vmid}</div>
                            
                            <div className={`col-span-1 text-center ${vm.running ? 'text-green-400' : 'text-red-400'}`}>
                                {vm.running ? 'Yes' : 'No'}
                            </div>

                            <div className="col-span-1 relative flex items-center justify-center text-gray-400">
                                <span>{vm.network}</span>
                                
                            </div>
                            <div className="col-span-1 flex justify-end pr-2">
                                <button className="p-1 hover:bg-gray-700 rounded-full transition-colors cursor-pointer">
                                    <img src={ThreeDots} alt="Three Dots"/>
                                </button>   
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExistingAllocations;