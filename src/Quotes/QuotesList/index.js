import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Table, Icon } from "antd";
import "./quotesList.scss";
const columns = [
  {
    title: "Origin",
    dataIndex: "origin",
    key: "origin"
  },
  {
    title: "Destination",
    dataIndex: "destination",
    key: "destination"
  },
  {
    title: "Cargo Details",
    dataIndex: "cargo_disc",
    key: "cargo_disc"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Action",
    className: "action",
    render: () => (
      <span>
        <Icon type="ellipsis" className="rotated" />
      </span>
    )
  }
];
const QuotesList = ({ quotes, getQuotes }) => {
  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

console.log(quotes, columns);

  return (
    <div class="quotes-list">
      {quotes.length ? (
        <Table
          pagination={false}
          className="quotes-list__data"
          dataSource={quotes}
          columns={columns}
        />
      ) : null}
    </div>
  );
};

const QuoteShape = PropTypes.shape({
  key: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  cargo_disc: PropTypes.string.isRequired
});

QuotesList.propTypes = {
  quotes: PropTypes.arrayOf(QuoteShape).isRequired,
  getQuotes: PropTypes.func.isRequired
};

export default QuotesList;
