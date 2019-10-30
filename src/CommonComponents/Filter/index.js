import React from "react";
import PropTypes from "prop-types";
import { Typography, Select, Row, Col } from "antd";

const Filter = ({ title, options, placeholder, onSelect }) => {
  const { Title } = Typography;
  const { Option } = Select;

  return (
    <Row type="flex" justify="start">
      <Col span={8}>
        <Title level={3}>{title}</Title>
      </Col>
      <Col span={16}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={onSelect}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {options.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Col>
    </Row>
  );
};

Filter.defaultProps = {
  title: "Filter",
  placeholder: "Select a value"
};

const FilterShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
})

Filter.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(FilterShape).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Filter;
