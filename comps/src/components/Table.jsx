import { Fragment } from 'react';

export default function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) =>
    column.header ? (
      <Fragment key={column.label}>{column.header()}</Fragment>
    ) : (
      <th key={column.label}>{column.label}</th>
    )
  );

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className="p-2">
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
