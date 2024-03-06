interface MenuProps {
  onSelectVideo: (newSrc: string) => void;
}

const Menu = (props: MenuProps) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    props.onSelectVideo(name);
  }

  return (
    <div>
      <form>
        <input
          type="radio"
          value="fast"
          name="speed"
          id="fast"
          onChange={handleChange}
        />
        <label htmlFor="fast">Fast</label>

        <input
          type="radio"
          value="slow"
          name="speed"
          onChange={handleChange}
        />
        <label htmlFor="slow">Slow</label>

        <input
          type="radio"
          value="cute"
          name="speed"
          onChange={handleChange}
          id="cute"
        />
        <label htmlFor="cute">Cute</label>

        <input
          type="radio"
          value="eek"
          name="speed"
          onChange={handleChange}
          id="eek"
        />
        <label htmlFor="eek">Eek</label>
      </form>
    </div>
  );
};

export default Menu;
