import styles from "../components/ButtonsContainer.module.css";

function ButtonsContainer() {
  let buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonList.map((buttonName) => (
          <button key={buttonName} className={styles.button}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonsContainer;
