import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { APP_NAME } from "../util/constants";

// Discover previously minted NFTs.
// Find information on the owner, play the video,
function Discover(props) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);

  const findListing = async () => {
    if (!url) {
      alert("Enter an address");
    }
  };

  return (
    <div>
      <h1>Discover NFTs</h1>
      <br />
      <div>Enter the address of a theta NFT</div>

      <Input value={url} onChange={(e) => setUrl(e.target.value)} />
      <br />

      <Button
        type="primary"
        className="standard-btn"
        loading={loading}
        disabled={loading}
        onClick={findListing}
      >
        Search
      </Button>
    </div>
  );
}

Discover.propTypes = {};

export default Discover;
