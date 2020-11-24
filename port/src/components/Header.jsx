import React, {Component} from 'react'
import {PicCenterOutlined} from '@ant-design/icons';

class Header extends Component{

    constructor() {
        super()

        this.sideNavigationStyle = this.sideNavigationStyle.bind(this)

    }

    sideNavigationStyle(){
        console.log("side clicked")
        var sideBar = document.getElementById("SideNavigationStyle")
        var style = window.getComputedStyle(sideBar);
        var marginLeft = style.getPropertyValue('left');
        console.log(marginLeft)
        if (marginLeft < "0px") {
            sideBar.classList.add("show")
        }
        else{
            sideBar.classList.remove("show")
        }
    }

    render(){
        return(
            <div id = "HeaderOuterSection">
                <div id="LeftOption">PORTFOLIO</div>
                <div id="RightOption"><a href = "#ProjectSkillsPageSection" style={{color:"black"}}>SKILLS</a></div>
                <div id="RightOption"><a href = "#ProjectAboutSection" style={{color:"black"}}>ABOUT</a></div>
                <div id="RightOption" ><a href = "#RecentWorksSection" style={{color:"black"}}>PROJECTS</a></div>
                <div id="RightOption"><a href = "#ContactUsSection" style={{color:"black"}}>CONTACT</a></div>
                <div id = "BurgerOption"><PicCenterOutlined onClick={this.sideNavigationStyle}/></div>
                <div id="SideNavigationStyle">
                    <div id="SideNavigationOption">Contact</div>
                    <div id="SideNavigationOption">Projects</div>
                    <div id="SideNavigationOption">About</div>
                    <div id="SideNavigationOption">Home</div>
                </div>
            </div>
        )
    }
} 

export default Header