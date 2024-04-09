import React from "react";

const ProjectTag = ({name,onClick,isSelected}) => {
    const buttonStyles=isSelected?
    "text-blue-300 border-blue-700" : "text-white bg-white[#ADB7BE] border-slate-600  hover:border-white "
  return (
    <button onClick={()=>onClick(name)} className={`${buttonStyles} rounded-full border-2
    px-6 py-3 text-xl cursor-pointer `}>
      {name}
    </button>
  );
};

export default ProjectTag;
