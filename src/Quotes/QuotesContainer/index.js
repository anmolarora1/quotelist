import React, { useState, useCallback } from "react";
import { Card, Button, Row, Col } from "antd";
import Filter from "../../CommonComponents/Filter";
import QuotesList from "../QuotesList";
import axios from "axios";
import mockData from "./mockData";
import formatter from "../../utils/formatter";

const quotesURL = "http://www.mocky.io/v2/5dafc7fa2f00005c00c1363d​";
const filterOptions = [
  {
    text: "Any",
    value: ""
  },
  {
    text: "Quote Created",
    value: "created"
  },
  {
    text: "Quote Requested",
    value: "requested"
  },
  {
    text: "Quote Accepted",
    value: "accepted"
  }
];

export default function () {
  const [quotes, updateQuotes] = useState([]);
  const [visibleQuotes, updateVisibleQuotes] = useState([]);

  const getQuotes = useCallback(async () => {
    const result = await axios(quotesURL);
    const formattedData = formatter(result.data);
    console.log(formattedData);
    updateQuotes(formattedData);
    updateVisibleQuotes(formattedData);

  }, []);

  const onFilterSelect = filterValue => {
    updateVisibleQuotes(quotes.filter(quote => quote.status.toLowerCase().includes(filterValue.toLowerCase())))
  };

  return (
    <Card size="default">
      <Row type="flex" justify="space-around">
        <Col span={16}>
          <Filter options={filterOptions} placeholder="Quote Status" onSelect={onFilterSelect} />
        </Col>
        <Col span={6}>
          <Button type="primary">Request Quote</Button>
        </Col>
      </Row>
      <QuotesList quotes={visibleQuotes} getQuotes={getQuotes} />
    </Card>
  );
}


