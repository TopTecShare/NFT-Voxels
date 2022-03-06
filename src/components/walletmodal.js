import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./button";
import { useEthers } from "@usedapp/core";
import { injected, walletconnect } from "../global/connectors";

import MetamaskImage from "../img/wallet/metamask.svg";
import WalletconnectImage from "../img/wallet/walletconnect.svg";

import "../styles/walletmodal.css";

export default function WalletConnectionModal({ open, onClose }) {
  const { account, activate, deactivate, connector } = useEthers();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="paper">
          <div className="content">
            <Button
              secondary
              customClass={
                "button " + account && connector === injected && "selected"
              }
              onClick={() => {
                activate(injected);
                onClose();
              }}
              fullWidth
            >
              <img src={MetamaskImage} alt="metamask" />
              <span className="inner">
                Metamask
                <small>Connect to your MetaMask Wallet</small>
              </span>
            </Button>
            <Button
              secondary
              customClass={
                "button " + account && connector === walletconnect && "selected"
              }
              onClick={() => {
                activate(walletconnect);
                onClose();
              }}
              fullWidth
            >
              <img src={WalletconnectImage} alt="walletconnect" />
              <span className="inner">
                WalletConnect
                <small>Scan with WalletConnect to connect</small>
              </span>
            </Button>
            {account && (
              <Button secondary customClass="disconnect" onClick={deactivate}>
                Disconnect
              </Button>
            )}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
