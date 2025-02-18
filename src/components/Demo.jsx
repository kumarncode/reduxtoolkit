import React from 'react';
import { useSelector } from 'react-redux';

const Demo = () => {
const {lang} = useSelector((state)=>state.lang)
    return (
        <div className='container mt-3'>
           <div className='row'>
            <div className='col-md-12'>
            {lang ==="en"?
            <>
            <h1>Demo</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus optio nesciunt vel, obcaecati voluptate qui praesentium magni eligendi libero quibusdam sapiente explicabo asperiores accusantium. Velit quisquam labore quia officiis?</p>
            </>
            :
            <>
            <h1>डेमो</h1>
            <p>लोरेम इप्सम डोलर, सिट अमेट कंसेक्टेचर एडिपिसिसिंग एलीट। नुल्ला डेलेक्टस ऑप्टियो नेसिअंट वेल, ओबकेकाटी वोलुप्टेट क्वि प्रैसेन्टियम मैग्नी एलीजेंडी लिबरो क्विबसडैम सैपिएंटे एक्सप्लिकाबो एस्पेरियोरेस एक्यूसेंटियम। वेलिट क्विस्क्वाम लेबर क्विया ऑफिसिस?</p>
            </>}
            
            </div>
           </div>
        </div>
    );
};

export default Demo;