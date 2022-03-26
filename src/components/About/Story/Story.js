import s from './Story.module.css'
import img from '../../../images/groupStory.png'
import imgAdaptive from '../../../images/adaptive/story.png'

const Story = () => {
    return (
        <section className={s.story}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <h3 className={s.title}>Our Story</h3>
                        <p className={s.description}>
                            Enna Millie was diagnosed with severe asthma at a leading North American asthma clinic approximately twenty years ago as a young adult. She immediately began her search for a natural and safe remedy, with the hope of being able to dispense with the strong steroid medication she was required to take daily, to breathe. Nothing seemed to work, nor did the medication work perfectly well, with various trips to the hospital Emergency Room and even time spent in the Intensive Care Unit.
                        </p>
                        <p className={s.description}>
                            In 2019, Enna made a discovery and unlocked a new perspective and fresh approach to asthma, which led to the development of the Elixiris process.
                        </p>
                    </div>
                    <div className={s.minusMargin}>
                        <img src={img} alt="image" className={s.img}/>
                        <img src={imgAdaptive} alt="image" className={s.imgAdaptive}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story