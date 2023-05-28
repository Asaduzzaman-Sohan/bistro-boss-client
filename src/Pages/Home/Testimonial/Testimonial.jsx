import HeadingTitles from "../../../components/HeadingTitles/HeadingTitles";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';


const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <HeadingTitles
                subHeading={"What Our Client Say"}
                heading={"Testimonial"}
            ></HeadingTitles>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <p className="text-3xl">{review.name}</p>

                            <p className="py-8">{review.details}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                        </div>


                    </SwiperSlide>
                    )
                }

            </Swiper>

        </section>
    );
};

export default Testimonial;