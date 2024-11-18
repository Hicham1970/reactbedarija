export default function TextField({ inputLabel, inputName, children }) {
  return (
    <>
      <label type="text">{inputLabel}</label>
      <input name="inputName" type="text" />
      <div>{children}</div>
    </>
  );
}
