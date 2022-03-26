import s from './Relief.module.css'
import Slider from "./Slider/Slider";

const Relief = () => {
    return (
        <section className={s.relief}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <h2 className={s.title}>Breathe A Sigh of Relief</h2>
                    <p className={s.descr}>Nature is restful and refreshing. It has a pace that is gentle, while it accomplishes powerful results.</p>
                    <p className={s.descr}>Our process reflects these elements, and purposes the science upon which nature operates.</p>
                </div>
            </div>
            <div className={s.absoluteSliderWrapper}>
                <div className={s.absoluteSlider}>
                    <Slider/>
                </div>
            </div>
        </section>
    )
}

export default Relief