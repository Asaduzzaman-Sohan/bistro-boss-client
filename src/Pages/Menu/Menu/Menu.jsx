import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import HeadingTitles from '../../../components/HeadingTitles/HeadingTitles';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover
                img={coverImg}
                title={"Our Menu"} >
            </Cover>
            {/* Offered menu it */}
            <HeadingTitles subHeading="Don't Miss" heading="Today's Offer"></HeadingTitles>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
                items={desserts}
                title={"dessert"}
                img={dessertImg}>
            </MenuCategory>
            {/* soup menu items */}
            <MenuCategory
                items={soup}
                title={"soup"}
                img={soupImg}>
            </MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title={"salad"}
                img={saladImg}>
            </MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title={"pizza"}
                img={pizzaImg}>
            </MenuCategory>

        </div>
    );
};

export default Menu;