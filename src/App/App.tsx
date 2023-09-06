import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import {
  User,
  Item,
  Action,
  itemNamesT,
  actionNamesT,
  marketDataT,
} from "../types.d";
import UserDetails from "./UserDetails";
import CalcOutput from "./CalcOutput";
import { items, actions } from "../data/MWIdata";
import { getMarketData } from "../utils/MarketApi";
import changeLog from "../../changeLog";

function App() {
  const userInfoRef = useRef<User>(new User());
  useEffect(() => {
    const userCookie1 = document.cookie.match(/(?<=userInfo=).+(?=;)/);
    const userCookie2 = document.cookie.match(/(?<=userInfo=).+$/);
    let userCookie: User;
    if (userCookie1) userCookie = JSON.parse(userCookie1[0]);
    else if (userCookie2) userCookie = JSON.parse(userCookie2[0]);
    else return;
    userInfoRef.current = new User(userCookie);
  }, []);
  const [itemData, setItemData] = useState<Record<string, Item>>({});
  const [actionData, setActionData] = useState<Record<string, Action>>({});
  const [marketData, setMarketData] = useState<marketDataT>();
  const [, state] = useState(false);
  const rerenderer = () => state((curr) => !curr);
  const [missing, setMissing] = useState(false);
  const [tab, setTab] = useState(0);
  const tabs = ["info", "calc"];
  const [changeLogShow, setChangeLogShow] = useState(false);

  useEffect(() => {
    setItemData(
      Object.entries(items).reduce((acc, [itemName, data]) => {
        acc[itemName as itemNamesT] = new Item({
          itemName: itemName as itemNamesT,
          itemType: data.type,
          vendorPrice: data.vendor,
          getFrom: data.getFrom,
        });
        return acc;
      }, {} as Record<string, Item>)
    );
    setActionData(
      Object.entries(actions).reduce((acc, [actionName, data]) => {
        acc[actionName] = new Action({
          actionName: actionName as actionNamesT,
          skill: data.skill,
          time: data.time,
          exp: data.exp,
          level: data.level,
          inputs: { ...data.inputs },
          upgradeFrom: data.upgradeFrom,
          outputs: { ...data.outputs },
          rareOutputs: { ...data.rareOutputs },
        });
        return acc;
      }, {} as Record<string, Action>)
    );
    getMarketData().then((data) => {
      if (Object.keys(data).length < Object.keys(items).length) {
        setMissing(true);
      }
      Object.keys(items).forEach((itemName) => {
        if (!data[itemName]) {
          data[itemName] = {
            ask: -1,
            bid: -1,
            vendor: -1,
          };
        }
      });
      setMarketData(data);
    });
  }, []);

  if (!marketData) return "Loading...";

  return (
    <>
      <h1>The MWI Production Cowculator!</h1>
      <Caution $missing={missing}>
        Some market data is missing. Refreshing will send another request to
        fetch the market data{" "}
        <CautionAdvice>
          (this is caused by the market API missing data. Refreshing will only
          work if the API has all the data)
        </CautionAdvice>
      </Caution>
      <br />
      <NextTab
        onClick={() =>
          setTab((curr) => (curr < tabs.length - 1 ? curr + 1 : 0))
        }
      >
        Change Tab
      </NextTab>
      <Tabs>
        <UserInputs $show={tabs[tab] === "info"}>
          <UserDetails
            userInfoRef={userInfoRef}
            rerenderer={rerenderer}
            tab={tab}
          />
        </UserInputs>
        <DataInfo $show={tabs[tab] === "calc"}>
          <CalcOutput
            userInfoRef={userInfoRef}
            itemData={itemData}
            actionData={actionData}
            marketData={marketData}
            tab={tab}
            rerenderer={rerenderer}
          />
        </DataInfo>
      </Tabs>
      <footer>
        <ChangeLogButton onClick={() => setChangeLogShow((curr) => !curr)}>
          <ChangeLogButtonText>
            {changeLogShow ? "Hide Change Log" : "Show Change Log"}
          </ChangeLogButtonText>
        </ChangeLogButton>
        <ChangeLog $show={changeLogShow}>
          {[...changeLog].reverse().map((change, index) => {
            return (
              <ChangeLogListItem key={index}>
                <p>
                  v{change.release} [{change.date}]
                </p>
                <p>{change.info}</p>
              </ChangeLogListItem>
            );
          })}
        </ChangeLog>
        <br />
        <p>{"Created by sin47 <3"}</p>
      </footer>
    </>
  );
}

export default App;

const Caution = styled.p<{ $missing: boolean }>`
  display: ${({ $missing }) => ($missing ? "initial" : "none")};
  font-size: 0.8em;
  text-decoration: underline;
`;
const CautionAdvice = styled.span`
  font-style: italic;
`;

const Tabs = styled.div``;

const UserInputs = styled.section<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "inherit" : "none")};
`;

const DataInfo = styled.section<{ $show: boolean }>`
display: ${({ $show }) => ($show ? "inherit" : "none")};}`;

const NextTab = styled.button``;

const ChangeLog = styled.article<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "inherit" : "none")};
  border: 5px solid black;
  padding: 5px;
  width: fit-content;
  height: fit-content;
  max-height: 350px;
  overflow-y: auto;
  list-style: none;
`;

const ChangeLogListItem = styled.li`
  border: 1px solid grey;
  padding: 5px;
  margin: 10px;
`;

const ChangeLogButton = styled.button`
  margin: 25px;
`;

const ChangeLogButtonText = styled.span`
  font-style: italic;
`;
