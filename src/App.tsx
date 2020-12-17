import { useState } from "react";
import BaseHeader from "./components/BaseHeader";

const Outcomes = (props: {
  isOutcome1Highlighted?: boolean;
  isOutcome2Highlighted?: boolean;
  isOutcome3Highlighted?: boolean;
  onClickOutcome1?: () => void;
  onClickOutcome2?: () => void;
  onClickOutcome3?: () => void;
  isMarketExpanded?: boolean;
}) => {
  return (
    <div className="outcomes">
      <div
        onClick={props.onClickOutcome1}
        className={`outcome ${
          props.isOutcome1Highlighted ? "outcome--highlighted" : ""
        }`}
      >
        <div className="outcome__name">Some long outcome name</div>
        <div
          className="outcome__odd new"
          title={`This updated since the last message\nFrom 1.80 to 1.85`}
        >
          1.85
        </div>
      </div>
      <div
        onClick={props.onClickOutcome2}
        className={`outcome ${
          props.isOutcome2Highlighted ? "outcome--highlighted" : ""
        }`}
      >
        <div className="outcome__id">
          <div className="outcome__name">Over</div>
          <div className="outcome__specifier">1.5</div>
        </div>
        <div className="outcome__odd">1.85</div>
      </div>
      <div
        onClick={props.onClickOutcome3}
        className={`outcome ${
          props.isOutcome3Highlighted ? "outcome--highlighted" : ""
        }`}
      >
        <div className="outcome__id">
          <div className="outcome__name">Some long outcome name</div>
          <div className="outcome__specifier">1.5</div>
        </div>
        <div className="outcome__odd">1.85</div>
      </div>
      {props.isMarketExpanded && (
        <>
          <Outcomes />
          <Outcomes />
          <Outcomes />
          <Outcomes />
          <Outcomes />
          <Outcomes />
        </>
      )}
    </div>
  );
};

const OutcomesEmpty = (props: { size: number }) => {
  return (
    <div className="outcomes outcomes--empty">
      <div className="outcome outcome--empty">.</div>
      <div className="outcome outcome--empty">.</div>
      <div className="outcome outcome--empty">.</div>
    </div>
  );
};

function App() {
  const [isMarketExpanded, setMarketExpanded] = useState(false);
  const [outcome1, highlightOutcome1] = useState(false);
  const [outcome2, highlightOutcome2] = useState(false);
  const [outcome3, highlightOutcome3] = useState(false);

  return (
    <div className="App">
      <BaseHeader />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <div className="resize-handle">Time</div>
                <div>Type</div>
                <div>Match status</div>
                <div>Score</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
              <th>
                <div className="resize-handle">15/09/20 12:00</div>
                <div>Odds change</div>
                <div>Not started</div>
                <div>0:0</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>
                total
                <button
                  className="expand-collapse-button"
                  onClick={() => setMarketExpanded(!isMarketExpanded)}
                >
                  {isMarketExpanded ? "-" : "+"}
                </button>
              </th>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
              <td>
                <Outcomes
                  isOutcome1Highlighted={outcome1}
                  isOutcome2Highlighted={outcome2}
                  isOutcome3Highlighted={outcome3}
                  onClickOutcome1={() => highlightOutcome1(!outcome1)}
                  onClickOutcome2={() => highlightOutcome2(!outcome2)}
                  onClickOutcome3={() => highlightOutcome3(!outcome3)}
                  isMarketExpanded={isMarketExpanded}
                />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <OutcomesEmpty size={3} />
                <Outcomes />
              </td>
              <td>
                <OutcomesEmpty size={3} />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <OutcomesEmpty size={3} />
                <OutcomesEmpty size={3} />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td className="betstop">
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
              <td>
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
            <tr>
              <th>total</th>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
              <td>
                <Outcomes />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
