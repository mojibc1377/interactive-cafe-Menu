import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Foods',
    path: '/food',
    icon: <GiIcons.GiForkKnifeSpoon />,
    cName: 'nav-text'
  },
  {
    title: 'Smoothie',
    path: '/smoothie',
    icon: <FaIcons.FaCocktail />,
    cName: 'nav-text'
  },
  {
    title: 'EspressoBar',
    path: '/espressoBar',
    icon: <GiIcons.GiCoffeeCup />,
    cName: 'nav-text'
  },
  {
    title: 'brewingBar',
    path: '/brewingBar',
    icon: <GiIcons.GiCoffeePot/>,
    cName: 'nav-text'
  },
  {
    title: 'hotDrinks',
    path: '/hotDrinks',
    icon: <MdIcons.MdOutlineEmojiFoodBeverage />,
    cName: 'nav-text'
  },
  {
    title: 'Cakes',
    path: '/cakes',
    icon: <GiIcons.GiCupcake/>,
    cName: 'nav-text'
  },
  {
    title: 'coldDrinks',
    path: '/coldDrinks',
    icon: <SiIcons.SiBuymeacoffee />,
    cName: 'nav-text'
  }

];
