import React from 'react'
import "./PreCall.css"
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import {Button, makeStyles} from '@material-ui/core'

function PreCall() {

                            
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
        marginBottom: 100,
        marginLeft: 20,
        fontWeight: "500",
        color: '#004953',
        overflowWrap: "break-word",
        whiteSpace: "pre-wrap",
        width: 200
    },
    check: {
        margin: "auto",
        Color: "#004953",
        marginBottom: 20,
        
        
    },
    btn:{
        borderRadius:50,
        backgroundColor: "#004953",
        height:60,
        width:60,
        marginRight:1,
        marginLeft: 50,
        marginBottom: 20,
        marginTop: 30
    },
    virtual:{
        marginRight: 20, 
        color: '#004953', 
        
         
    },
    
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
               You are ready to go!
                Please review and accept the consent below and
                you will be added to the virtual waiting room 
            </Typography>
           
                <FormGroup row>
                <FormControlLabel
                className={classes.check}
        control={
          <Checkbox
          
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="secondary"
            fontsize="large"
          />
        }
        label={
            <Typography 
            className={classes.virtual}
            variant="body2"
            color="primary"
            
            >
               I consent to take part in a virtual visit
            </Typography>
        }

           />
                </FormGroup>
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

export default PreCall
