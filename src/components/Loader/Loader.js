// import { Component } from "react";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "../Loader/Loader.module.css";

// class LoaderSpin extends Component {
//     state = {};
//     render() {
//         return (
//         <div className={s.loader}>
//                 <Loader
//                     type="BallTriangle"
//                     color="#6c3fb5"
//                     height={80} width={80} />
//         </div>
//         );
//     }
//     }

// export default LoaderSpin;

const Loader = () => {
    return (
        <span className={s.loader}></span>
    )
};
export default Loader;