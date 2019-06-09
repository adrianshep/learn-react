import React, {Component} from "react";

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                console.log(memes[0]);
                this.setState({ allMemeImgs: memes });
            })
    }

    handleChange(event) {
      const {name, value} = event.target;
      this.setState({ [name]: value });
    }

    render() {
        return (
          <div>
            <form className="meme-form">
              <input
                type="text"
                value={this.state.topText}
                name="topText"
                placeholder="Top Text"
                onChange={this.handleChange}
              />
              <br />
              <input
                type="text"
                value={this.state.bottomText}
                name="bottomText"
                placeholder="Bottom Text"
                onChange={this.handleChange}
              />
              <button>Gen</button>
            </form>
          </div>
        )
    }
}

export default MemeGenerator;
