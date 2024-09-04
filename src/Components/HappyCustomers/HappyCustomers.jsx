import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './HappyCustomers.css';

const HappyCustomers = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>   
        <div className="contain">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                
                    <div className=" section section-work-data ">
                        <div className='heavy'>
                            <h2>Trusted Vendors</h2>
                            <p className="counter-numbers">
                                {counterOn && <CountUp start={0} end={50} duration={5} delay={0} />}+
                            </p>
                        </div >
                        <div className='heavy'>
                            <h2>Happy Customers</h2>
                            <p className="counter-numbers">
                                {counterOn && <CountUp start={0} end={600} duration={5} delay={0} />}+
                            </p>
                        </div>
                        <div className='heavy'>
                            <h2>Travelers Hosted</h2>
                            <p className="counter-numbers">
                                {counterOn && <CountUp start={0} end={200} duration={5} delay={0} />}+
                            </p>
                        </div>
                        <div className='heavy'>
                            <h2>Rating</h2>
                            <p className="counter-numbers">4.5/5</p>
                        </div>
                    </div>
                
            </ScrollTrigger>
        </div>
        </>
    );
};

export default HappyCustomers;
