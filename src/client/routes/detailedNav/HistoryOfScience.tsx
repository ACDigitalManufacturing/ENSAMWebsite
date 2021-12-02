import { historyOfScience } from "routes/routes";

const HistoryOfScience = (): JSX.Element => {
  return (
    <div>
      <h2>Histoire de la science</h2>
      <ul>
        <a href={historyOfScience.historyOfScience}>Histoire de la science</a>
      </ul>
    </div>
  );
};

export default HistoryOfScience;
