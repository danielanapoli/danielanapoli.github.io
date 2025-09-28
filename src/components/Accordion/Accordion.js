'use client';

import { Accordion as BootstrapAccordion } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export function Accordion({defaultActiveKeys, allKeys, children}) {
    const [activeKeys, setActiveKeys] = useState(defaultActiveKeys);

    const handleExpandAll = () => {
      setActiveKeys(allKeys);
    };

    const handleCollapseAll = () => {
      setActiveKeys([]);
    };

    const handleToggle = (key) => {
      key = `${key}`;
      console.log('test')
      if (activeKeys.includes(key)) {
        setActiveKeys(activeKeys.filter((k) => k !== key));
      } else {
        setActiveKeys([...activeKeys, key]);
      }
    };

  return (
      <>
        <br/>
        <Row className='justify-content-end' xs="auto">
          <Col><Button variant='link' onClick={handleExpandAll}>Expand all</Button></Col>
          <Col><Button variant='link' onClick={handleCollapseAll}>Collapse all</Button></Col>
        </Row>
        <Row>
          <Col>
            <BootstrapAccordion activeKey={activeKeys} alwaysOpen>
              {React.Children.map(children, child => {
                return React.cloneElement(child, { handleClick: handleToggle });
              })}
            </BootstrapAccordion>
          </Col>
        </Row>
      </>
  )
}

export function AccordionItem({index, header, handleClick, children}) {
  return (
    <BootstrapAccordion.Item eventKey={`${index}`}>
      <BootstrapAccordion.Header onClick={() => handleClick(`${index}`)}>
        <h3>{header}</h3>
      </BootstrapAccordion.Header>
      <BootstrapAccordion.Body>
        {children}
      </BootstrapAccordion.Body>
    </BootstrapAccordion.Item>
  )
}