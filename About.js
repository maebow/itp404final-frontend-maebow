import React from "react";
import ReactDOM from 'react-dom'
import Modal from "./Modal";
import Panel from "./Panel";
import Tabs from "./Tabs";
import "./styles.css";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
  }

  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={() => {
            this.setState({ isModalOpen: true });
          }}
        >
          Read more about the founder here!
        </button>

        {this.state.isModalOpen && (
          <Modal
            title="Maggie Bowen"
            body={() => {
              return <p>Maggie is a student at USC. She will be graduating next semester. She built this site for her ITP 404 final.</p>;
            }}
            onClose={() => {
              this.setState({ isModalOpen: false });
            }}
          />
        )}

        <br />
        <br />
        <div className="main-container">
        <div>
          <h4>Things they don't tell ya in the cookbooks kiddos</h4>
        </div>
        <hr />
        <Tabs>
          <Panel title="Mom's tips">
            <div>For the best, moist chocolate cakes or brownies extra butter and sour cream helps!</div>
          </Panel>
          <Panel title="Mumu's tips">
            <div>For raspberry pies, dot butter across the filling before putting on the top</div>
          </Panel>
          <Panel title="Ben's tips">
            <div>
              Put mustard on everything.
            </div>
          </Panel>
        </Tabs>
        </div>

        <br />
        <br />
        <div className="main-container">
        <div>
          <h4>Las cosas ellos no dicen en los libros de cocinas.</h4>
        </div>
        <hr />
        <Tabs>
          <Panel title="Los trucos de mi madre">
            <div>Para hacer los mejores pasteles chocolates esponjosos, usa la crema agria y la mantequilla.</div>
          </Panel>
          <Panel title="Consejos de mi abuela">
            <div>Para las tartas de frambuesas, pone la mantequilla encima de el relleno.</div>
          </Panel>
          <Panel title="Consejos de mi hermano">
            <div>
              Pone la mostaza en todos sus comidas. 
            </div>
          </Panel>
        </Tabs>
        </div>
      </div>
    );
  }
}
