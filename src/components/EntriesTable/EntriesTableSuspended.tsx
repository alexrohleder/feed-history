function EntriesTableSuspended() {
  return (
    <table className="EntriesTable suspended">
      <thead>
        <tr>
          <th colSpan={3}>
            <div>Time</div>
            <div>Type</div>
            <div>Match status</div>
            <div>Score</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>loading entries, please wait.</td>
        </tr>
      </tbody>
    </table>
  );
}

export default EntriesTableSuspended;
