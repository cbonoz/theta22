import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { APP_NAME } from "../util/constants";
import { transactionUrl } from "../util";

// Discover previously minted NFTs.
// Find information on the owner, play the video,
function Discover(props) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const findListing = async () => {
    if (!url) {
      alert("Enter an address");
    }

    setResult(transactionUrl(url));
  };

  return (
    <div>
      <h1>Discover bundles</h1>
      <br />
      <h3>Enter the address of a {APP_NAME} contract</h3>

      <Input value={url} onChange={(e) => setUrl(e.target.value)} />
      <br />
      <br />

      <Button
        size="large"
        type="primary"
        className="standard-btn"
        loading={loading}
        disabled={loading}
        onClick={findListing}
      >
        Search
      </Button>

      {result && (
        <div>
          <hr />
          <a href={result} target="_blank">
            View Contract
          </a>
        </div>
      )}
    </div>
  );
}

Discover.propTypes = {};

export default Discover;
