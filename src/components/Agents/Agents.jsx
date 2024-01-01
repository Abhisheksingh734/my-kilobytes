import AgentTable from "./AgentTable"


const Agents = () => {
  return (
    <div className="border-2 bg-gray-200 h-screen w-full p-[24px] text-xl">
      <div className="md-3 flex flex-row justify-between align-baseline">
      <h1 className="text-[24px]">Agents</h1>
      <button type="button" className="text-white bg-[#172464] hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add new agent</button>
      </div>
      <AgentTable/>
    </div>
  )
}

export default Agents