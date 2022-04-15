import React, { useState, useEffect } from "react";

import { StreamDropzone } from "./StreamDropzone";
import { Input, Button, Steps, Layout } from "antd";
import { storeFiles } from "../util/stor";
import { CONNECT_TEXT, UPLOAD_INFO } from "../util/constants";
import { deployContract } from "../contract/thetaContract";
import { ipfsUrl } from "../util";

const { Header, Footer, Sider, Content } = Layout;

const { Step } = Steps;

const LAST_STEP = 3;

function SellStream({ isLoggedIn, signer, provider, address, blockExplorer }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn && currentStep === 0) updateStep(1);
  }, [isLoggedIn]);

  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState({
    userName: "cbono",
    title: "LiveStream clip from 4/9",
    eth: 0.01,
  });

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  const clearInfo = () => setInfo({});

  const updateInfo = (update) => {
    setInfo({ ...info, ...update });
  };

  const updateStep = async (offset) => {
    const newStep = currentStep + offset;
    if (newStep === LAST_STEP) {
      if (!files) {
        alert("At least one file must be added");
        return;
      }
      setLoading(true);

      try {
        let res = "";
        res = await storeFiles(files);
        // setResult(res);
        const videoUrl = ipfsUrl(res);

        // TODO: after upload of files, create the contract.

        const contract = await deployContract(
          info.title,
          videoUrl,
          info.userName
        );

        console.log("deployed contract", contract);

        const card = {
          ...info,
          // ...contract,
          createdAt: new Date(),
        };

        setResult(card);

        // Add the newly created stream to index (optional).
        // addCard(card);
      } catch (e) {
        console.error("error creating listing", e);
        alert(e.toString());
        return;
      } finally {
        setLoading(false);
      }
    }

    console.log("update step", newStep);
    setCurrentStep(newStep);
  };

  const getBody = () => {
    switch (currentStep) {
      case 0: // confirm login
        return (
          <div>
            <h2 className="sell-header">Login</h2>
            <p>
              In order to create a listing, you must login with your metamask or
              wallet account. Click '{CONNECT_TEXT}' in the top right to begin.
            </p>
          </div>
        );
      case 1: // info
        return (
          <div className="info-section">
            <h2 className="sell-header">What are you listing?</h2>

            <Input
              addonBefore={"Stream(s)"}
              placeholder="Enter name of listing"
              value={info.title}
              onChange={(e) => updateInfo({ title: e.target.value })}
            />

            <Input
              addonBefore={"DisplayName"}
              placeholder="Enter listing user name"
              value={info.userName}
              onChange={(e) => updateInfo({ userName: e.target.value })}
            />

            <Input
              addonBefore={"Price (eth)"}
              placeholder="Enter eth price"
              value={info.eth}
              onChange={(e) => updateInfo({ eth: e.target.value })}
            />
            <Input
              addonBefore={"Image"}
              addonAfter={"A default will be used if blank"}
              placeholder="Enter listing image or thumbnail url (optional)"
              value={info.imgUrl}
              onChange={(e) => updateInfo({ imgUrl: e.target.value })}
            />
            <Input
              addonBefore={"Address"}
              disabled
              placeholder="Payment Address: "
              value={address}
            />
            <p>{UPLOAD_INFO}</p>
          </div>
        );
      case 2: // upload
        return (
          <div>
            <StreamDropzone files={files} setFiles={setFiles} />
          </div>
        );
      case 3: // done
        return (
          <div className="complete-section">
            <h2 className="sell-header">Complete!</h2>

            {Object.keys(result).map((k) => {
              return (
                <li>
                  {k}: {JSON.stringify(result[k]).replaceAll('"', "")}
                </li>
              );
            })}
            <h3>Listing information</h3>
            {Object.keys(info).map((k) => {
              return (
                <li key={k}>
                  {k}: {JSON.stringify(info[k]).replaceAll('"', "")}
                </li>
              );
            })}

            {result.url && (
              <a href={result.url} target="_blank">
                Click here to view contract
              </a>
            )}
          </div>
        );
    }
  };

  return (
    <div className="content">
      <h1 className="sell-heading">Publish a new bundle contract</h1>
      <Header>
        <Steps current={currentStep}>
          <Step title="Login" description="Authenticate." />
          <Step title="Information" description="What are you listing?" />
          <Step title="Upload" description="Add video(s) for purchase." />
          <Step title="Done" description="View your contract." />
        </Steps>
      </Header>
      <Content>
        <div className="sell-area">{getBody()}</div>
      </Content>
      <Footer>
        {(currentStep !== 0 || (currentStep !== 1 && !isLoggedIn)) && (
          <Button
            disabled={loading}
            type="primary"
            onClick={() => updateStep(-1)}
          >
            Previous
          </Button>
        )}
        &nbsp;
        {currentStep < LAST_STEP && (
          <Button
            disabled={loading}
            loading={loading}
            type="primary"
            onClick={() => updateStep(1)}
          >
            {currentStep === LAST_STEP - 1 ? "Done" : "Next"}
          </Button>
        )}
      </Footer>
    </div>
  );
}

export default SellStream;
