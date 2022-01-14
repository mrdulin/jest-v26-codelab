function changeOnClick(arg) {
  return console.log(arg);
}

function helper1(arg) {
  return (
    <div className="helper1" onClick={(e) => changeOnClick(e.target.value)}>
      <span> Helper1: {arg.isHelper1} </span>
    </div>
  );
}

function helper2(arg) {
  return (
    <div className="helper2">
      <span> Helper2: {arg.isHelper2} </span>
    </div>
  );
}

export default function MainRender(props) {
  const theValue = props.value;
  if (theValue.isHelper1) {
    return helper1(theValue);
  } else {
    return helper2(theValue);
  }
}
