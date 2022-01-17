import React,{Component} from 'react';

class BarcodeCreator extends React.Component {

  constructor(props){

    super(props); 
    this.state={serialNumber: this.props.id}
    this.createImageSourceCode=this.createImageSourceCode.bind(this);

  }

  createImageSourceCode(){

    let code="https://barcode.tec-it.com/barcode.ashx?data=S"+this.state.serialNumber+"&code=Code39";
    return code;

  }

  // <img alt='Barcode Generator TEC-IT'src='https://barcode.tec-it.com/barcode.ashx?data=0000&code=Code128'/>


  render(){

    console.log("BarcodeCreator) this.state.serialNumber: " + this.state.serialNumber );

    return(

      <div>

        <div style={{textAlign: 'center'}}>

          <img alt='Barcode Generator TEC-IT'src={this.createImageSourceCode()} width="400"/>

        </div>

        <div style={{paddingTop:'8px',textAlign:'center', fontSize:'15px', fontFamily: 'Source Sans Pro, Arial, sans-serif',height:'25%'}}>
          <a href='https://www.tec-it.com' title='Barcode Software by TEC-IT' target='_blank'/>TEC-IT Barcode Generator<br/>
        </div>

      </div>
    )
  } 

}

export default BarcodeCreator;