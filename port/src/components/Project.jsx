import React, { Component } from 'react'
import { Progress } from 'antd';
import { Form, Input, Button } from 'antd';

import { LinkOutlined } from '@ant-design/icons';


import img1 from '../data/images/1.jpg'
import img2 from '../data/images/2.jpg'
import img3 from '../data/images/3.jpg'
import img4 from '../data/images/4.jpg'
import img5 from '../data/images/5.jpg'
import img6 from '../data/images/6.jpg'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 24,
    },
};

class Project extends Component {

    render() {
        return (
            <div id="ProjectOuterSection">
                <div id="ProjectNameSection">
                    <div id="ProjectLeftSection">
                        <div id="ProjectLeftNameSection">
                            <p id="UserName">SERGE NOUMBET</p>
                            <br></br>
                            <p id="Post">Full Stack developer</p>
                            <a href="#ContactUsSection"><div id="HireButton">Hire Me</div></a>
                            <a href="#RecentWorksSection"><div id="ExploreButton">Explore More</div></a>
                        </div>
                    </div>
                    <div id="ProjectRighttSection"></div>
                </div>
                <div id="ProjectAboutSection">
                    <div id="HeadingAboutSection">
                        About Us
                    </div>
                    <div id="TextAboutSection">
                        Hello! My name is Serge. I live in Dallas, TX. I'm a full stack developer passionate about technology to affect business development by examining existing issues and providing solutions for improvement. I'm bilingual, I speak, read and write English and French. In my spare time, I like watching sport, enjoying my family and coding. I also like traveling , my goal is to travel to a new country every year. I’m currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.
                        <a href="https://drive.google.com/file/d/1L7E9Q5l0mBR5-eYj6167EqWnuJe5Sl52/view" target="_blank"><div id="TextButtonAboutSection">
                            Download my CV
                        </div></a>
                    </div>
                </div>
                <div id="ProjectSkillsPageSection">
                    <div id="ProjectSkillsInner">
                        <div id="ProjectSkillsInnerHeading">
                            My Skills
                        </div>
                        <div id="ProjectSkillsLeft">
                            <div id="ProjectSkillsName">HTML/CSS</div>
                            <Progress percent={80} strokeColor={'yellow'} status="active" />
                            <div id="ProjectSkillsName">JAVASCRIPT</div>
                            <Progress percent={60} strokeColor={'red'} status="active" />
                            <div id="ProjectSkillsName">NODE.JS</div>
                            <Progress percent={90} strokeColor={'green'} status="active" />
                        </div>
                        <div id="ProjectSkillsRight">
                            <div id="ProjectSkillsName">MYSQL</div>
                            <Progress percent={70} strokeColor={'purple'} status="active" />
                            <div id="ProjectSkillsName">REACT</div>
                            <Progress percent={100} strokeColor={'orange'} showInfo={true} status="active" />
                            <div id="ProjectSkillsName">NOSQL</div>
                            <Progress percent={80} strokeColor={'cyan'} showInfo={true} status="active" />
                        </div>
                    </div>
                </div>
                <div id="RecentWorksSection">
                    <div id="RecentWorksHeading">My Recent Works</div>
                    <div id="RecentWorksInnerSection">
                         <div id="SingleWork">
                            <div id="SingleWorkCover">Middle Point Map
                            <a href="https://xtreme6007.github.io/Middle-Point-TAPS/" target="_blank">&nbsp;<LinkOutlined /></a></div><img src={img1} id="squareImg"></img></div> 
                        <div id="SingleWork">
                            <div id="SingleWorkCover">Express Handlebars
                                <a href="https://dry-headland-94591.herokuapp.com/" target="_blank">&nbsp;<LinkOutlined /></a></div><img src={img2} id="squareImg"></img></div>
                        <div id="SingleWork">
                            <div id="SingleWorkCover">Code quiz
                            <a href="https://sergebryan.github.io/quiz-code/" target="_blank">&nbsp;<LinkOutlined /></a></div><img src={img3} id="squareImg"></img></div>
                        <div id="SingleWork">
                            <div id="SingleWorkCover">Eat-Da-Burger
                            <a href="https://dry-headland-94591.herokuapp.com/" target="_blank">&nbsp;<LinkOutlined /></a></div><img src={img5} id="squareImg"></img></div>
                        <div id="SingleWork">
                            <div id="SingleWorkCover">Progressive Budget
                            <a href="https://cryptic-wildwood-32802.herokuapp.com/" target="_blank">&nbsp;<LinkOutlined /></a></div><img src={img4} id="squareImg"></img></div>
                        <div id="SingleWork">
                            <div id="SingleWorkCover">Fitness Tracker
                            <a href="https://enigmatic-thicket-73518.herokuapp.com/" target="_blank">&nbsp;<LinkOutlined /></a></div><img src={img6} id="squareImg"></img></div>
                    </div>
                </div>
                <div id="ContactUsSection">
                    <div id="ContactUsInnerSection">
                        <div id="ContactUsHeading">Contact Us</div>
                        <Form name="SignIncontactUsForm" {...layout}
                            hideRequiredMark={true}
                            onFinish={this.SubmitForm}>
                            <div className="FormLabel">Full Name</div>
                            <Form.Item
                                className="formitem"
                                name="fullName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    }
                                ]}
                            >

                                <Input placeholder="John Doe" />
                            </Form.Item>
                            <div className="FormLabel">Your Email</div>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        type: "email",
                                        message: "Not a valid email id.",
                                    }
                                ]}
                            >

                                <Input placeholder="abc@xyz.com" />
                            </Form.Item>
                            <div className="FormLabel">Message</div>
                            <Form.Item
                                style={{ color: "white" }}
                                name="message"
                            >

                                <Input placeholder="write your message here" />
                            </Form.Item>

                            <Form.Item>
                                <Button htmlType="submit" id="ModalSubmitButtonStyle">Send</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project
