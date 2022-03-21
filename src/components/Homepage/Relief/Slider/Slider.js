import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import s from './Slider.module.css'
import './Slide.css'



import one from '../../../../images/slider/gentle.jpg'
import two from '../../../../images/slider/science.jpg'
import three from '../../../../images/slider/economic.jpg'
import four from '../../../../images/slider/pure.jpg'
import five from '../../../../images/slider/comfort.jpg'
import six from '../../../../images/slider/calm.jpg'



const Slider = () => {
    return (
        <div>
            <Swiper navigation={true}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    style={{
                        "--swiper-navigation-color": "#fff",
                    }}
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className={s.slide}>
                            <div className={s.slideImg}>
                                <img src={item.img} alt="img" className={s.img}/>
                            </div>
                            <div className={s.slideText}>
                                <h6 className={s.title}>{item.title}</h6>
                                <p className={s.descr}>{item.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider

const data = [
    {
        img: one,
        title: 'Gentle',
        text: 'No Invasive Medical or Non Medical Treatments'
    },
    {
        img: two,
        title: 'Science Based',
        text: 'No Pseudoscience'
    },
    {
        img: three,
        title: 'Economical',
        text: 'No Ongoing Cost, Just The Price of a One-Time Course'
    },
    {
        img: four,
        title: 'Pure',
        text: 'No Supplements, Just Honest to Goodness Ingredients '
    },
    {
        img: five,
        title: 'Comfortable',
        text: 'No Appendages'
    },
    {
        img: six,
        title: 'Calming',
        text: 'No Breathing Exercises'
    },
]
