const Button = props => {
  //  Write your code here.
  {buttontext,classname}=props;
  <button className={`${classname}`}>{buttontext}</button>
}

const element = (
  //  Write your code here.
  <div>
  <div className="background">
      <h1>Social Buttons App</h1>
      <div className="container">
          <Button buttontext="Like" classname="b"/>
          <Button buttontext="Comment" classname="b2"/>
          <Button buttontext="Share" classname="b3"/>
      </div>
  </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
