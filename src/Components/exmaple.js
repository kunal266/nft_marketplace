const React = require('react')
import { NFTStorage, File } from 'nft.storage/dist/bundle.esm.min.js';

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY2YTlBNDgxZDM1ZWZhMEJmNTUwRkVDY2I5YjJjMzYyRDREQzIwNzQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDUxNjM2OTU3OSwibmFtZSI6InN1cGFzdGF6eiJ9.YqCV_iWK8HPupN6h1tILk14TLfMqG51GY_gCDDz5R5Y'
const client = new NFTStorage({ token: apiKey })

class Mintnft extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      name: null,
      description:null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async mintstr(e){
    console.log(this.state.file);
    const metadata = await client.store({
   name: "namee",
   description: "desc",
   image: new File([e], 'pinpie.jpg', { type: 'image/jpg' })
  })
 console.log("this is wokring");
 console.log(metadata.url)}

  handleChange(event) {
    console.log(event.target.namee)
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),

    })
    console.log(this.state.file);
    console.log("calling mintstr")
    this.mintstr(event.target.files[0])
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
        {/* <input type="text" placeholder='name' ref={namee}></input><br/>
        <input type="text" placeholder='description' ref={desc}></input><br/> */}
        {/* <button onClick={this.handleChange}>Submit</button> */}
      </div>
    );
  }
}
module.exports = Mintnft
