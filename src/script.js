import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class DrumPadElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: this.props.audioLinks[0]
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.play = this.play.bind(this);
  }
  buttonClick() {
    this.props.displayElementName(this.props.id);
    this.play();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentDidUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.text.charCodeAt(0))
      this.buttonClick();
  }
  play() {
    const instrument = document.getElementById(this.props.text);
    console.log(instrument + '\n' + instrument.src);
    instrument.play();
  }
  render() {
    return (
      <button className="drum-pad" id={this.props.id} onClick={this.buttonClick.bind(this)}>{this.props.text}
        <audio className="clip" id={this.props.text} src={this.state.audio}/>
      </button>
    );
  }
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      power: true
    }
    this.displayElementName = this.displayElementName.bind(this);
  }
  displayElementName(name) {
    if (this.state.power) {
      this.setState({
        display: name
      })
    }
  }
  render() {
    return (
      <div id="drum-machine" class="row">
          <div id="button-grid" class="col-xs-6">
            <div class="row">
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Heater-1" className="drum-pad" text="Q" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3']}/>
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Heater-2" className="drum-pad" text="W" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3']}/>
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Heater-3" className="drum-pad" text="E" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3']}/>
            </div>
            <div class="row">
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Heater-4" className="drum-pad" text="A" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3']}/>
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Clap" className="drum-pad" text="S" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3']}/>
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Open-HH" className="drum-pad" text="D" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3']}/>
            </div>
            <div class="row">
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Kick-n'-Hat" className="drum-pad" text="Z" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3']}/>
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Kick" className="drum-pad" text="X" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3']}/>
              <DrumPadElement power={this.state.power} displayElementName={this.displayElementName} id="Closed-HH" className="drum-pad" text="C" audioLinks={['https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']}/>
            </div>
          </div>
          <div id="right_part" class="d-flex flex-column min-vh-100 justify-content-center align-items-center ">
            {false &&
            <div class="row">
              <label id="lblPower">Power</label>
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"/>
              </label>
            </div> }
            <div id="display" class="text-center"><h1>{this.state.display}</h1></div>
            {false &&
<div class="range">
  <label class="form-label row" for="customRange1">Volume</label> 
  <input type="range" class="form-range" id="customRange1" /> 
</div> }
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));