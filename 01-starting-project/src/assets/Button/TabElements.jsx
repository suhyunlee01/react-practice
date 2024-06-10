export default function TabElements(props) {
  let { buttons, tabContents, ButtonsContainer } = props;

  return (
    <>
      <ButtonsContainer className="button-container">
        {buttons}
      </ButtonsContainer>
      {tabContents}
    </>
  );
}
