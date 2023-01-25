import React, { useState } from 'react';
import Container from '../Container';
const MEMBERS = [
  {
    name: 'Miray',
    occupation: 'Team member',
    country: 'Turkey',
    id: 0,
  },
  {
    name: 'Rabia',
    occupation: 'Team member',
    country: 'Turkey',
    id: 1,
  },
  {
    name: 'Batoul',
    occupation: 'Team member',
    country: 'Turkey',
    id: 2,
  },
  {
    name: 'Ahmad',
    occupation: 'Team member',
    country: 'Turkey',
    id: 3,
  },
  {
    name: 'Omer',
    occupation: 'Team member',
    country: 'Turkey',
    id: 4,
  },
  {
    name: 'Osman',
    occupation: 'Team member',
    country: 'USA',
    id: 5,
  },
  {
    name: 'Veli',
    occupation: 'Team member',
    country: 'USA',
    id: 6,
  },
  {
    name: 'Ali',
    occupation: 'Team member',
    country: 'Lebanon',
    id: 7,
  },
  {
    name: 'Can',
    occupation: 'Team member',
    country: 'Lebanon',
    id: 8,
  },
];
// const members variable will be used as a placeholder for firebase. When we fetch there, this variable will be deleted

const COUNTRIES = ['View All', 'USA', 'Turkey', 'Lebanon'];

function Team() {
  const [category, setCategory] = useState('View All'); //This state is for country filter because both md and sm screens have country filter
  const [show, setShow] = useState(true); //This part is for sm screen and is a toggle button for text to open and close. It works, but sm screen styling is not finished yet.

  const renderBtn = COUNTRIES.map((country) => {
    const className =
      country === category
        ? 'rounded-full inline-block w-32 py-1 border-solid border-2 md:border-cyan-700 md:bg-cyan-700 text-white font-bold text-xl sm: border-orange-300 sm: bg-orange-300'
        : 'rounded-full w-32 py-1 mx-1 text-xl font-bold md:text-cyan-700 md:bg-transparent sm: border-gray-400 sm: bg-gray-400 sm: text-gray-50';
    return (
      <div
        key={country}
        className={
          country === 'View All'
            ? 'max-md:hidden p-3 flex justify-center'
            : 'p-3 flex justify-center'
        }
      >
        <button className={className} onClick={() => setCategory(country)}>
          {country}
        </button>
      </div>
    );
  });
  //this part is for making buttons to filter team members based on their countries. They are active both in md and sm screens

  const memberFilter = MEMBERS.filter(
    (member) => category === 'View All' || category === member.country
  );
  //This is the filter part that has been used with the buttons above.

  const memberCard = memberFilter.map((member) => {
    return (
      <div key={member.id} className="flex flex-col justify-start p-10 ">
        <h3 className="md:text-xl md:p-2 font-bold text-cyan-700 sm:text-sm">
          {member.name}
        </h3>
        <p className="md:text-xl md:p-2 text-cyan-700 sm: text-xs">
          {member.occupation}
        </p>
      </div>
    );
  });
  //This part is for rendering each one of the team members based on their names and occupation.
  //Again, when we put info in firebase, the array used here will be change, but it functions both in md and sm screens

  return (
    <section name="team" className="bg-emerald-50 pb-20 w-screen pt-10">
      <Container>
        <h2 className="text-center text-5xl font-bold text-cyan-700 md:pb-10 md:pt-20 sm:pt-5 pb-2">
          Our Team
        </h2>
        <div name="toggle-button" className="text-center pt-5">
          <button
            onClick={() => {
              setShow((s) => !s), setCategory('View All');
            }}
            className={
              show
                ? 'rounded-full inline-block w-32 py-1 border-solid border-2 text-white font-bold text-xl border-orange-300 bg-orange-300 md:hidden'
                : 'rounded-full inline-block w-32 py-1 border-solid border-2 text-white font-bold text-xl border-gray-400 bg-gray-400 md:hidden'
            }
          >
            {!show ? 'Show All' : 'Hide'}
          </button>
          <div className="grid grid-cols-2 md:hidden">
            {show ? memberCard : null}
          </div>
          {/* this button is not active in md screens */}
        </div>
        <div
          name="country-filter"
          className="flex justify-center md:pt-5 md:flex-row sm: flex-col text-center pt-3"
        >
          {renderBtn}
        </div>
        <div
          name="team-members"
          className="md:flex flex-wrap justify-center gap-5 max-md:hidden"
        >
          {memberCard}
        </div>
      </Container>
    </section>
  );
}

export default Team;
