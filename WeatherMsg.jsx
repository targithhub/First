import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const WeatherMsg = (props) => {
  let { isSunny } = props;
  return (
    <div>
      <h2>Q2 Today's Weather</h2>
      <p>{(isSunny = false ? "It's sunny today!" : "It's cloudy today!")}</p>
    </div>
  );
};

export default WeatherMsg;
