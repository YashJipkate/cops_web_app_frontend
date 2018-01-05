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
import { orange500, blue500, red500, grey400, darkBlack, lightBlack, orange100, orange200, orange400, orange300, grey200, blue300, green300 } from 'material-ui/styles/colors';
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
import Logo1 from './index.jpeg'
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
import ReactStars from 'react-stars'
import StarLogo from './stars.png'
import SnackBar from 'material-ui/Snackbar'
import { Snackbar } from 'material-ui';

const DivStyle1={
    backgroundImage: "url(" + Logo + ")",
    height: 750,
    width: 1310,
    marginBottom: 0,
    border: "1px solid red",
    marginRight: 0
}

const DivStyle2={
    
    marginTop: 140,
    textAlign: "center",
    height: 50,
    color: blue500,
    

}

const DivStyle3={
    
    textAlign: "center",
    color: green300,
    marginTop: -21,
    lineHeight: 3
}



const DivStyle4={
    width: 400,
    height: 375,
  //  border: "2px solid green",
    float: "right",
    marginRight: 15
}

const RuleStyle={
    border:"none",
    backgroundColor: "#ADD8e6",
    color: "#ADD8E6",
    height: 1,
    width: "95%",
    marginLeft: 20
}


const TextStyles={
    
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
    },
    HintStyle:{
        
        color: "black"
    }

    
}

const MessageStyles={
    marginLeft: -4,
    height: 115,
    width: 640,
    marginTop: 10,
    border: "2px solid grey",
    borderRadius: 7,
    backgroundColor: "white ",
    fontSize: 15,
    boxShadow: "2px 2px 2px blue",
    position: "relative"
}

const ButtonStyles={

    marginTop: 25,
    marginLeft: 100
}

const ButtonStyles2={
    marginLeft: 50,
    
    
}


const DivStyle5={
   // border: "2px solid red",
    height: 440,
    width: 550,
    marginLeft: 10

}


const SnackbarStyle={
    marginRight: 740,
    width: 400,
    height: 440
}

const DivStyle6={
    height: 440,
    color: "black"
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
        var style=document.getElementById("#id");
        
        return(
          <MuiThemeProvider>
              <div style={DivStyle1} id="hello">
                
                  <div style={DivStyle2}>
                      <h1>Ping Us</h1>
                  </div>
                  <div style={DivStyle3}>
                      <h4>Let's stay in touch</h4>
                  </div>
                  <div style={DivStyle4}>
                  <Card>
                      
                      <CardText>
                          <div>
                          
                          <div><TextField hintStyle={TextStyles.HintStyle} onChange={this.handleChangeName} style={TextStyles.DimensionStyleName} hintText="Your name"   errorText="This field is required"   /></div>
                          <div style={{marginTop: 10}}>    <TextField hintStyle={TextStyles.HintStyle} onChange={this.handleChangePhone} style={TextStyles.DimensionStylePhone} hintText="Phone Number" hintStyle={TextStyles.HintStyle}  errorText="This field is required" errorStyle={TextStyles.ErrorStyle} errorStyle={{visibility: this.state.isVisiblePhone}}  /></div>
                            <div style={{marginLeft: 20,marginTop: 20}}>    <TextField hintStyle={TextStyles.HintStyle} onChange={this.handleChangeEmail} style={TextStyles.DimensionStyleEmail} hintText="Email-Id" hintStyle={TextStyles.HintStyle}  errorText="This field is required" errorStyle={TextStyles.ErrorStyle} errorStyle={{visibility: this.state.isVisibleEmail}} /></div>
                            <div style={{marginLeft: 20,marginTop: 20}}>    <TextField hintStyle={TextStyles.HintStyle} onChange={this.handleChangeEmail} style={TextStyles.DimensionStyleEmail} hintText="Your Message" hintStyle={TextStyles.HintStyle}  errorText="This field is required" errorStyle={TextStyles.ErrorStyle} errorStyle={{visibility: this.state.isVisibleEmail}} /></div>
                                                    
                          <RaisedButton style={ButtonStyles} label="Submit" primary={true} />
                          
                          
                         


                          </div>
                      </CardText>
                  </Card>
                  </div>
                  <div style={DivStyle5}>

                   <Card>
                       <CardText>
                           
                           <div style={DivStyle6}>
                           
                           
                           <div >
                           <p style={{fontSize: 20}}><strong>Visitor Quotes</strong></p>
                           <p>See what people have to say about us</p>
                            <div style={{height: 105,width: 500, marginTop: -55}}>
                                <div  style={{height: 100,width: 100,marginTop: 60}}>
                                <Avatar src={Logo1} size={75}/>
                                </div>
                                <div style={{height: 100,width: 385, float: "right",marginTop: -103}}>
                                <p><strong>Member 1</strong><ReactStars edit={false} value={3.5} count={5} size={20} color2="#ffd700"/></p>
                                <p style={{marginTop: -19}}>The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.</p>
                                </div>
                            </div>
                            <div style={{height: 105,width: 500,marginTop: 20}}>
                                <div  style={{height: 100,width: 100}}>
                                <Avatar src={Logo1} size={75}/>
                                </div>
                                <div style={{height: 100,width: 385, float: "right",marginTop: -103}}>
                                <p><strong>Member 1</strong><ReactStars edit={false} value={3.5} count={5} size={20} color2="#ffd700"/></p>
                                <p style={{marginTop: -19}}>The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.</p>
                                
                                </div>
                            </div>
                            <div style={{height: 105,width: 500,marginTop: 10}}>
                                <div  style={{height: 100,width: 100}}>
                                <Avatar src={Logo1} size={75}/>
                                </div>
                                <div style={{height: 100,width: 385, float: "right",marginTop: -103}}>
                                <p><strong>Member 1</strong><ReactStars edit={false} value={3.5} count={5} size={20} color2="#ffd700"/></p>
                                <p style={{marginTop: -19}}>The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.The website is nice.</p>
                                </div>
                            </div>
                            </div>
                           </div>
                       </CardText>
                   </Card>
                  
                  </div>
              </div>
          </MuiThemeProvider>
        )
        style.addEventListener("scroll",function(){console.log("hello")});
    }
  
}

export default Feedback;    

