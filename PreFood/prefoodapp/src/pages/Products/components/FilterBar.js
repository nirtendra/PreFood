import { useState } from 'react';
import { Button, Dropdown, Badge } from 'react-bootstrap';

export const FilterBar = () => {
  const [filter, setFilter] = useState('All'); // Initial filter value

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary">
        Filter: <Badge bg="secondary">{filter}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleFilterChange('All')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterChange('Option 1')}>Option 1</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterChange('Option 2')}>Option 2</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterChange('Option 3')}>Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};


