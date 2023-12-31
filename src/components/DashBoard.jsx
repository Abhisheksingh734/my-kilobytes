// import React from 'react'

import InfoCards from "./InfoCards"
// import { MapContainer, TileLayer ,Marker } from 'react-leaflet'

import userPNG from "../assets/users.png"
import responsesPNG from "../assets/response.png"
const DashBoard = () => {
  return (
    <div className="bg-slate-200 flex-1 p-[24px]">
          <h1 className="text-[24px] mb-3">Dashboard</h1>

          <div className="flex flex-col bg-slate-100 rounded-lg">
            <div className="p-2 flex">
              <InfoCards data={[userPNG, "Total users", 34]} />
              <InfoCards data={[responsesPNG, "Total responses", 3206]} />
            </div>
            <div className=" border-2 p-2 m-2">
              {/* <MapContainer center={[51.505, -0.09]} zoom={6} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                </Marker>
              </MapContainer> */}
            </div>
            {/* <p className="mt-auto">End</p> */}
          </div>
        </div>
  )
}

export default DashBoard