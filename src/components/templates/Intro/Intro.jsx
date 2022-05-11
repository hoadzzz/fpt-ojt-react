import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import { motion } from 'framer-motion/dist/framer-motion';
import React, { useContext } from 'react';
import boy from '../../../assets/images/intro/boy.png';
import Crown from '../../../assets/images/intro/crown.png';
import glassesimoji from '../../../assets/images/intro/glassesimoji.png';
import thumbup from '../../../assets/images/intro/thumbup.png';
import Vector1 from '../../../assets/images/intro/Vector1.png';
import Vector2 from '../../../assets/images/intro/Vector2.png';
import { themeContext } from '../../../context/ThemeContext';
import Button from '../../atoms/Button/Button';
import FloatingDiv from '../../atoms/FloatingDiv/FloatingDiv';
import Section, { SectionBody } from '../../organisms/Section/Section';

const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <Section>
            <SectionBody>
                <div className="intro">
                    <div className="i-left">
                        <div className="i-name">
                            <span style={{ color: darkMode ? "white" : "" }}>Welcome to</span>
                            <span>Yolo</span>
                            <span style={{ color: darkMode ? "white" : "" }}>Bắt đầu từ thương hiệu thời trang Hi5 ra đời trong năm 2009, trải qua chặng đường phát triển đầy khó khăn, Hi5 được đổi tên thành Yody vào năm 2014 với ước mơ gây dựng một thương hiệu thời trang hàng đầu thế giới.
                            </span>
                        </div>
                        <div className='i-button'>
                            <Button
                                size="sm">
                                Tìm hiểu thêm
                            </Button>
                        </div>

                        <div className="i-icons">
                            <Insta color='var(--blue)' size='4.5rem' />
                            <Facebook color='var(--blue)' size='4.5rem' />
                            <Twitter color='var(--blue)' size='4.5rem' />
                        </div>
                    </div>
                    <div className="i-right">
                        <img src={Vector1} alt="" />
                        <img src={Vector2} alt="" />
                        <img src={boy} alt="" />

                        <motion.img
                            initial={{ left: "-30%" }}
                            whileInView={{ left: "-20%" }}
                            transition={transition}
                            src={glassesimoji} alt="" />

                        <motion.div initial={{ top: "-4%", left: "60%" }}
                            whileInView={{ left: "55%" }}
                            transition={transition}
                            className="floating-div">
                            <FloatingDiv image={Crown} txt1='Top 1' txt2='Fashion King' />
                        </motion.div>

                        {/* animation */}
                        <motion.div initial={{ left: "9rem", top: "27.3rem" }}
                            whileInView={{ left: "0rem" }}
                            transition={transition}
                            className="floating-div">
                            <FloatingDiv image={thumbup} txt1="Best" txt2="Feedback from Customer" />
                        </motion.div>

                        {/* blur divs */}
                        <div className='blur' style={{ background: "rbg(238 210 255)" }}></div>
                        <div className="blur" style={{
                            background: '#C1F5FF',
                            top: '17rem',
                            width: '21rem',
                            height: '11rem',
                            left: '-9rem'
                        }}></div>
                    </div>
                </div>
            </SectionBody>
        </Section>

    )
}

export default Intro