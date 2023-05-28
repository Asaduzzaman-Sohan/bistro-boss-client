import HeadingTitles from "../../../components/HeadingTitles/HeadingTitles";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed  text-white pt-8 my-20">
            <HeadingTitles
                subHeading={"Check it out"}
                heading={"Featured Item"}>
            </HeadingTitles>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where I can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi, esse dolorem cupiditate aliquid ea laudantium error doloribus, eaque non, possimus facilis culpa temporibus officiis dignissimos? Dolorem alias provident corporis quia saepe repellat tempora quidem. Aliquam nam repudiandae veritatis sequi placeat quaerat quod aut repellendus! Sit unde nemo quasi corrupti!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;