// ConnectButton.tsx
import { useEthers, useEtherBalance } from "@usedapp/core";
import { Button } from "antd";

export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <span color="white" fontSize="md">
      {etherBalance && etherBalance} ETH
    </span>
  ) : (
    <Button type="primary" onClick={handleConnectWallet}>
      Connect to a wallet
    </Button>
  );
}
