import s from './Review.module.css'
import person from '../../../images/person.png'
import prev from '../../../images/prev.svg'
import next from '../../../images/next.svg'
import flower from '../../../images/flower.png'

const Review = () => {
    return (
        <section className={s.review}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.person}>
                        <img src={person} alt="person"/>
                    </div>
                    <div className={s.content}>
                        <h4 className={s.title}>I am continuing the Elixiris process and am excited about making further improvements!</h4>
                        <p className={s.text}>“I have had asthma for about 15 years. It was mild at first but became very severe in the last 3 years.  I had to eventually quit my job because it was so severe.  With the severity, I have had to take a lot of medication, to breathe.</p>
                        <p className={s.text}>I tried to improve my symptoms with various methods, but nothing worked. I tried salt caves, but they irritated my lungs and made me feel worse. I also tried breathing exercises, paying for an expensive set of courses, but they did not help either.</p>
                        <p className={s.text}>Some weeks ago I started slowly implementing the Elixiris process. Before I started the process, I could not walk far. My family even had to cook outside because the vapours exacerbated my breathing difficulties. Now, I am able to go for long walks, do more things around my home, and even cook for my family - indoors!  I have been able to reduce my medication as well!</p>
                        <p className={s.text}>I feel my lungs are healing. They feel so much better now.  I have less pain, less mucus, and I feel ease of my symptoms.  I am continuing the Elixiris process and am excited about making further improvements!”</p>
                        <div className={s.innerWrapper}>
                            <div className={s.about}>
                                <div className={s.name}>Olga Larrieu</div>
                                <div className={s.profession}>Homemaker</div>
                                <div className={s.from}>California, USA</div>
                            </div>
                            <div className={s.arrows}>
                                <button className={s.prev}>
                                    <img src={prev} alt="prev" />
                                </button>
                                <button className={s.next}>
                                    <img src={next} alt="next" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review