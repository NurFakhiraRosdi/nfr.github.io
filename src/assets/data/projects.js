import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/utracker.jpg';
import UTrackerImg from '../images/s.png';
import GreenCtgImg from '../images/babyster.PNG';
import CoinTrackerImg from '../images/c.png';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Slimplify',
    desc:
      'An application to track your diet and guide your menu diet',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'BabySter',
    desc:
      'An app that provides instant booking so the parents can actually book whenever they need someone to watch out for their children.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'CarHelper',
    desc:
      'Using this app you can seek the help of the nearest car workshop mechanic',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "JomShop",
    desc:
      'A website for the shopping',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Booking Restaurant',
    desc:
      'A reservation restaurant can be make through this website.',
    img: ProjectImg,
  },
];

export default projects;
