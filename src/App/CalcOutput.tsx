import { useEffect, useState } from "react";
import {
  Action,
  IngredientList,
  Item,
  User,
  actionNamesT,
  itemNamesT,
  marketDataT,
} from "../types.d";
import {
  commNumber,
  roundNumber,
  secondsToReadable,
} from "../utils/VariousFunctions";
import { styled } from "styled-components";

type CalcOutputProps = {
  userInfoRef: React.MutableRefObject<User>;
  itemData: Record<string, Item>;
  actionData: Record<string, Action>;
  marketData: marketDataT;
  tab: number;
  rerenderer: () => void;
};
function CalcOutput({
  userInfoRef,
  itemData,
  actionData,
  marketData,
  tab,
}: CalcOutputProps) {
  const [getFromActions, setGetFromActions] = useState<
    Record<string, actionNamesT> // { [key: itemNamesT]: actionNamesT }
  >({ chosenItem: "pick" as actionNamesT });
  const itemName = userInfoRef.current.item;
  const [showIngredientsList, setShowIngredientsList] = useState(false);
  const [itemsOwned, setItemsOwned] = useState<Record<string, number | "">>({
    ...userInfoRef.current.inventory,
  });

  useEffect(() => {
    setGetFromActions((curr) => ({
      ...curr,
      chosenItem: "pick" as actionNamesT,
    }));
  }, [userInfoRef.current.item]);
  useEffect(() => {
    setShowIngredientsList(false);
  }, [userInfoRef.current.item, tab]);
  useEffect(() => {
    userInfoRef.current.edit = { inventory: itemsOwned };
  }, [itemsOwned]);
  const allIngredients = new IngredientList({
    name: userInfoRef.current.item,
    quantity: userInfoRef.current.quantity,
  });
  allIngredients.addStock(
    Object.entries(itemsOwned).reduce(
      (a, [i, q]) =>
        i in getFromActions ? { ...a, [i]: q === "" ? 0 : q } : a,
      {} as Record<string, number>
    )
  );
  try {
    const marketInfo = marketData[itemName];
    const worth = itemData[itemName].price(marketData);
    let quantityNeededWOwned = itemsOwned[itemName];
    if (quantityNeededWOwned === "") quantityNeededWOwned = 0;
    return (
      <div>
        <h2>Cowculations!</h2>
        <p>
          Please be aware, quantities are exact, but the results vary.
          Calculations are done by finding the average eg. doing Sugar gives
          1-14, these calculations assume you get (1 + 14) / 2 = 7.5 Sugar every
          time
        </p>
        <article>
          <h3>{userInfoRef.current.item}</h3>
          <p>
            Approximate worth: {commNumber(worth)} (
            {commNumber(worth * userInfoRef.current.quantity)} total)
          </p>
          <p>
            Ask: {commNumber(marketInfo.ask)} - Bid:{" "}
            {commNumber(marketInfo.bid)} - Vendor:{" "}
            {commNumber(itemData[itemName].vendor)}
          </p>
          <p>
            How to get:{" "}
            <select
              value={getFromActions.chosenItem}
              onChange={(e) =>
                setGetFromActions((curr) => ({
                  ...curr,
                  chosenItem: e.target.value as actionNamesT,
                }))
              }
            >
              <option value="pick">Please pick an option</option>
              {itemData[itemName].get.map((action, i) => (
                <option
                  key={`${i}-${action}`}
                  value={action}
                >
                  {action}
                </option>
              ))}
            </select>
          </p>
          <IngredientsButton
            $show={getFromActions.chosenItem === ("pick" as actionNamesT)}
            onClick={() => setShowIngredientsList(true)}
          >
            Collate
          </IngredientsButton>
          <section>
            {getFromActions.chosenItem !== ("pick" as actionNamesT) &&
            !/market/i.test(getFromActions.chosenItem)
              ? renderAction(
                  actionData,
                  itemData,
                  marketData,
                  actionData[getFromActions.chosenItem],
                  userInfoRef.current.quantity - quantityNeededWOwned,
                  itemData[userInfoRef.current.item],
                  userInfoRef.current,
                  getFromActions,
                  setGetFromActions,
                  0,
                  allIngredients,
                  itemsOwned,
                  setItemsOwned
                )
              : ""}
          </section>
        </article>
        <CompleteIngredientsList
          $show={showIngredientsList}
          onClick={() => setShowIngredientsList(false)}
        >
          <CenterClose>{">Click To Close<"}</CenterClose>
          <p>List of Actions</p>
          {allIngredients.showList.map((x, i) => {
            if (x.count < 1) return "";
            return (
              <IngredientListAction
                $index={i}
                key={`showList-${i}`}
              >
                <p>
                  Do {x.action.name} {commNumber(x.count)} times
                </p>
              </IngredientListAction>
            );
          })}
          <p>List of Items</p>
          {Object.entries<number>(allIngredients.showStorage)
            .sort(([an, a], [bn, b]) =>
              an === userInfoRef.current.item
                ? -1
                : bn === userInfoRef.current.item
                ? 1
                : a === 0
                ? 1
                : b === 0
                ? -1
                : b - a
            )
            .map(([name, quant], i) => {
              const num = roundNumber(quant);
              let itemOwned = itemsOwned[name];
              if (!itemOwned) itemOwned = 0;
              const storage =
                name !== userInfoRef.current.item
                  ? num > 0
                    ? itemOwned > 0
                      ? quant > itemOwned
                        ? roundNumber(quant - itemOwned) === 0
                          ? "You broke even"
                          : `Items gained extra: ${commNumber(
                              roundNumber(quant - itemOwned)
                            )}`
                        : `Items left over: ${commNumber(roundNumber(quant))}`
                      : `Items you will gain: ${commNumber(roundNumber(quant))}`
                    : `Items you need to buy: ${commNumber(
                        roundNumber(quant * -1)
                      )}`
                  : `You will have ${commNumber(roundNumber(quant))} total`;
              return num === 0 ? (
                ""
              ) : (
                <IngredientListItem
                  $amount={num}
                  key={`storageList-${i}`}
                >
                  <p>Item: {name}</p>
                  <p>{storage}</p>
                </IngredientListItem>
              );
            })}
        </CompleteIngredientsList>
      </div>
    );
  } catch (e) {
    console.log(e);
    return (
      <>
        <h2>There was an error, please refresh</h2>
        <p>
          alternatively, contact me on discord "steve2116", or in game "sin47"
          with the log (to go to the console press {"<F12>"} and chose the
          console tab)
        </p>
      </>
    );
  }
}

export default CalcOutput;

function renderAction(
  actionData: Record<string, Action>,
  itemData: Record<string, Item>,
  marketData: marketDataT,
  action: Action,
  itemQuantity: number,
  item: Item,
  userInfo: User,
  getFromActions: Record<string, actionNamesT>,
  setGetFromActions: React.Dispatch<
    React.SetStateAction<Record<string, actionNamesT>>
  >,
  depth: number,
  allIngredients: IngredientList,
  itemsOwned: Record<string, number | "">,
  setItemsOwned: React.Dispatch<
    React.SetStateAction<Record<string, number | "">>
  >
) {
  const actions = action.need(userInfo, item.name, itemQuantity);
  const totalQuantity = roundNumber(
    (action.gatherQuantity(userInfo) as { [key: string]: number })[item.name] *
      actions
  );
  const time = roundNumber(action.howLong(userInfo, actions));
  const actionInputs = Object.entries(action.do(userInfo, actions).inputs);
  allIngredients.addAction(userInfo, {
    action,
    item: item,
    quantity: itemQuantity,
    depth,
  });
  if (itemsOwned[item.name] !== "" && typeof itemsOwned[item.name] !== "number")
    setItemsOwned((curr) => ({ ...curr, [item.name]: "" }));
  const inputOptions =
    actionInputs.length === 0
      ? ""
      : actionInputs.map(([i, q], index) => {
          if (itemsOwned[i] !== "" && typeof itemsOwned[i] !== "number")
            setItemsOwned((curr) => ({ ...curr, [i]: "" }));
          if (getFromActions[i] === undefined)
            setGetFromActions((curr) => ({
              ...curr,
              [i]: "pick" as actionNamesT,
            }));
          const newAction = actionData[getFromActions[i]];

          let quantityNeededWOwned = itemsOwned[i];
          if (quantityNeededWOwned === "") quantityNeededWOwned = 0;
          return (
            <ActionListItem
              key={`${action.name}-${index}-${i}`}
              $depth={depth}
            >
              <p>Item: {i}</p>
              <p>
                How to get:{" "}
                <select
                  value={getFromActions[i]}
                  onChange={(e) =>
                    setGetFromActions((curr) => ({
                      ...curr,
                      [i]: e.target.value as actionNamesT,
                    }))
                  }
                >
                  <option value="Market">Buy From Market</option>
                  {itemData[i].get.map((actionName, ind) => {
                    return (
                      <option
                        key={`${i}-${ind}-${actionName}`}
                        value={actionName}
                      >
                        {actionName}
                      </option>
                    );
                  })}
                </select>
              </p>
              {getFromActions[i] &&
              getFromActions[i] !== ("pick" as actionNamesT) &&
              !/market/i.test(getFromActions[i]) ? (
                renderAction(
                  actionData,
                  itemData,
                  marketData,
                  newAction,
                  (
                    newAction.gatherQuantity(userInfo) as {
                      [key: string]: number;
                    }
                  )[i] *
                    newAction.need(userInfo, i as itemNamesT, q) -
                    quantityNeededWOwned,
                  itemData[i],
                  userInfo,
                  getFromActions,
                  setGetFromActions,
                  depth + 1,
                  allIngredients,
                  itemsOwned,
                  setItemsOwned
                )
              ) : (
                <>
                  <p>Quantity: {commNumber(q)}</p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor={`${action.name}-${i}-${depth}`}>
                      Amount currently owned:{" "}
                    </label>
                    <input
                      type="number"
                      id={`${action.name}-${i}-${depth}`}
                      value={itemsOwned[i]}
                      onChange={(e) => {
                        const num =
                          e.target.value === "" ? "" : Number(e.target.value);
                        if (num !== "" && num < 0) return;
                        setItemsOwned((curr) => ({
                          ...curr,
                          [i]: num,
                        }));
                      }}
                    />
                  </form>
                </>
              )}
            </ActionListItem>
          );
        });
  return (
    <>
      <p>
        Quantity: {commNumber(totalQuantity)} (in {commNumber(actions)} actions)
        ({commNumber(roundNumber(itemQuantity, 3))} required)
      </p>
      <p>
        Time: {secondsToReadable(time)} ({time} seconds)
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={`${action.name}-${item.name}-${depth}`}>
          Amount currently owned:{" "}
        </label>
        <input
          type="number"
          id={`${action.name}-${item.name}-${depth}`}
          value={itemsOwned[item.name]}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && num < 0) return;
            setItemsOwned((curr) => ({ ...curr, [item.name]: num }));
          }}
        />
      </form>
      {inputOptions}
    </>
  );
}

const actionListBorderRef = ["black", "red", "blue", "green", "orange"];

const ActionListItem = styled.section<{ $depth: number }>`
  border: 3px solid
    ${({ $depth }) => actionListBorderRef[$depth % actionListBorderRef.length]};
  padding: 1rem;
`;

const CompleteIngredientsList = styled.article<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "initial" : "none")};
  position: absolute;
  top: 10%;
  right: max(20%, calc(50% - 200px));
  width: 60%;
  height: fit-content;
  max-width: 400px;
  text-align: center;
  background-color: white;
  border: 3px solid black;
  padding: 1rem;
  border-radius: 1rem;
`;

const IngredientsButton = styled.button<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "none" : "initial")};
  padding: 0.5rem;
  font-size: 1.3rem;
`;

const CenterClose = styled.h2`
  text-align: center;
  margin: 0;
`;

const IngredientListAction = styled.section<{ $index: number }>`
  border: 3px solid ${({ $index }) => ($index % 2 === 0 ? "black" : "gray")};
  margin: 0.3rem;
`;

const IngredientListItem = styled.section<{ $amount: number }>`
  border: 3px solid ${({ $amount }) => ($amount > 0 ? "green" : "orange")};
  margin: 0.3rem;
`;
