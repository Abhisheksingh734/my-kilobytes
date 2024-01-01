// import React from 'react'

import Dropdowns from "../../utils/Dropdowns"
import Inputs from "../../utils/Inputs"
import { PaginationNav1Presentation } from "./PaginationNav1Presentation"
import { Table } from "./Table"


const Responses = () => {
  return (
    <div className="border-2 bg-gray-100 h-screen w-full p-[24px] text-xl">
      <h1 className="text-[24px] mb-3">Responses</h1>
      <div className="pr-4 flex flex-row justify-end items-stretch ">
      <button type="button" className="text-white bg-[#0828c8] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Export</button>
      <Dropdowns/>
      <Inputs/>
      </div>
      <div className="overflow-hidden w-[98%]">
    <Table/>
      <PaginationNav1Presentation/>
      </div>
    </div>
  )
}

export default Responses