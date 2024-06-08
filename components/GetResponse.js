import React, { useState, useEffect } from 'react';

const GetResponse = ({ data, error, loading, onLoadMore, additionalInfo }) => {
  const [additionalContent, setAdditionalContent] = useState('');

  useEffect(() => {
    setAdditionalContent(additionalInfo);
  }, [additionalInfo]);

  const handleLoadMore = async () => {
    if (onLoadMore) {
      const additionalData = await onLoadMore();
      if (additionalData) {
        setAdditionalContent(additionalData);
      }
    }
  };

  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    content = (
      <>
        <p><b>Name:</b> {data.result.vegetableInformation}</p>
        <p><b>Description:</b> {data.result.description}</p>
        {additionalContent ? (
          <>
            <h3>Additional Information</h3>
            <p><b>Foods to accompany:</b> {additionalContent.foodsToAccompany}</p>
            <p><b>Foods to avoid:</b> {additionalContent.foodsToAvoid}</p>
            <p><b>Best time to consume:</b> {additionalContent.bestTimeToConsume}</p>
            <p><b>Life conditions to consume:</b> {additionalContent.lifeConditionsToConsume}</p>
          </>
        ) : (
          <button className="load-more-button" onClick={handleLoadMore} disabled={loading}>
            Load More
          </button>
        )}
      </>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default GetResponse;
