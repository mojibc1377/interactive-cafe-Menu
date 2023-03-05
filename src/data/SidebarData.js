import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si'

export const SidebarData = [
  {
    title: 'خانه',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'نوشیدنی بر پایه اسپرسو',
    path: '/espressoBar',
    icon: <GiIcons.GiCoffeeCup />,
    cName: 'nav-text'
  },
  {
    title: 'نوشیدنی گرم',
    path: '/hotDrinks',
    icon: <MdIcons.MdOutlineEmojiFoodBeverage />,
    cName: 'nav-text'
  },
  {
    title: 'قهوه دمی',
    path: '/brewingBar',
    icon: <GiIcons.GiCoffeePot/>,
    cName: 'nav-text'
  },
  {
    title: 'نوشیدنی سرد',
    path: '/coldDrinks',
    icon: <SiIcons.SiBuymeacoffee />,
    cName: 'nav-text'
  },
  {
    title: 'کیک ها',
    path: '/cakes',
    icon: <GiIcons.GiCupcake/>,
    cName: 'nav-text'
  },
  {
    title: 'ساندویچ ها',
    path: '/sandwich',
    icon: <GiIcons.GiSandwich />,
    cName: 'nav-text'
  },
  {
    title: 'فروشگاه',
    path: '/shop',
    icon: <AiIcons.AiOutlineShop />,
    cName: 'nav-text'
  },

];
