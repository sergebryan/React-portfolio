import React, {Component} from 'react'
import Header from './Header' 
import Footer from './Footer' 
import Project from './Project' 

import '../css/project.css'
import '../css/header.css'
import '../css/footer.css'

class HomeComponent extends Component{

    render(){
        return(
            <div id = "NameOuterSection">
                <Header></Header>
                <Project></Project>
                <Footer></Footer>
            </div>
        )
    }
} 

export default HomeComponent
