import React from "react";
import Group from "../assets/Group"



const MirroringOptions = ({ handleUnderGroupChange }) => {
    

    return (
        <div className="w-[250px] border border-gray-700 h-[580px] bg-[#CAF4FF] ml-[971px]" style={{position: 'absolute', top: '15px'}}>

            <h6 className="bg-[#003285] text-[13.5px] text-white pl-2">List of Groups</h6>

            <p className="text-[14px] border-b border-gray-400 mt-2 text-right pr-2 focus:bg-[#FEB941] outline-none">Create</p>

            {Group.map(option => (
                <div key={option} onClick={() => handleUnderGroupChange(option)} className="text-[13.5px] pl-2 leading-tight focus:bg-[#FEB941] outline-none" tabIndex={0} onKeyDown={(e) => {if(e.key === 'Enter' || e.key === ''){handleUnderGroupChange(option); } }} >
                    <a className="cursor-pointer">
                    {option}
                    </a>
                </div>
            ))}
        </div>
    );
};



export default MirroringOptions;