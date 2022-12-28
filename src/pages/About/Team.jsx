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
        name: "Osman",
        occupation: "Jr Front-end Web Developer",
        country: "Lebanon",
        id:8,
    },
]
// const members variable will be used as a placeholder for firebase. When we fetch there, this variable will be deleted

const COUNTRIES=["View All", "USA", "Turkey", "Lebanon"]

function Team() {
    const [category, setCategory]=useState("View All");


    const renderBtn = COUNTRIES.map(country=>{
        const className = country === category ? "rounded-full inline-block px-3 py-2 border-solid border-2 border-cyan-700 bg-cyan-700 text-white font-bold text-xl" : "rounded-full px-3 py-2 mx-1 text-cyan-700 text-xl font-bold";
        return (
            <div key={country} className="p-3">
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
                <h3 className="text-xl p-2 font-bold text-cyan-700">{member.name}</h3>
                <p className="text-xl p-2 text-cyan-700">{member.occupation}</p>
            </div>
        )
      })

    return (
        <section name="team" className="bg-emerald-50 min-h-screen">
            <h2 className="text-center text-5xl pt-20 pb-20 font-bold text-cyan-700">Our Team</h2>
            <div name="country-filter" className="flex justify-center pt-10">
                {renderBtn}
            </div>
            <div name="team" className="flex flex-wrap justify-center p-20">
                {memberCard}
            </div>
        </section>
    )
}

export default Team;