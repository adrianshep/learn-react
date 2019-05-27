import React, {Component} from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {

    }

    render() {
      return (
        <main>
          <form>
            <input placeholder="First Name" /><br />
            <input placeholder="Last Name" /><br />
            <input placeholder="Age" /><br />

            {/* Create radio buttons for gender here */}
            <br />

            {/* Create select box for location here */}
            <br />

            {/* Create check boxes for dietary restrictions here */}
            <br />

            <button>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {/* First and last name here */}</p>
          <p>Your age: {/* Age here */}</p>
          <p>Your gender: {/* Gender here */}</p>
          <p>Your destination: {/* Destination here */}</p>
          <p>
            Your dietary restrictions:
            {/* Dietary restrictions here, comma separated */}
          </p>
        </main>
      )
    }
  }

export default App;
