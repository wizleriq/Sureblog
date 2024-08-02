// import { Post } from "@/types/post";
import { Post } from "@/type/post";
import picnine from "@/interfaces/picnine.jpg"
import pictwo from "@/interfaces/pictwo.jpg"
import picthree from "@/interfaces/picthree.jpg"
import picfour from "@/interfaces/picfour.jpg"
import picfive from "@/interfaces/picfive.jpg"
import picone from "@/interfaces/picnine.jpg"
import logo from '@/interfaces/logo.jpg'
import piceleven from '@/interfaces/piceleven.jpg'
import guy from '@/interfaces/guy.jpg'
import workone from '@/interfaces/workone.jpg'
import worktwo from '@/interfaces/worktwo.jpg'
import drone from '@/interfaces/drone.jpg'
import compt from '@/interfaces/compt.jpg'
import piceight from '@/interfaces/piceight.jpg'
import airplane from '@/interfaces/airplane.jpg'
import picten from '@/interfaces/picten.jpg'
import stylethree from '@/interfaces/stylethree.jpg'
import stylesix from '@/interfaces/stylesix.jpg'
import styleeight from '@/interfaces/styleeight.jpg'
import styleseven from '@/interfaces/styleseven.jpg'
import stylefive from '@/interfaces/stylefive.jpg'
import styletwo from '@/interfaces/styletwo.jpg'
import styleone from '@/interfaces/styleone.jpg'
import foodone from '@/interfaces/foodone.jpg'
import foodtwo from '@/interfaces/foodtwo.jpg'
import foodthree from '@/interfaces/foodthree.jpg'
import foodfour from '@/interfaces/foodfour.jpg'
import picsixteen from '@/interfaces/picsixteen.jpg'
import picnineteen from '@/interfaces/picnineteen.jpg'


const posts: Post[] = [
  {
    id: 1,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
     image: workone.src,
    // image: piceleven.src,
    date: new Date().toISOString(),
    category: 'Technology',
    author: 'Wisdom Darlington Ndata',
    author_img: guy.src
  },
  {
    id: 2,
    title: 'Shaping the future of startup ecosystem in the ',
    description: 'Sample description',
    image: picsixteen.src,
    date: new Date().toISOString(),
    category: 'Food',
    author: 'Alex Bennett',
    author_img: picnine.src
  },
  {
    id: 3,
    title: 'A detailed step by step plan to manage your lifestyle',
    description: 'Sample description',
    image: stylethree.src,
    date: new Date().toISOString(),
    category: 'Life Styles',
    author: 'Lisa Brown',
    author_img: picnine.src
  },
  {
    id: 4,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: worktwo.src,
    date: new Date().toISOString(),
    category: 'Technology',
    author: 'Donald Cruiz',
    author_img: picnine.src
  },
  {
    id: 5,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: foodone.src,
    date: new Date().toISOString(),
    category: 'Food',
    author: 'Smith James',
    author_img: picnine.src
  },
  {
    id: 6,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: stylesix.src,
    date: new Date().toISOString(),
    category: 'Life Styles',
    author: 'Cody Scott',
    author_img: picnine.src
  },
  {
    id: 7,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: piceight.src,
    date: new Date().toISOString(),
    category: 'Technology',
    author: 'Dean Khalifa',
    author_img: picnine.src
  },
  {
    id: 8,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
     image: foodthree.src,
    date: new Date().toISOString(),
    category: 'Food',
    author: 'Jack Ken',
    author_img: picnine.src
  },
  {
    id: 9,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: stylefive.src,
    date: new Date().toISOString(),
    category: 'Life Styles',
    author: 'Shirley Calaway',
    author_img: picnine.src
  },
  {
    id: 10,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: compt.src,
    date: new Date().toISOString(),
    category: 'Technology',
    author: 'Fenandez Leo',
    author_img: picnine.src
  },
  {
    id: 11,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: foodtwo.src,
    date: new Date().toISOString(),
    category: 'Food',
    author: 'Brenda Kim',
    author_img: picnine.src
  },
  {
    id: 12,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: styleone.src,
    date: new Date().toISOString(),
    category: 'Life Styles',
    author: 'Charles Theo',
    author_img: picnine.src
  },
  {
    id: 13,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: airplane.src,
    date: new Date().toISOString(),
    category: 'Technology',
    author: 'Alex Bennett',
    author_img: picnine.src
  },
  {
    id: 14,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: picnineteen.src,
    date: new Date().toISOString(),
    category: 'Food',
    author: 'Tom Reigns',
    author_img: picnine.src
  },
  {
    id: 15,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: styletwo.src,
    date: new Date().toISOString(),
    category: 'Life Styles',
    author: 'Dwayne Mark',
    author_img: picnine.src
  },
  {
    id: 16,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: picten.src,
    date: new Date().toISOString(),
    category: 'Technology',
    author: 'Alex Bennett',
    author_img: picnine.src,
  },
  {
    id: 17,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: foodfour.src,
    date: new Date().toISOString(),
    category: 'Food',
    author: 'Sett Reo',
    author_img: picnine.src
  },
  {
    id: 18,
    title: 'Shaping the future of startup ecosystem in the world',
    description: 'Sample description',
    image: piceleven.src,
    date: new Date().toISOString(),
    category: 'Life Styles',
    author: 'Alex Bennett',
    author_img: picnine.src
  }
];

export default posts;;
