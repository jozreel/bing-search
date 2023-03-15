const ProgressBar = ({indeterminate=false, percent=0, color='rgb(5, 114, 206)', thickness=4}) => {
    return (
        <div className="progress-bar" style={{ height: thickness}}>
           {indeterminate ? 
            <div className="progress-bar-inner progress-indeterminate" style={{backgroundColor: color}}></div>:
            <div className="progress-bar-inner" style={{width: `${percent}%`, backgroundColor:color}}></div>
           }
        </div>
    )

}
export default ProgressBar;