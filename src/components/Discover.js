import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { APP_NAME } from "../util/constants";
import { accountUrl, transactionUrl } from "../util";
import { getContractBundleUrl } from "../contract/thetaContract";

// Discover previously minted NFTs.
// Find information on the owner, play the video,
function Discover(props) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState()

  const findListing = async () => {
    setResult(undefined)
    setError(undefined)
    const address= url
    if (!address) {
      setError("Enter a contract address.");
      return
    }

    setLoading(true)

    let bundleUrl
    try {
      bundleUrl = await getContractBundleUrl(address)
      const res = {
        contract: accountUrl(address),
        bundleUrl
      }
      setResult(res);
    } catch(e) {
      console.error('error getting contract', e)
      setError('Not a valid ThetaBundle contract address.')
      return
    } finally {
      setLoading(false)
    }
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

      {error && <p className="red">{error}</p>}

      {result && (
        <div>
          <hr />
          <p>
          <a href={result.address} target="_blank">
            View Contract
          </a>
          </p>
          <p>
            <a href={result.bundleUrl} target="_blank">
              View Theta Bundle
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

Discover.propTypes = {};

export default Discover;
