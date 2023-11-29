import '../../css/choice.css';

const ChoiceOption = ({ props, setSelectedOptio }) => {
  const selected = props.selected;
  const text = props.text;

  const onHandleClick = () => {
    setSelectedOption(props.index);
  }

  return (
    <div className="flex w-full items-center">
      {selected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 512 512"
          className="w-10 h-10 text-green-600"
        >
          <path
            fill="rgb(21 128 61)"
            d="M0 256a256 256 0 1 0 512 0a256 256 0 1 0-512 0zm294.6-120.9l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8l-99.9 107.1c-4.2 4.5-10.1 7.1-16.3 7.1c-12.3 0-22.3-10-22.3-22.3V304h-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96v-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"
          />
        </svg>
      )}
      <button
        className={` font-pixelcraft button ${
          selected ? 'selected' : 'not-selected'
        }`}
        type="button"
        ontouchstart
        style={{ outline: 'none' }}
        onClick={onHandleClick}
      >
        <div className={`button-top ${selected ? 'selected' : 'not-selected'}`}>
          {text}
        </div>
        <div
          className={`button-bottom ${selected ? 'selected' : 'not-selected'}`}
        ></div>
        <div className="button-base"></div>
      </button>
    </div>
  );
};

export default ChoiceOption;
