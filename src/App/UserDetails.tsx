import { Fragment, useEffect, useState } from "react";

import { User } from "../types.d";
import allItems from "../data/items";
import { capitaliseEachWordAndAddSpaces } from "../utils/VariousFunctions";
import { styled } from "styled-components";

type UserDetailsProps = {
  userInfoRef: React.MutableRefObject<User>;
  rerenderer: () => void;
  tab: number;
};

function UserDetails({ userInfoRef, rerenderer, tab }: UserDetailsProps) {
  const [formData, setFormData] = useState<formDataObject>(
    initialFormObject(userInfoRef.current)
  );
  const [resetInfo, setResetInfo] = useState<boolean>(false);

  function checkFormData() {
    return (
      allItems.includes(formData.item) &&
      formData.quantity !== "" &&
      formData.quantity > 0 &&
      Object.values(formData.skills).every(
        ({ level, speed }) =>
          level !== "" && level >= 0 && speed !== "" && speed >= 0
      ) &&
      Object.values(formData.communityBuffs).every((n) => n !== "" && n >= 0)
    );
  }
  function save() {
    if (checkFormData()) {
      userInfoRef.current.edit = formData;
      const data = userInfoRef.current.save;
      document.cookie = `userInfo=${data}; max-age=${604800000}; path=/;`;
      rerenderer();
    }
  }

  const limitedOptions = allItems
    .filter((option) =>
      option.toLowerCase().includes(formData.item.toLowerCase())
    )
    .slice(0, 6);

  useEffect(() => {
    if (checkFormData()) userInfoRef.current.edit = formData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div>
      <h1>Information!</h1>
      <button onClick={save}>Save</button>
      <ResetButton
        $show={!resetInfo}
        onClick={() => setResetInfo(true)}
      >
        Reset
      </ResetButton>
      <ResetMessage $show={resetInfo}>Are you sure?</ResetMessage>
      <ResetButton
        $show={resetInfo}
        onClick={() => reset(setFormData)}
      >
        Wipe my settings
      </ResetButton>
      <ResetButton
        $show={resetInfo}
        onClick={() => setResetInfo(false)}
      >
        Cancel
      </ResetButton>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Item Information</h2>
        <label htmlFor="item">What item do you want to make?</label>
        <input
          id="item"
          value={formData.item}
          onChange={(e) => {
            setFormData((curr) => {
              const newFormData = {
                ...curr,
                item: e.target.value,
              };
              if (allItems.includes(e.target.value))
                userInfoRef.current.edit = newFormData;
              return newFormData;
            });
          }}
          list="allItems"
        />{" "}
        <datalist id="allItems">
          {limitedOptions.map((item) => (
            <option
              key={item}
              value={item}
            />
          ))}
        </datalist>
        <label htmlFor="quantity">Target amount of item?</label>
        <input
          id="quantity"
          value={formData.quantity}
          onChange={(e) =>
            setFormData((curr) => ({
              ...curr,
              quantity: Number(e.target.value),
            }))
          }
        />
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Skill Levels</h2>
        {skills.map((skillName) => {
          const skill = skillName as keyof formDataObject["skills"];
          return (
            <section key={`level-${skill}`}>
              <label htmlFor={`level-${skill}`}>{skill}</label>
              <input
                id={`level-${skill}`}
                type="number"
                value={formData.skills[skill].level}
                onChange={(e) => {
                  const num =
                    e.target.value === "" ? "" : parseInt(e.target.value);
                  if (typeof num === "number" && (num < 1 || num > 200)) return;
                  setFormData((curr) => ({
                    ...curr,
                    skills: {
                      ...curr.skills,
                      [skill]: {
                        ...curr.skills[skill],
                        level: num,
                      },
                    },
                  }));
                }}
              />
            </section>
          );
        })}
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Skill Speeds</h2>
        {skills.map((skillName) => {
          const skill = skillName as keyof formDataObject["skills"];
          return (
            <section key={`speed-${skill}`}>
              <label htmlFor={`speed-${skill}`}>{skill}</label>
              <input
                id={`speed-${skill}`}
                type="number"
                value={formData.skills[skill].speed}
                onChange={(e) => {
                  const num =
                    e.target.value === "" ? "" : Number(e.target.value);
                  if (num !== "" && num < 0) return;
                  setFormData((curr) => ({
                    ...curr,
                    skills: {
                      ...curr.skills,
                      [skill]: {
                        ...curr.skills[skill],
                        speed: num,
                      },
                    },
                  }));
                }}
              />
              %
            </section>
          );
        })}
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        {teasForm(formData, setFormData)}
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Equipment</h2>
        <label htmlFor="items-RoG">Ring Of Gathering</label>
        <input
          id="items-RoG"
          type="number"
          value={formData.items.ringOfGathering}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && (num > 20 || num < -1)) return;
            setFormData((curr) => ({
              ...curr,
              items: { ...curr.items, ringOfGathering: num },
            }));
          }}
        />
        <label htmlFor="items-EoG">Earrings Of Gathering</label>
        <input
          id="items-EoG"
          type="number"
          value={formData.items.earringsOfGathering}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && (num > 20 || num < -1)) return;
            setFormData((curr) => ({
              ...curr,
              items: { ...curr.items, earringsOfGathering: num },
            }));
          }}
        />
        <label htmlFor="items-NoE">Necklace Of Efficiency</label>
        <input
          id="items-NoE"
          type="number"
          value={formData.items.necklaceOfEfficiency}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && (num > 20 || num < -1)) return;
            setFormData((curr) => {
              const ret: formDataObject = {
                ...curr,
                items: {
                  ...curr.items,
                  necklaceOfEfficiency: num,
                },
              };
              if (
                curr.items.necklaceOfWisdom !== "" &&
                curr.items.necklaceOfWisdom !== -1
              ) {
                ret.items.necklaceOfEfficiency = -1;
              }
              return ret;
            });
          }}
        />
        <label htmlFor="items-NoW">Necklace Of Wisdom</label>
        <input
          id="items-NoW"
          type="number"
          value={formData.items.necklaceOfWisdom}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && (num > 20 || num < -1)) return;
            setFormData((curr) => {
              const ret: formDataObject = {
                ...curr,
                items: {
                  ...curr.items,
                  necklaceOfWisdom: num,
                },
              };
              if (
                curr.items.necklaceOfEfficiency !== "" &&
                curr.items.necklaceOfEfficiency !== -1
              )
                ret.items.necklaceOfWisdom = -1;
              return ret;
            });
          }}
        />
        <label htmlFor="items-EW">Eye Watch</label>
        <input
          id="items-EW"
          type="number"
          value={formData.items.eyeWatch}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && (num > 20 || num < -1)) return;
            setFormData((curr) => ({
              ...curr,
              items: { ...curr.items, eyeWatch: num },
            }));
          }}
        />
        <label htmlFor="items-RCH">Red Chef's Hat</label>
        <input
          id="items-RCH"
          type="number"
          value={formData.items.redChefsHat}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && (num > 20 || num < -1)) return;
            setFormData((curr) => ({
              ...curr,
              items: { ...curr.items, redChefsHat: num },
            }));
          }}
        />
        <label htmlFor="items-CB">Collector's Boots</label>
        <input
          id="items-CB"
          type="number"
          value={formData.items.collectorsBoots}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && (num > 20 || num < -1)) return;
            setFormData((curr) => ({
              ...curr,
              items: { ...curr.items, collectorsBoots: num },
            }));
          }}
        />
      </form>
      <form>
        <h2>Community Buffs</h2>
        <label htmlFor="buffs-e">Experience</label>
        <input
          id="buffs-e"
          type="number"
          value={formData.communityBuffs.experience}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && num < 0) return;
            setFormData((curr) => ({
              ...curr,
              communityBuffs: {
                ...curr.communityBuffs,
                experience: num,
              },
            }));
          }}
        />
        <label htmlFor="buffs-g">Gathering Quantity</label>
        <input
          id="buffs-g"
          type="number"
          value={formData.communityBuffs.gathering}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && num < 0) return;
            setFormData((curr) => ({
              ...curr,
              communityBuffs: {
                ...curr.communityBuffs,
                gathering: num,
              },
            }));
          }}
        />
        <label htmlFor="buffs-p">Production Efficiency</label>
        <input
          id="buffs-p"
          type="number"
          value={formData.communityBuffs.production}
          onChange={(e) => {
            const num = e.target.value === "" ? "" : Number(e.target.value);
            if (num !== "" && num < 0) return;
            setFormData((curr) => ({
              ...curr,
              communityBuffs: {
                ...curr.communityBuffs,
                production: num,
              },
            }));
          }}
        />
      </form>
    </div>
  );
}

export default UserDetails;

type formDataObject = {
  skills: {
    Milking: {
      level: number | "";
      speed: number | "";
      tea: {
        Milking: boolean;
        superMilking: boolean;
        gathering: boolean;
        wisdom: boolean;
        processing: boolean;
        efficiency: boolean;
      };
    };
    Foraging: {
      level: number | "";
      speed: number | "";
      tea: {
        Foraging: boolean;
        superForaging: boolean;
        gathering: boolean;
        wisdom: boolean;
        processing: boolean;
        efficiency: boolean;
      };
    };
    Woodcutting: {
      level: number | "";
      speed: number | "";
      tea: {
        Woodcutting: boolean;
        superWoodcutting: boolean;
        gathering: boolean;
        wisdom: boolean;
        processing: boolean;
        efficiency: boolean;
      };
    };
    Cheesesmithing: {
      level: number | "";
      speed: number | "";
      tea: {
        Cheesesmithing: boolean;
        superCheesesmithing: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Crafting: {
      level: number | "";
      speed: number | "";
      tea: {
        Crafting: boolean;
        superCrafting: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Tailoring: {
      level: number | "";
      speed: number | "";
      tea: {
        Tailoring: boolean;
        superTailoring: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Cooking: {
      level: number | "";
      speed: number | "";
      tea: {
        Cooking: boolean;
        superCooking: boolean;
        gourmet: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Brewing: {
      level: number | "";
      speed: number | "";
      tea: {
        Brewing: boolean;
        superBrewing: boolean;
        gourmet: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
  };
  items: {
    ringOfGathering: number | "";
    earringsOfGathering: number | "";
    necklaceOfEfficiency: number | "";
    necklaceOfWisdom: number | "";
    eyeWatch: number | "";
    redChefsHat: number | "";
    collectorsBoots: number | "";
  };
  communityBuffs: {
    experience: number | "";
    gathering: number | "";
    production: number | "";
  };
  item: string;
  quantity: number | "";
};
const baseFormData: formDataObject = {
  skills: {
    Milking: {
      level: 1,
      speed: 0,
      tea: {
        Milking: false,
        superMilking: false,
        gathering: false,
        wisdom: false,
        processing: false,
        efficiency: false,
      },
    },
    Foraging: {
      level: 1,
      speed: 0,
      tea: {
        Foraging: false,
        superForaging: false,
        gathering: false,
        wisdom: false,
        processing: false,
        efficiency: false,
      },
    },
    Woodcutting: {
      level: 1,
      speed: 0,
      tea: {
        Woodcutting: false,
        superWoodcutting: false,
        gathering: false,
        wisdom: false,
        processing: false,
        efficiency: false,
      },
    },
    Cheesesmithing: {
      level: 1,
      speed: 0,
      tea: {
        Cheesesmithing: false,
        superCheesesmithing: false,
        wisdom: false,
        efficiency: false,
        artisan: false,
      },
    },
    Crafting: {
      level: 1,
      speed: 0,
      tea: {
        Crafting: false,
        superCrafting: false,
        wisdom: false,
        efficiency: false,
        artisan: false,
      },
    },
    Tailoring: {
      level: 1,
      speed: 0,
      tea: {
        Tailoring: false,
        superTailoring: false,
        wisdom: false,
        efficiency: false,
        artisan: false,
      },
    },
    Cooking: {
      level: 1,
      speed: 0,
      tea: {
        Cooking: false,
        superCooking: false,
        gourmet: false,
        wisdom: false,
        efficiency: false,
        artisan: false,
      },
    },
    Brewing: {
      level: 1,
      speed: 0,
      tea: {
        Brewing: false,
        superBrewing: false,
        gourmet: false,
        wisdom: false,
        efficiency: false,
        artisan: false,
      },
    },
  },
  items: {
    ringOfGathering: -1,
    earringsOfGathering: -1,
    necklaceOfEfficiency: -1,
    necklaceOfWisdom: -1,
    eyeWatch: -1,
    redChefsHat: -1,
    collectorsBoots: -1,
  },
  communityBuffs: {
    experience: 0,
    gathering: 0,
    production: 0,
  },
  item: "Milk",
  quantity: 1,
};

const initialFormObject = (userInfo?: User): formDataObject => {
  if (!userInfo) userInfo = baseFormData as unknown as User;
  return {
    skills: {
      Milking: {
        level: userInfo.skills.Milking.level || 1,
        speed: userInfo.skills.Milking.speed || 0,
        tea: {
          Milking: userInfo.skills.Milking.tea.Milking || false,
          superMilking: userInfo.skills.Milking.tea.superMilking || false,
          gathering: userInfo.skills.Milking.tea.gathering || false,
          wisdom: userInfo.skills.Milking.tea.wisdom || false,
          processing: userInfo.skills.Milking.tea.processing || false,
          efficiency: userInfo.skills.Milking.tea.efficiency || false,
        },
      },
      Foraging: {
        level: userInfo.skills.Foraging.level || 1,
        speed: userInfo.skills.Foraging.speed || 0,
        tea: {
          Foraging: userInfo.skills.Foraging.tea.Foraging || false,
          superForaging: userInfo.skills.Foraging.tea.superForaging || false,
          gathering: userInfo.skills.Foraging.tea.gathering || false,
          wisdom: userInfo.skills.Foraging.tea.wisdom || false,
          processing: userInfo.skills.Foraging.tea.processing || false,
          efficiency: userInfo.skills.Foraging.tea.efficiency || false,
        },
      },
      Woodcutting: {
        level: userInfo.skills.Woodcutting.level || 1,
        speed: userInfo.skills.Woodcutting.speed || 0,
        tea: {
          Woodcutting: userInfo.skills.Woodcutting.tea.Woodcutting || false,
          superWoodcutting:
            userInfo.skills.Woodcutting.tea.superWoodcutting || false,
          gathering: userInfo.skills.Woodcutting.tea.gathering || false,
          wisdom: userInfo.skills.Woodcutting.tea.wisdom || false,
          processing: userInfo.skills.Woodcutting.tea.processing || false,
          efficiency: userInfo.skills.Woodcutting.tea.efficiency || false,
        },
      },
      Cheesesmithing: {
        level: userInfo.skills.Cheesesmithing.level || 1,
        speed: userInfo.skills.Cheesesmithing.speed || 0,
        tea: {
          Cheesesmithing:
            userInfo.skills.Cheesesmithing.tea.Cheesesmithing || false,
          superCheesesmithing:
            userInfo.skills.Cheesesmithing.tea.superCheesesmithing || false,
          wisdom: userInfo.skills.Cheesesmithing.tea.wisdom || false,
          efficiency: userInfo.skills.Cheesesmithing.tea.efficiency || false,
          artisan: userInfo.skills.Cheesesmithing.tea.artisan || false,
        },
      },
      Crafting: {
        level: userInfo.skills.Crafting.level || 1,
        speed: userInfo.skills.Crafting.speed || 0,
        tea: {
          Crafting: userInfo.skills.Crafting.tea.Crafting || false,
          superCrafting: userInfo.skills.Crafting.tea.superCrafting || false,
          wisdom: userInfo.skills.Crafting.tea.wisdom || false,
          efficiency: userInfo.skills.Crafting.tea.efficiency || false,
          artisan: userInfo.skills.Crafting.tea.artisan || false,
        },
      },
      Tailoring: {
        level: userInfo.skills.Tailoring.level || 1,
        speed: userInfo.skills.Tailoring.speed || 0,
        tea: {
          Tailoring: userInfo.skills.Tailoring.tea.Tailoring || false,
          superTailoring: userInfo.skills.Tailoring.tea.superTailoring || false,
          wisdom: userInfo.skills.Tailoring.tea.wisdom || false,
          efficiency: userInfo.skills.Tailoring.tea.efficiency || false,
          artisan: userInfo.skills.Tailoring.tea.artisan || false,
        },
      },
      Cooking: {
        level: userInfo.skills.Cooking.level || 1,
        speed: userInfo.skills.Cooking.speed || 0,
        tea: {
          Cooking: userInfo.skills.Cooking.tea.Cooking || false,
          superCooking: userInfo.skills.Cooking.tea.superCooking || false,
          gourmet: userInfo.skills.Cooking.tea.gourmet || false,
          wisdom: userInfo.skills.Cooking.tea.wisdom || false,
          efficiency: userInfo.skills.Cooking.tea.efficiency || false,
          artisan: userInfo.skills.Cooking.tea.artisan || false,
        },
      },
      Brewing: {
        level: userInfo.skills.Brewing.level || 1,
        speed: userInfo.skills.Brewing.speed || 0,
        tea: {
          Brewing: userInfo.skills.Brewing.tea.Brewing || false,
          superBrewing: userInfo.skills.Brewing.tea.superBrewing || false,
          gourmet: userInfo.skills.Brewing.tea.gourmet || false,
          wisdom: userInfo.skills.Brewing.tea.wisdom || false,
          efficiency: userInfo.skills.Brewing.tea.efficiency || false,
          artisan: userInfo.skills.Brewing.tea.artisan || false,
        },
      },
    },
    items: {
      ringOfGathering: userInfo.items.ringOfGathering || -1,
      earringsOfGathering: userInfo.items.earringsOfGathering || -1,
      necklaceOfEfficiency: userInfo.items.necklaceOfEfficiency || -1,
      necklaceOfWisdom: userInfo.items.necklaceOfWisdom || -1,
      eyeWatch: userInfo.items.eyeWatch || -1,
      redChefsHat: userInfo.items.redChefsHat || -1,
      collectorsBoots: userInfo.items.collectorsBoots || -1,
    },
    communityBuffs: {
      experience: userInfo.communityBuffs.experience || 0,
      gathering: userInfo.communityBuffs.gathering || 0,
      production: userInfo.communityBuffs.production || 0,
    },
    item: userInfo.item || "Milk",
    quantity: userInfo.quantity || 1,
  };
};

function reset(
  setFormData: React.Dispatch<React.SetStateAction<formDataObject>>
) {
  setFormData(baseFormData);
}

const skills = [
  "Milking",
  "Foraging",
  "Woodcutting",
  "Cheesesmithing",
  "Crafting",
  "Tailoring",
  "Cooking",
  "Brewing",
];

const teas = {
  Milking: [
    "Milking",
    "superMilking",
    "gathering",
    "wisdom",
    "processing",
    "efficiency",
  ],
  Foraging: [
    "Foraging",
    "superForaging",
    "gathering",
    "wisdom",
    "processing",
    "efficiency",
  ],
  Woodcutting: [
    "Woodcutting",
    "superWoodcutting",
    "gathering",
    "wisdom",
    "processing",
    "efficiency",
  ],
  Cheesesmithing: [
    "Cheesesmithing",
    "superCheesesmithing",
    "wisdom",
    "efficiency",
    "artisan",
  ],
  Crafting: ["Crafting", "superCrafting", "wisdom", "efficiency", "artisan"],
  Tailoring: ["Tailoring", "superTailoring", "wisdom", "efficiency", "artisan"],
  Cooking: [
    "Cooking",
    "superCooking",
    "gourmet",
    "wisdom",
    "efficiency",
    "artisan",
  ],
  Brewing: [
    "Brewing",
    "superBrewing",
    "gourmet",
    "wisdom",
    "efficiency",
    "artisan",
  ],
};

const teasForm = (
  formData: formDataObject,
  setFormData: React.Dispatch<React.SetStateAction<formDataObject>>
) => {
  return (
    <>
      <h2>Teas</h2>
      {Object.entries(teas).map(([skillName, teaList]) => {
        const skill = skillName as keyof formDataObject["skills"];
        return (
          <Fragment key={"tea-" + skillName}>
            <section>
              <h3>{skill}</h3>
              {teaList.map((teaName) => (
                <Fragment key={`tea-${skillName}-${teaName}`}>
                  <label htmlFor={`tea-${skill}-${teaName}`}>
                    {capitaliseEachWordAndAddSpaces(teaName)}
                  </label>
                  <input
                    id={`tea-${skill}-${teaName}`}
                    type="checkbox"
                    checked={
                      formData.skills[skill].tea[
                        teaName as keyof formDataObject["skills"][keyof formDataObject["skills"]]["tea"]
                      ]
                    }
                    onChange={(e) =>
                      teaInputChange(
                        skill,
                        teaName,
                        e.target.checked,
                        formData,
                        setFormData
                      )
                    }
                    disabled={
                      teaName === "processing" ||
                      teaName === "wisdom" ||
                      teaName === "processing"
                    }
                  />
                </Fragment>
              ))}
            </section>
          </Fragment>
        );
      })}
    </>
  );
};

const teaInputChange = (
  skill: keyof formDataObject["skills"],
  tea: string,
  et: boolean,
  formData: formDataObject,
  setFormData: React.Dispatch<React.SetStateAction<formDataObject>>
) => {
  const checkboxValue = teasLT(formData.skills[skill].tea, 3) ? et : false;
  setFormData((curr) => ({
    ...curr,
    skills: {
      ...curr.skills,
      [skill]: {
        ...curr.skills[skill],
        tea: {
          ...curr.skills[skill].tea,
          [tea]: checkboxValue,
        },
      },
    },
  }));
};

const teasLT = (
  teas: formDataObject["skills"][keyof formDataObject["skills"]]["tea"],
  num: number
): boolean => {
  return Object.values(teas).filter((x) => x).length < num;
};

const ResetMessage = styled.p<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "initial" : "none")};
`;

const ResetButton = styled.button<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "initial" : "none")};
`;
