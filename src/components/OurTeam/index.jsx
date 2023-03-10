import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../UI/Container';
import Ahmad from '../../assets/pics/teampics/Ahmad.jpg';
import Betül from '../../assets/pics/teampics/Betül.png';
import Miray from '../../assets/pics/teampics/mirayySon.png';
import omer from '../../assets/pics/teampics/omer.jpg';
import rabia from '../../assets/pics/teampics/rabia.jpg';
import dev from '../../assets/pics/teampics/dev.jpg';

const MEMBERS = [
  {
    name: 'Miray',
    occupation: 'Frontend Developer',
    country: 'Turkey',
    id: 0,
    img: Miray,
    link: 'https://github.com/chiturca',
    link2: 'https://www.linkedin.com/in/miraysonmez/',
  },
  {
    name: 'Rabia',
    occupation: 'Frontend Developer',
    country: 'Turkey',
    id: 1,
    img: rabia,
    link: ' https://github.com/ladycodeer',
    link2: 'https://www.linkedin.com/in/rabia-kahya/',
  },
  {
    name: 'Batoul',
    occupation: 'Frontend Developer',
    country: 'Turkey',
    id: 2,
    img: Betül,
    link: 'https://github.com/batoulst',
    link2: 'https://www.linkedin.com/in/batoul-sudki-tenbakjy/',
  },
  {
    name: 'Ahmad',
    occupation: 'Frontend Developer',
    country: 'USA',
    id: 3,
    img: Ahmad,
    link: 'https://github.com/ahmadmhd357',
    link2: 'https://www.linkedin.com/in/ahmad-hariri-3a8157240/',
  },
  {
    name: 'Omer',
    occupation: 'Frontend Developer',
    country: 'Lebanon',
    id: 4,
    img: omer,
    link: 'https://github.com/Omer-Amr ',
    link2: '',
  },
  {
    name: 'Osman',
    occupation: 'Team member',
    country: 'USA',
    id: 5,
    img: dev,
    link: '',
  },
];

function OurTeam() {
  const [t] = useTranslation();
  const COUNTRIES = [
    'View All',
    t('about.ourteam.usa'),
    t('about.ourteam.turkey'),
    t('about.ourteam.lebanon'),
  ];

  const [category, setCategory] = useState('View All');
  const [show, setShow] = useState(true);

  const renderBtn = COUNTRIES.map((country) => {
    const className =
      country === category
        ? 'rounded-full inline-block w-32 py-1 md:bg-cyan-700 text-white font-bold text-xl sm: border-orange-300 sm: bg-orange-300'
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

  const memberFilter = MEMBERS.filter(
    (member) => category === 'View All' || category === member.country
  );

  const memberCard = memberFilter.map((member) => {
    return (
      <div
        key={member.id}
        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg flex "
      >
        <div className="flex ">
          <div className="h-96 w-72">
            {' '}
            <img
              src={member.img}
              alt="member photo"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-lg"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 rounded-lg">
            <h1 className="font-dmserif text-3xl font-bold  text-white">
              {member.name}
            </h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {member.occupation}
            </p>
            <button className=" pr-5 pl-5 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-bold capitalize text-white shadow shadow-black/60 mb-2">
              <a className="font-com text-bold" href={member.link}>
                GitHup
              </a>
            </button>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-bold capitalize text-white shadow shadow-black/60">
              <a className="font-com text-bold" href={member.link2}>
                Linkedin
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section name="team" className="bg-emerald-50 ">
      <Container>
        <h2 className="text-center text-5xl font-bold text-cyan-700 md:pb-10 md:pt-20 sm:pt-5 pb-2">
          {t('about.ourteam.h2')}
        </h2>
        <div name={'toggle-button'} className="text-center pt-5">
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
            {!show
              ? `${t('about.ourteam.showbutton')}`
              : `${t('about.ourteam.hidebutton')}`}
          </button>
          <div className="grid grid-cols-2 md:hidden">
            {show ? memberCard : null}
          </div>
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

export default OurTeam;
