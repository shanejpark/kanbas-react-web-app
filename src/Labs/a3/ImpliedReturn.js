export default function ImpliedReturn() {
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  return (
    <div>
      <h2>Implied return</h2>
      fourTimesFive = {fourTimesFive}
      <br></br>
      multiply(4,5) = {multiply(4, 5)}
    </div>
  );
}
