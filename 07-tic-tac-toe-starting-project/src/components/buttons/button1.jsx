export default function Button1(props) {
  let { contents, handleEditClick } = props;
  return (
    <>
      <button onClick={handleEditClick}>{contents}</button>
    </>
  );
}
