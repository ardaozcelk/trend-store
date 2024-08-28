import "./Offcanvas.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};
const OffcanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Offcanvas = (props) => {
  const portalElemant = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElemant
      )}
{ReactDOM.createPortal(<OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
portalElemant)}
      
    </Fragment>
  );
};

export default Offcanvas;
