import React, {Component} from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          allMemeImgs: [response.data.memes]
        })
      })
  }

  render() {
    const memeImgs = this.state.loading ? "loading..." : this.state.allMemeImgs
    return (
      <div>{memeImgs}</div>
    )
  }
}

export default MemeGenerator;
