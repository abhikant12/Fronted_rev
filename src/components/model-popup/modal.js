

export default function Modal({ id, header, body, footer, onClose }){
    return (
      <div id = "Modal" className="modal">
        <div className="modal-content">

          <div className="header">
            <h2 className="header_label"> {header} </h2>
            <span onClick = {onClose} className="close-modal-icon"> &times; </span>
          </div>

          <div className="body"> {body} </div>
          <div className="footer">{footer}</div>
          
        </div>
      </div>
    );
  }
