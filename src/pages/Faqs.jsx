import React, { useCallback, useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import faqs from './faqsData';
import './faqs.css';

function Faqs() {
  const [faqsData, setFaqsData] = useState({ data: [], accordion: [] });
  const [filters, setFilters] = useState({ data: [], buttons: [] });
  const [selectedFilter, setSelectedFilter] = useState(0);

  const mapAccordion = (item) => (
    <Accordion.Item eventKey={item.id} key={item.id} category={item.categoryId}>
      <Accordion.Header>
        <div className="fw-bold ">{item.question}</div>
      </Accordion.Header>
      <Accordion.Body>{item.answer}</Accordion.Body>
    </Accordion.Item>
  );

  const onFilterButtonClicked = useCallback((evt) => {
    const categoryIdFilter = parseInt(evt.currentTarget.id, 4);
    setSelectedFilter(parseInt(evt.currentTarget.id, 10));

    setFaqsData((prevState) => {
      const newState = { ...prevState };
      const newArray = prevState.data.filter((itemFaq) => {
        let result = false;
        if (categoryIdFilter === 0) {
          result = true;
        } else if (itemFaq.categoryId === categoryIdFilter) {
          result = true;
        }
        return result;
      });
      newState.accordion = newArray.map(mapAccordion);
      return newState;
    });
  }, []);

  const mapFilter = useCallback(
    (item) => (
      <button
        type="button"
        className={`btn ${
          selectedFilter === item.id ? 'btn-info' : 'btn-outline-info'
        }`}
        key={item.id}
        id={item.id}
        onClick={onFilterButtonClicked}
      >
        {item.name}
      </button>
    ),
    [onFilterButtonClicked, selectedFilter]
  );

  useEffect(() => {
    setFaqsData((prevState) => {
      const newState = { ...prevState };
      newState.data = faqs.faqsQuestions;
      newState.accordion = faqs.faqsQuestions.map(mapAccordion);
      return newState;
    });
  }, []);

  useEffect(() => {
    setFilters((prevState) => {
      const newState = { ...prevState };
      newState.data = faqs.faqsCategories;
      newState.buttons = faqs.faqsCategories.map(mapFilter);
      return newState;
    });
  }, [mapFilter]);

  return (
    <>
      <h1 className="text-center my-3"> Frequently Asked Questions (FAQ) </h1>
      <div className="container">
        <div className="w-75 mx-auto">
          <div className="text-center">
            <div className="btn-group">
              <button
                type="button"
                className={`btn ${
                  selectedFilter === 0 ? 'btn-info' : 'btn-outline-info'
                }`}
                id="0"
                onClick={onFilterButtonClicked}
              >
                All
              </button>
              {filters.buttons}
            </div>
          </div>
          <Accordion flush defaultActiveKey="0" className="mx-auto mt-3">
            {faqsData.accordion}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faqs;
