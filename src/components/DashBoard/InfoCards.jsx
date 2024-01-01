// import IconUsers from "../utils/svg/IconUsers"



// import React from 'react'
const InfoCards = (props) => {
    const {data} = props;
    // console.log(data)
  return (
    <div className="w-60 p-3 border-2 rounded-lg flex m-2">
        <div className="w-2/5 flex flex-col justify-center items-center text-5xl p-2"><img className="w-full h-full" src={data[0]}/></div>
        <div className=" flex-1 p-2">
            <p className="text-3xl font-normal">{data[2]}</p>
            <p className="text-slate-600">{data[1]}</p>
        </div>
    </div>
  )
}

export default InfoCards