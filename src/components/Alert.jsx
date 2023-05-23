import React from 'react'

const Alert = ({text}) => {
  return (
      <div className="flex justify-center ">
        <div className="w-[95%] p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          <span className="font-medium">¡ATENCIÓN!</span>{text}
        </div>
      </ div>

  );
}

export default Alert