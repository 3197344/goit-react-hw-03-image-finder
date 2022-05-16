import { Component } from "react";
// import Searchbar from "./Searchbar/Searchbar";
// import ImageGallery from './ImageGallery/ImageGallery'
// import Loader from './Loader/Loader'
import Button from "./Button/Button";
// import Modal from "./Modal/Modal";

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Searchbar />
        <ImageGallery />
        <Loader /> */}
        <Button />
        {/* <Modal /> */}
      </div>
    )
  }
}


// import Button from "./Button/Button";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template. Hello
//       <Button/>
//     </div>
//   );
// };
