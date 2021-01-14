function EntriesTableSuspended() {
  return (
    <div className="EntriesTableContainer">
      <table className="EntriesTable suspended">
        <thead>
          <tr>
            <th colSpan={3} className="labels">
              <div>Time</div>
              <div>Type</div>
              <div>Match status</div>
              <div>Score</div>
              <div className="statistics header">Statistics</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Loading entries, please wait.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EntriesTableSuspended;
