import React, { useState } from "react";

const MEMBERS=[
    {
        name: "Miray",
        occupation: "Jr Front-end Web Developer",
        country: "Turkey",
        id:0,
    },
    {
        name: "Rabia",
        occupation: "Jr Front-end Web Developer",
        country: "Turkey",
        id:1,
    },
    {
        name: "Batoul",
        occupation: "Jr Front-end Web Developer",
        country: "Turkey",
        id:2,
    },
    {
        name: "Ahmad",
        occupation: "Jr Front-end Web Developer",
        country: "Turkey",
        id:3,
    },
    {
        name: "Omer",
        occupation: "Jr Front-end Web Developer",
        country: "Turkey",
        id:4,
    },
    {
        name: "Osman",
        occupation: "Jr Front-end Web Developer",
        country: "USA",
        id:5,
    },
    {
        name: "Veli",
        occupation: "Jr Front-end Web Developer",
        country: "USA",
        id:6,
    },
    {
        name: "Ali",
        occupation: "Jr Front-end Web Developer",
        country: "Lebanon",
        id:7,
    },
    {
        name: "Can",
        occupation: "Jr Front-end Web Developer",
        country: "Lebanon",
        id:8,
    },
]
// const members variable will be used as a placeholder for firebase. When we fetch there, this variable will be deleted

const COUNTRIES=["View All", "USA", "Turkey", "Lebanon"]

function Team() {
    const [category, setCategory]=useState("View All");
    const [show, setShow] = useState(true);

    const renderBtn = COUNTRIES.map(country=>{
        const className = country === category ? "rounded-full inline-block w-32 py-1 border-solid border-2 lg:border-cyan-700 lg:bg-cyan-700 text-white font-bold text-xl sm: border-orange-300 sm: bg-orange-300" : "rounded-full w-32 py-1 mx-1 text-xl font-bold lg:text-cyan-700 lg:bg-transparent sm: border-gray-400 sm: bg-gray-400 sm: text-gray-50";
        return (
            <div key={country} className="p-3 flex justify-center">
          <button 
            className={className}
            onClick={()=> setCategory(country)}
          >{country}</button>
          </div>
        )}
      )

      const memberFilter = MEMBERS.filter((member)=> category==="View All" || category===member.country)

      const memberCard = memberFilter.map((member)=>{
        return(
            <div key={member.id} className="flex flex-col justify-start p-10">
                <h3 className="lg:text-xl lg:p-2 font-bold text-cyan-700 sm:text-sm">{member.name}</h3>
                <p className="lg:text-xl lg:p-2 text-cyan-700 sm: text-xs">{member.occupation}</p>
            </div>
        )
      })

      

    return (
        <section name="team" className="bg-emerald-50 min-h-screen min-w-full">
            <h2 className="text-center text-5xl font-bold text-cyan-700 lg:pb-10 lg:pt-20 sm: pt-5 pb-2">Our Team</h2>
            <div className="text-center pt-5">
                <button onClick={() => setShow((s) => !s)} className="rounded-full inline-block w-32 py-1 border-solid border-2 text-white font-bold text-xl border-orange-300 bg-orange-300 lg:hidden">
                    {!show ? "Show All" : "Hide"}
                </button>
                <div className="grid grid-cols-2 px-10 lg:hidden">
                {show ? memberCard : null}
                </div>
            </div>
            <div name="country-filter" className="flex justify-center lg:pt-5 lg:flex-row sm: flex-col text-center pt-3">
                {renderBtn}
            </div>
            <div name="team" className="lg:flex flex-wrap justify-center lg:p-10 sm: hidden">
                {memberCard}
            </div>
        </section>
    )
}

export default Team;