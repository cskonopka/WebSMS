import './App.css'
import React, { Component }         from    'react'
import axios                        from    'axios';
import { Button, Row, Col, Grid }   from    'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: false,
      callerNumber: null,
      textedcallerResult: null,
      values: {},
      showValues: {}
    }
    this.inputText = this.inputText.bind(this);
    this.textCaller = this.textCaller.bind(this);   
  }

  inputText(name, e){
    let values = this.state.values;
    values[name] = e.target.value;
    this.setState({values: values});
  }


  handleClick(e){
      let inputValues = this.state.values;
      var callsetupDate = new Date();
      const url = 'http://localhost:9001/api/callsetup';
      axios.post(url, {
          callsetupTimestamp: callsetupDate,
          callsetupNumber: inputValues['callerNumber'],
          callsetupDispatcherID: inputValues['dispatcherID']
        })
        .then(function (response) {
          console.log(response);
      
        })
        .catch(function (error) {
          console.log(error);
        });
      this.setState({showValues: inputValues});
  }

  textCaller(){
    const url = 'http://127.0.0.1:9001/api/callsetup';

    axios.post(url, {
        txtcallerDispatcherID: this.state.showValues["dispatcherID"],
        txtcallerNumber: this.state.showValues["callerNumber"]
      })
      .then(function (response) {
        console.log(response);
    
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() { 
    return (
      <div>
          <div className="App-logo">
              <p className="Banner">callButton</p>
          </div>
          <div className="App">
              <br/>
              <Grid>
                  <Row>
                      <Col xs={3} md={4}>
                      <p>Send SMS # : <em>{this.state.showValues["callerNumber"]}</em></p>
                      </Col>
                      <Col xs={3} md={4}>
                      <input style={{width: '90%'}} type="text" placeholder="number" value={this.state.values[ "callerNumber"]} onChange={this.inputText.bind(this, "callerNumber")}/>
                      </Col>
                      <Col xs={3} md={4}>
                      <Button style={{width: '90%'}} onClick={this.handleClick.bind(this)}>Call Setup</Button>
                      </Col>
                  </Row>
              </Grid>
          </div>
      </div>
    )
  }
}

export default App