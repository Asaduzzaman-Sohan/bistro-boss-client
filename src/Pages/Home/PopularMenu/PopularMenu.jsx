import HeadingTitles from "../../../components/HeadingTitles/HeadingTitles";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular');
    //             setMenu(popularItem)
    //         })
    // }, [])

    return (
        <section className="mb-12">
            <HeadingTitles
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            >
            </HeadingTitles>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 ju border-b-4">View Full Menu</button>

        </section>
    );
};

export default PopularMenu;