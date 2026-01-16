import React, {useState} from 'react';
import EyeOff from "../assets/eye_off.svg";
import EyeOn from "../assets/eye_on.svg";

const Settings: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const apiKey = "11111111111111111111"; 

    return (
        <div className="bg-[#0D1117] min-h-screen p-10 ml-65">
            
            <h1 className="text-white text-[48px] font-bold mb-8">Settings Page</h1>
            
            <div className="w-[1105px] min-h-[600px] bg-[#1D1A26] shadow-2xl rounded-[10px] p-10 overflow-auto">
                
                <div className="flex flex-col gap-4 max-w-lg">
                    
                    <label className="text-xl font-bold tracking-wide text-white">
                        API Key
                    </label>

                    <div className="relative group">
                        <input
                            type={isVisible ? "text" : "password"}
                            value={apiKey}
                            readOnly
                            className="w-full h-12 bg-[#0D1117] border border-gray-700/50 rounded-lg px-4 pr-12 text-gray-300 font-mono text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all select-all"
                        />

                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-2 rounded-md"
                            aria-label={isVisible ? "Hide API Key" : "Show API Key"}
                        >
                            {isVisible ? <img src={EyeOn}/> : <img src={EyeOff}/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;