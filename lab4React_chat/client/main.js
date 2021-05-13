import React,{Component} from 'react';
import io from '../../node_modules/socket.io/client-dist/socket.io.js'
const socket = io()
​
​
function postMessage (text, nick, room) {
  console.log('posting message')
  fetch('/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text, nick, room, date: new Date() })
  })
    .then(data => {
      console.log('Success:', data)
​
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
​
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      inputValue: '',
      username: '',
      room: '',
      rooms: [],
      filteredMessagesArr: [],
    };
  }
  setUsername = event => {
    this.setState({ username: event.target.value}, ()=> {
      console.log('username', this.state.username)
    })
    } 
  
  inputValueField = event => {
    this.setState({ inputValue: event.target.value})
  };
​
  sendDataOnClick = ()=> {
    // console.log(this.state)
    if (this.state.room === '' ){
      alert('Please Select a Chatroom')
    }
    else {
    this.setState({
      messages:this.state.messages
    })
    socket.emit('chat message', { text :this.state.inputValue, nick: this.state.username, room: this.state.room, date: new Date()})
  }}
​
  selectedRoom = () => {
    let roomPrompt = prompt('Please Enter A New Room Name')
    this.setState({
      room: roomPrompt,
      rooms: [...this.state.rooms, roomPrompt]
        },()=> { console.log(this.state.rooms) }
    )
  }
​
  changeRoomFnct = (event) => {
    this.setState({ room: event.target.value})
  }
​
​
  componentDidMount() {
    fetch('/messages')
        .then(response => response.json())
        .then(data => {
          let roomsTemp = []
          data.forEach(message => {
            roomsTemp.push(message.room)
          })
          this.setState({ messages: data, rooms:roomsTemp});
        })
      socket.on('chat message', msg => {
        this.setState({'messages': this.state.messages.concat(msg)})
​
      })
  }
​
    filterRooms = () => {
      let rooms = this.state.messages.map( message => message.room) 
      // let filteredRooms = rooms.filter(room => room === this.state.room)
      console.log('rooms',rooms)
      return ( 
        Array.from(new Set(rooms)) // filters out the duplicates
​
      )
    }
      
  render() {
    console.log('this one',this.filterRooms())
    return (
      <div className='content'>
        <h1>Chat House</h1>
        <div id='usernameContainer'>
        <input id='usernameField' onChange={this.setUsername.bind(this)} placeholder="Enter Username" />
        </div>
        
        <div className="uppperBtns">
          <button onClick={this.selectedRoom}>Add Room</button>
​
          <select onChange={this.changeRoomFnct.bind(this)} name="room" id="room-select">
            <option value="" defaultValue="">Select A Room</option>
​
            {this.filterRooms().map(room => {
​
              return ( 
              <option value={room} key={room}>{room}</option>
              )} 
            )}
          </select>
        </div>
        
        <div id="chatField">
        <ul>{this.state.messages
              .filter(msg => msg.room === this.state.room ) 
              .map((message, index) => {
              return <li key={index}> {message.nick}: {message.text}</li>
        }) }</ul>
        </div>
        
        <div>
          <input id="inputField" onChange={this.inputValueField.bind(this)} placeholder="Enter Message" />
          <button onClick={this.sendDataOnClick.bind(this)}>Send Message</button>
        </div>
      </div>
    );
  }
}
​
export default App;