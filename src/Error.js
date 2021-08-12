import React from 'react'
import "./PreCall.css"
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import{ Typography,Paper} from "@material-ui/core/";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import {Button, makeStyles} from '@material-ui/core'

function Error() {

                            
const useStyles = makeStyles({
    precall:{
    backgroundColor: "#E4E3E3",
    borderRadius: 10,
    marginTop:50
    },
    typo:{
        margintop: 60
    },
    consent:{
        marginBottom: 50,
        marginLeft: 20,
        fontWeight: "500",
        overflowWrap: "break-word",
        whiteSpace: "pre-wrap",
        width: 200,
        color: "#E44D2E"
    },
    check: {
        marginRight: 20,
    },
    btn:{
        borderRadius:100,
        backgroundColor: "#004953",
        height:60,
        width:60,
        marginRight: 5,
        marginLeft: 20,
        marginTop:50,
        
       
       
       
        
    },
    btn2:{
        width:200,
        height:50,
        borderRadius:50,
        backgroundColor: "#004953",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: 'auto',
        boxShadow: '0 4 15 rgba(0, 0, 0, 0.23)',
    },
    virtual:{
        marginRight: 20,   
    }
})

const classes = useStyles()
    
    
const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  
  const [state, setState] = React.useState({
    checkedB: true,
  });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    
    return (
      
        <div className={classes.precall}>
          
            <img className="img__precall" src="assets/Vector.png" alt="" />
            
            <Typography 
            className={classes.consent}
            variant="body2"
            color="primary"
            
            >
               Permission denied.
               Please allow access to your camera and 
               click the retry button
            </Typography>
            

            <Button 
                className={classes.btn2}
                variant="contained" 
                color="secondary"
                >
                 Try again
                </Button>

           
                <div>
                <Button 
                className={classes.btn}
                variant="contained" 
                color="secondary"
                >
                 <VideocamOutlinedIcon/>
                </Button>
                <Button 
                className={classes.btn}
                variant="contained" 
                color="secondary">
                <MicOutlinedIcon/>
                </Button>

                </div>
            
           
        </div>
        
    )
}

export default Error