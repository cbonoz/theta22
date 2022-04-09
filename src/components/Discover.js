import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";

// Discover previously minted NFTs.
// Find information on the owner, play the video,
function Discover(props) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);

  const findListing = async () => {};

  return (
    <div>
      <div>Enter the url of a theta NFT</div>

      <Input value={url} onChange={(e) => setUrl(e.target.value)} />
      <br />

      <Button loading={loading} disabled={loading} onClick={findListing}>
        Search
      </Button>
    </div>
  );
}

Discover.propTypes = {};

export default Discover;
