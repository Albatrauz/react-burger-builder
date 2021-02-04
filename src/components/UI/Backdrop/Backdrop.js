import classes from './BackDrop.module.css';

const BackDrop = (props) => (
  props.show ?
      <>
        <div className={classes.backdrop} onClick={props.clicked}>

        </div>
      </> : null
)

export default BackDrop;
