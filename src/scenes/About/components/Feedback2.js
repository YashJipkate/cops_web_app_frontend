import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'  
import FlatButton from 'material-ui/FlatButton'
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader'
import CardMedia from 'material-ui/Card/CardMedia'
import CardTitle from 'material-ui/Card/CardTitle'
import CardText from 'material-ui/Card/CardText'
import Card from 'material-ui/Card'
import FeedbackLogo from './feedback.jpg'
import TextField from 'material-ui/TextField'
import { orange500, blue500, red500, grey400, darkBlack, lightBlack, orange100, orange200, orange400, orange300, grey200 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton'
import ThumbsUp from 'react-icons/lib/fa/thumbs-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-down'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Logo0 from './index.jpeg'
import Logo2 from './index1.jpeg'
import Logo3 from './index2.jpeg'
import Logo4 from './index3.jpeg'
import MobileTearSheet from './MobileTearSheet'
import FontIcon from 'material-ui/FontIcon' 
import FaBook from 'react-icons/lib/fa/facebook-square'
import FaWitter from 'react-icons/lib/fa/twitter'
import FaPlus from 'react-icons/lib/fa/google-plus'
import FaHub from 'react-icons/lib/fa/github'
import FaMedium from 'react-icons/lib/fa/medium'
import FaSlack from 'react-icons/lib/fa/slack'
import IconButton from 'material-ui/IconButton'
import Logo from './moving-through-stars-in-space_-1zccenlb__F0000.png'
import Logo1 from './starry_night_192398.jpg'
import ReactStars from 'react-stars'
import StarLogo from './stars.png'


const DivStyle={
    width: 1250,
    float: "right",
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 5,
    boxShadow: "2px 2px 2px 2px black",
    height: 700,
    backgroundImage: "url(" + Logo + ")"
}

const DivStyle2={
    width: 700,
    align: "left",
    marginRight: 20,
    marginBottom: 5,
    border: "2px solid black"
}

const TextStyles={
    HintStyle:{
        color: orange300
    },
    UnderLineStyle:{
        borderColor: blue500,
        border: "1px solid"
    },
    ErrorStyle:{
        color: red500
    },
    DimensionStyleName:{
        width: 150,
        margin: 20

    },
    DimensionStylePhone:{
        width: 150,
        marginLeft: 20,
        marginRight: 30
    },
    DimensionStyleEmail:{
        width: 250
    }

    
}

const RuleStyle={
    border:"none",
    backgroundColor: "#ADD8e6",
    color: "#ADD8E6",
    height: 1,
    width: "53%",
    marginLeft: 10
}


const MessageStyles={
    marginLeft: 14,
    height: 115,
    width: 640,
    marginTop: 10,
    border: "2px solid grey",
    borderRadius: 7,
    backgroundColor: "white ",
    fontSize: 15,
    boxShadow: "2px 2px 2px blue"
}

const ButtonStyles={

    marginTop: 25,
    marginLeft: 120
}
const ButtonStyles2={
    marginLeft: 50
    
}

const Div={
    color: "black",
    width: 500,
    marginLeft: 30,
    marginTop: 30
}

const Inup={
    display: "inline",
    color: "green",
    marginLeft: 40
}
const Indown={
    display: "inline",
    color: "red",
    marginLeft: 40
}

const border={
    border: "1px solid black"
}
class Feedback extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            likes: 4801,
            dislikes: 3,
            isVisibleName: "visible",
            isVisiblePhone: "visible",
            isVisibleEmail: "visible",
            isDisabled: "",
            likeColor: "green",
            dislikeColor: "red"
        }

        this.handleclicklike=this.handleclicklike.bind(this);
        this.handleclickdislike=this.handleclickdislike.bind(this)
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangePhone=this.handleChangePhone.bind(this);
        this.handleChangeEmail=this.handleChangeEmail.bind(this);
    }
    
    handleclicklike(){
        
        this.setState({
            
            likes: this.state.likes+1,
            dislikes: this.state.dislikes,
            isDisabled: "true",
            likeColor: "grey",
            dislikeColor: "grey"
        })
    };

    handleclickdislike(){
        this.setState({
            likes: this.state.likes,
            dislikes: this.state.dislikes+1,
            isDisabled: "true",
            likeColor: "grey",
            dislikeColor: "grey"
        })
    };
    
    handleChangePhone(){
        console.log("Phone");
        this.setState({
            isVisiblePhone: "hidden"
        })
    };
    
    
    handleChangeName(){
        console.log("Name");
        this.setState({
            isVisibleName: "hidden"
        })
    }

    

    handleChangeEmail(){
        console.log("Email");
        this.setState({
            isVisibleEmail: "hidden"
        })
    }

    render(){
        return(
            <MuiThemeProvider>
            
                
                
                
                <div style={DivStyle}>
                    <Card>
                        <CardHeader style={{backgroundColor: "black",height: 0}}  subtitle=""></CardHeader>
                        <CardMedia>
                            
                        <img src={Logo1} style={{height: 300,marginTop:-28,marginBottom: -100}}/>
                                 
                        </CardMedia>
                         
                        <CardMedia overlay={<CardTitle style={{textAlign: "center"}} title={<div style={{color: "blue",marginBottom: 10}}>Ping Us</div>} subtitle={<div style={{color: "turquoise"}}>Let's stay in touch</div>} />}/>
                        
                        <CardText style={{backgroundColor: "white"}}>
                            
                        <div>    
                            <div style={{float: "right",marginTop: 100}}>
                                
                                <TextField onChange={this.handleChangeName} style={TextStyles.DimensionStyleName} hintText="Your name" hintStyle={TextStyles.HintStyle} underlineStyle={TextStyles.UnderLineStyle} errorText="This field is required" errorStyle={TextStyles.ErrorStyle} errorStyle={{visibility: this.state.isVisibleName}} />
                                <TextField onChange={this.handleChangePhone} style={TextStyles.DimensionStylePhone} hintText="Phone Number" hintStyle={TextStyles.HintStyle} underlineStyle={TextStyles.UnderLineStyle} errorText="This field is required" errorStyle={TextStyles.ErrorStyle} errorStyle={{visibility: this.state.isVisiblePhone}}  />
                                <TextField onChange={this.handleChangeEmail} style={TextStyles.DimensionStyleEmail} hintText="Email-Id" hintStyle={TextStyles.HintStyle} underlineStyle={TextStyles.UnderLineStyle} errorText="This field is required" errorStyle={TextStyles.ErrorStyle} errorStyle={{visibility: this.state.isVisibleEmail}} />
                                
                            </div>
                            <div style={{float: "right"}}>
                            <hr style={RuleStyle} />
                            <div>
                                <textarea style={MessageStyles} type="text" placeholder="Your message..." />
                            </div>
                            
                            <div style={{marginBottom: 20}}>
                                <RaisedButton style={ButtonStyles} label="Submit" primary={true} />
                                <RaisedButton disabled={this.state.isDisabled} onClick={this.handleclicklike} labelColor="green" backgroundColor= "#c1bafc" style={ButtonStyles2} label={this.state.likes} labelPosition="after"  icon={<ThumbsUp color={this.state.likeColor} size="20"/>}/>
                                <RaisedButton disabled={this.state.isDisabled} onClick={this.handleclickdislike}labelColor="red" backgroundColor= "#c1bafc" style={ButtonStyles2} label={this.state.dislikes} labelPosition="after"   icon={<ThumbsDown color={this.state.dislikeColor} size="20"/>}/>
                            </div>
                            <div>
                            <IconButton href="https://www.facebook.com/" style={{marginLeft: 140,marginTop: 10}}><FaBook  size={25} color="#3b5998"/></IconButton>
                            <IconButton href="https://www.twitter.com/" style={{marginLeft: 25}} ><FaWitter size={25} color="#00aced"/></IconButton>
                            <IconButton href="https://www.github.com/" style={{marginLeft: 25}} ><FaHub size={25} color="black"/></IconButton>
                            <IconButton href="https://www.googleplus.com/" style={{marginLeft: 25}} ><FaPlus size={25} color="#d34836"/></IconButton>
                            <IconButton href="https://www.medium.com/" style={{marginLeft: 25}} ><FaMedium size={25} color="black"/></IconButton>
                              
                            </div>
                            </div>
                        </div>
                        </CardText>
                    </Card>
                </div>
                
                
            </MuiThemeProvider>
        )
    };
}

export default Feedback;