import React from "react";
import { Page, Tabbar, Tab } from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import ScanQr from "./components/ScanQr";
import CreateQr from "./components/CreateQr";

const App = () => (
  <Page>
    <Tabbar
      position="bottom"
      tabBorder
      renderTabs={() => [
        {
          content: <ScanQr />,
          tab: <Tab label="Scan" icon="fa-qrcode" />
        },
        {
          content: <CreateQr />,
          tab: <Tab label="Tag" icon="fa-tag" />
        }
      ]}
    />
  </Page>
);
export default App;
