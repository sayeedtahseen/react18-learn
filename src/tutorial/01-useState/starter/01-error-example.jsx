const ErrorExample = () => {
let count = 0;

const handleClick = () => {
  count = count + 1;
  console.log(count);
}

  return (<><h2>useState error example</h2>
  <h2>count {count}</h2>
    <button type="button" className="btn" onClick={handleClick}>Click me</button>
    </>
  );
};

export default ErrorExample;
