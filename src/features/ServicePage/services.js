import { AiOutlineCar } from 'react-icons/ai';
import {
  MdBlurCircular,
  MdDeck,
  MdDelete,
  MdDirectionsWalk,
  MdLocalParking,
  MdOutlineDoorFront,
  MdOutlineHouseSiding,
  MdOutlineYard,
  MdStorefront,
  MdWater,
  MdWindow,
} from 'react-icons/md';
import { GiBrickWall, GiConcreteBag, GiWoodenFence } from 'react-icons/gi';

export default {
  commercial: [
    {
      Icon: MdStorefront,
      title: 'Storefronts',
    },
    {
      Icon: MdLocalParking,
      title: 'Parking Lots',
    },
    {
      Icon: MdWindow,
      title: 'Windows',
    },
    {
      Icon: MdDirectionsWalk,
      title: 'Walkways',
    },
    {
      Icon: AiOutlineCar,
      title: 'Driveways',
    },
    {
      Icon: MdOutlineYard,
      title: 'Patios',
    },
    {
      Icon: GiWoodenFence,
      title: 'Fences',
    },
    {
      Icon: GiBrickWall,
      title: 'Walls',
    },
    {
      Icon: GiConcreteBag,
      title: 'Concrete',
    },
  ],
  residential: [
    {
      Icon: AiOutlineCar,
      title: 'Driveways',
    },
    {
      Icon: MdDirectionsWalk,
      title: 'Sidewalks',
    },
    {
      Icon: MdOutlineYard,
      title: 'Patios',
    },
    {
      Icon: MdWindow,
      title: 'Windows',
    },
    {
      Icon: GiWoodenFence,
      title: 'Fences',
    },
    {
      Icon: MdDelete,
      title: 'Trash Cans',
    },
    {
      Icon: MdOutlineDoorFront,
      title: 'Garage floors & Doors',
    },
    {
      Icon: MdBlurCircular,
      title: 'Gutters',
    },
    {
      Icon: MdOutlineHouseSiding,
      title: 'House Wash',
    },
    {
      Icon: MdDeck,
      title: 'Decks',
    },
    {
      Icon: GiBrickWall,
      title: 'Walls',
    },
    {
      Icon: MdWater,
      title: 'Pools',
    },
    {
      Icon: GiConcreteBag,
      title: 'Concrete',
    },
  ],
};
