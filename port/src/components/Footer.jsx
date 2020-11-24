import React, { Component } from 'react'
import { TwitterOutlined , FacebookOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';

class Footer extends Component {

    render() {
        return (
            <div id="FooterOuterSection">
                <div id="FooterInnerSection">
                    <div id="FooterLeftSection">
                        <div id="FooterSingleIcon"><TwitterOutlined id="FooterIcon"/></div>
                        <div id="FooterSingleIcon"><FacebookOutlined id="FooterIcon"/></div>
                        <div id="FooterSingleIcon"><GoogleOutlined id="FooterIcon"/></div>
                        <div id="FooterSingleIcon"><GithubOutlined id="FooterIcon"/></div>
                    </div>
                    <div id="FooterMidSection">2020. All Rights Reserved</div>
                    <div id="FooterRightSection"></div>
                </div>
            </div>
        )
    }

}

export default Footer