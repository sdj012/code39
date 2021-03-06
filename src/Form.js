import React,{Component} from 'react';
import BarcodeCreator from './BarcodeCreator';


class Form extends React.Component {

  constructor(props){

    super(props);
    this.state={serialNumbers: ['Seperate Numbers by a comma or space']}

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.createImageSourceCode=this.createImageSourceCode.bind(this);

  }

  handleChange(event){
    console.log("this.state.serialNumbers Updated")
    let serialNumberArray=[];

    {event.target.value.split(/[,]+/).map((code)=>
      serialNumberArray.push(code)
    )}

    this.setState({serialNumbers: serialNumberArray});
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit this.state.serialNumbers: " + this.state.serialNumbers)
    // let serialNumberArray=[];
    // serialNumberArray.push(event.target.value);
    // this.setState({serialNumbers: serialNumberArray});
    //pass to BarcodeCreator (this.state.serialNumbers)
  }

  createImageSourceCode(barcode){

    let code="https://barcode.tec-it.com/barcode.ashx?data=S"+barcode+"&code=Code39";
    return code;

  }

  render(){

    console.log("render() run");
    console.log("this.state.serialNumbers: " + this.state.serialNumbers);
 
  return(

    <div>

      <div class="topnav">
        <a class="active" href="#home">Code 39 Serial Number Builder</a>
      </div>

      {/* <button onClick=""></button> */}

      <form style={{marginTop:'15%',marginBottom:'5%'}} onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.serialNumbers} onChange={this.handleChange} id="textInput"/>
        {/* <input type="submit" value="Submit"/> */}
      </form>
   
    {/* 
        {this.state.serialNumbers.map(item =>

        <div>
          <BarcodeCreator id={item}/>
        </div>

        )} */}


        {this.state.serialNumbers.map(item =>

          <div>
              <b style={{fontSize: '60px'}}>{item}</b>

              <div style={{textAlign: 'center'}}>
              <img alt='Barcode Generator TEC-IT'src={this.createImageSourceCode(item)} height="150" width="450"/>
              </div>

              <div style={{paddingTop:'8px',textAlign:'center', fontSize:'15px', fontFamily: 'Source Sans Pro, Arial, sans-serif',height:'25%'}}>
              </div>
            
          </div>

        )} 

  </div>  

  )}
}

export default Form;


      {/* <div>
          <div style={{padding:'10px', fontSize:'15px', fontFamily: 'Arial', textAlign:'center', display:'inline-block'}}>
              <a href="https://www.cognex.com" title="Cognex Corporation" style={{display:'block'}}>
                  <img src="https://www.cognex.com/gfx/site/pic-global-header-logo-cognex.png" alt="Barcode Software by Cognex Corporation"/>
              </a>
              <a href="https://www.cognex.com" title="Cognex Corporation">Cognex Corporation</a>
          </div>
          <div style={{display:'inline'}}>
              <img src="https://www.cognex.com/api/Sitecore/Barcode/Get?data=ABC-abc-1234&code=BCL_CODE128&width=300&imageType=JPG&foreColor=%23000000&backColor=%23FFFFFF&rotation=RotateNoneFlipNone" alt="Barcode generated by Cognex Corporation" width="300" />
          </div>
      </div> */}

      {/*Map Through SerialNum*/}

      {/*  */}