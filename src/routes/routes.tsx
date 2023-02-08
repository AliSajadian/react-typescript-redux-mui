import async from "../components/Async";
import { IRoute } from "../interfaces/RouteType";


const Home = async(() => import("../pages/Home"));
const About = async(() => import("../pages/About"));

export const routes: Array<IRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    }
]