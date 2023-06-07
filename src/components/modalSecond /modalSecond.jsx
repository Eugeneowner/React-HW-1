import s from "./modalSecond.module.scss";
/**
 *? Do you want to edit this file?
 * * You can edit this file, it will not be possible to undo this action.
 * * Are you sure you want to edit it?
 */
const ModalSecond = (props) => {
  return (
    <div className={s.modalContainer} onClick={props.handleClick}>
      <div className={s.modalSecond} onClick={(event)=>{event.stopPropagation()}}>
        <div className={s.upPanelSecond}>
          <p className={s.textBoldSecond}>{props.title}</p>
        {props.closeButton ? 
        (<button className={s.btnExitSecond} onClick={props.handleClick}>
        <svg className={s.iconSecond} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Close_Circle"> <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#180A31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
        </button>) : null}
        
      </div>
      <p className={s.textSmallSecond}>
        {props.text}
      </p>
      <div className={s.btnsContainerSecond}>
        <button className={s.btnSecond} onClick={props.handleClick}>Ok</button>
        <button className={s.btnSecond} onClick={props.handleClick}>Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default ModalSecond