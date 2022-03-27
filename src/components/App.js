import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Course from "./Course/Course";
import Reviews from "./Reviews/Reviews";
import Terms from "./Terms/Terms";
import Error from "./Error/Error";
import ContactUs from "./ContactUs/ContactUs";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Book from "./Book/Book";
import {useLayoutEffect} from "react";

const App = () => {
    const about = {
        title: 'A Breathe Of Fresh Air',
        text: 'Elixiris Inc., a Canadian corporation, was founded in 2021 by Enna Millie. It provides a pure, plant-based process that is successfully improving asthma symptoms, to the extent of resolving them.'
    }
    const course = {
        title: 'Breathe a Sigh of Relief',
        text: 'We know how anxious asthma can make one feel. The Elixiris process is designed to ease anxiousness - in terms of the resolving of asthma symptoms, as well as in terms of the process itself. It is a gentle, comfortable, sustainable and healthy process. All the ingredients are pure and safe.  All aspects of the process are backed by science. '
    }
    const reviews = {
        title: 'Take a Moment to Breathe',
        text: 'We want you to rest assured that the Elixiris process works. We hope you can relate to one or more of the asthma histories in these reviews and be inspired and hopeful about what the Elixiris process can do for you. '
    }

    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    }

    return (
            <BrowserRouter>
                <Wrapper>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/about' element={<About title={about.title} text={about.text}/>}/>
                        <Route path='/course' element={<Course title={course.title} text={course.text}/>}/>
                        <Route path='/reviews' element={<Reviews title={reviews.title} text={reviews.text}/>}/>
                        <Route path='/terms' element={<Terms/>}/>
                        <Route path='/contact' element={<ContactUs/>}/>
                        <Route path='/book' element={<Book/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                </Wrapper>
            </BrowserRouter>
    )
}

export default App