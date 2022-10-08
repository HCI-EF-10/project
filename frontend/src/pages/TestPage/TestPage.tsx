import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SettingsContainer from "../../components/SettingsContainer/SettingsContainer";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import FoodOptionsContainer from "../../components/FoodOptionContainer/FoodOptionsContainer";
import { FoodOption } from "../../util/Types/ApiTypes";
import { Scenario } from "../../util/Types/GeneralTypes";
import { useLocation, useNavigate } from "react-router-dom";
import { PopUpDialog } from "../../components/PopUpDialog/PopUpDialog";

const menu1: FoodOption[] = [
  {
    imgSrc: require("../../images/cheeseburger.jpg"),
    title: "Cheeseburger",
    selected: false,
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Quarter Pounder",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickenburger.jpg"),
    title: "Chicken Burger",
    selected: false,
  },
  {
    imgSrc: require("../../images/fishburger.jpg"),
    title: "Fish Burger",
    selected: false,
  },
];

const menu2: FoodOption[] = [
  {
    imgSrc: require("../../images/fries.jpg"),
    title: "Fries",
    selected: false,
  },
  {
    imgSrc: require("../../images/onionrings.jfif"),
    title: "Onion Rings",
    selected: false,
  },
  {
    imgSrc: require("../../images/mozzasticks.jfif"),
    title: "Mozzarella Sticks",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickenstrips.jfif"),
    title: "Chicken Strips",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickennuggets.jpg"),
    title: "Chicken Nuggets",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickenwings.jpg"),
    title: "Chicken Wings",
    selected: false,
  },
];

const menu3: FoodOption[] = [
  {
    imgSrc: require("../../images/softserve.jpg"),
    title: "Soft Serve",
    selected: false,
  },
  {
    imgSrc: require("../../images/applepie.jpg"),
    title: "Apple Pie",
    selected: false,
  },
  {
    imgSrc: require("../../images/sundae.jpg"),
    title: "Sundae",
    selected: false,
  },
];
const foodOptions = [menu1, menu2, menu3];
const menuNames = ["Burgers", "Sides", "Desserts"];

const scenario1: Scenario = {
  actions: [
    {
      menuItemIndex: 1,
      foodOptionIndex: 1,
    },
    {
      menuItemIndex: 1,
      foodOptionIndex: 2,
    },
    {
      menuItemIndex: 1,
      foodOptionIndex: 3,
    },
    {
      menuItemIndex: 1,
      foodOptionIndex: 4,
    },
  ]
}

const scenario2: Scenario = {
  actions: [
    {
      menuItemIndex: 1,
      foodOptionIndex: 1,
    },
    {
      menuItemIndex: 2,
      foodOptionIndex: 1,
    },
    {
      menuItemIndex: 3,
      foodOptionIndex: 1,
    },
  ]
}

const scenario3: Scenario = {
  actions: [
    {
      menuItemIndex: 1,
      foodOptionIndex: 1,
    },
    {
      menuItemIndex: 2,
      foodOptionIndex: 1,
    },
    {
      menuItemIndex: 3,
      foodOptionIndex: 1,
    },
  ]
}

const scenarios: Scenario[] = [scenario1, scenario2, scenario3];

function TestPage() {
  const [menu, setMenu] = React.useState(1);
  const [foodWidth1, setFoodWidth1] = React.useState(0);
  const [foodHeight1, setFoodHeight1] = React.useState(0);
  const [foodXSpacing1, setFoodXSpacing1] = React.useState(0);
  const [foodYSpacing1, setFoodYSpacing1] = React.useState(0);
  const [foodWidth2, setFoodWidth2] = React.useState(0);
  const [foodHeight2, setFoodHeight2] = React.useState(0);
  const [foodXSpacing2, setFoodXSpacing2] = React.useState(0);
  const [foodYSpacing2, setFoodYSpacing2] = React.useState(0);
  const [foodWidth3, setFoodWidth3] = React.useState(0);
  const [foodHeight3, setFoodHeight3] = React.useState(0);
  const [foodXSpacing3, setFoodXSpacing3] = React.useState(50);
  const [foodYSpacing3, setFoodYSpacing3] = React.useState(0);
  const [foodWidth4, setFoodWidth4] = React.useState(0);
  const [foodHeight4, setFoodHeight4] = React.useState(0);
  const [foodXSpacing4, setFoodXSpacing4] = React.useState(0);
  const [foodYSpacing4, setFoodYSpacing4] = React.useState(0);

  const foodHeights = [foodHeight1, foodHeight2, foodHeight3, foodHeight4];
  const foodWidths = [foodWidth1, foodWidth2, foodWidth3, foodWidth4];
  const foodXSpacings = [
    foodXSpacing1,
    foodXSpacing2,
    foodXSpacing3,
    foodXSpacing4,
  ];
  const foodYSpacings = [
    foodYSpacing1,
    foodYSpacing2,
    foodYSpacing3,
    foodYSpacing4,
  ];
  const setFoodWidths = [
    setFoodWidth1,
    setFoodWidth2,
    setFoodWidth3,
    setFoodWidth4,
  ];
  const setFoodHeights = [
    setFoodHeight1,
    setFoodHeight2,
    setFoodHeight3,
    setFoodHeight4,
  ];
  const setFoodXSpacings = [
    setFoodXSpacing1,
    setFoodXSpacing2,
    setFoodXSpacing3,
    setFoodXSpacing4,
  ];
  const setFoodYSpacings = [
    setFoodYSpacing1,
    setFoodYSpacing2,
    setFoodYSpacing3,
    setFoodYSpacing4,
  ];

  const [isInTestMode, setIsInTestMode] = React.useState(false);
  const [timeElapsedFormatted, setTimeElapsedFormatted] = React.useState("0m 0s");
  const [currentInterval, setCurrentInterval] = React.useState<any>();

  const [numberOfClicks, setNumberOfClicks] = React.useState(0);
  const [numberOfErrors, setNumberOfErrors] = React.useState(0);

  const [attemptNumber, setAttemptNumber] = React.useState(0);
  const [scenarioIndex, setScenarioIndex] = React.useState(0);
  const [actionIndex, setActionIndex] = React.useState(0);

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogContent, setDialogContent] = React.useState<JSX.Element>((<></>));
  const {state} = useLocation();
  console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentInterval !== null) {
      clearInterval(currentInterval);
    }

    if (isInTestMode && !dialogOpen) {
      // Start timer
      const newStartTime = Date.now();

      // Start interval to update time elapsed
      const interval = setInterval(() => {
        const timeElapsed = Date.now() - newStartTime;

        const test = new Date(timeElapsed);

        const minutes = test.getMinutes();
        const seconds = test.getSeconds();

        setTimeElapsedFormatted(`${minutes}m ${seconds}s`);
      }, 1000);

      setCurrentInterval(interval);
    }
  }, [isInTestMode, dialogOpen]);

  const onMenuClick = (index: number) => {
    if (!isInTestMode) {
      setMenu(index);
      return;
    }

    // Check if current actionIndex is greater than the number of actions
    if (actionIndex >= scenarios[scenarioIndex].actions.length) {
      return;
    }

    // Get current action
    const currentAction = scenarios[scenarioIndex].actions[actionIndex];

    // Check if the menu item clicked is the correct one
    if (currentAction.menuItemIndex === index) {
      setMenu(index);
    } else {
      setNumberOfErrors(numberOfErrors + 1);
    }
    setNumberOfClicks(numberOfClicks + 1);
  }

  const onFoodOptionClick = (menuIndex: number, foodIndex: number) => {
    if (!isInTestMode) {
      return;
    }

    // Check if current actionIndex is greater than the number of actions
    if (actionIndex >= scenarios[scenarioIndex].actions.length) {
      return;
    }

    // Get current action
    const currentAction = scenarios[scenarioIndex].actions[actionIndex];

    // Check if the food option clicked is the correct one
    if (currentAction.menuItemIndex === menuIndex && currentAction.foodOptionIndex === foodIndex) {
      // If it is, then move on to the next action
      setActionIndex(actionIndex + 1);
    } else {
      setNumberOfErrors(numberOfErrors + 1);
    }

    setNumberOfClicks(numberOfClicks + 1);
  }

  const onCheckoutClick = () => {
    // If the user has completed all actions, then move on to the next scenario
    if (actionIndex === scenarios[scenarioIndex].actions.length) {
      // Check if user has already done 3 attempts
      if (attemptNumber === 2) {
        // If on last scenario, then end test
        if (scenarioIndex === scenarios.length - 1) {
          navigate("/");
          return;
        }

        // If so, then move on to the next scenario
        setScenarioIndex(scenarioIndex + 1);
        setAttemptNumber(0);
      }
      // If not, then move on to the next attempt
      else {
        setAttemptNumber(attemptNumber + 1);
      }

      setNumberOfClicks(0);
      setActionIndex(0);
      setMenu(1);

      setDialogOpen(true);

      setDialogTitle("Complete!");

      setDialogContent(
        <div>
          <Typography>You have completed scenario {scenarioIndex+1} attempt {attemptNumber+1}</Typography>
          <Typography>Number of clicks: {numberOfClicks}</Typography>
          <Typography>Number of errors: {numberOfErrors}</Typography>
          <Typography>Time elapsed: {timeElapsedFormatted}</Typography>
        </div>
      );
    } else {
      setNumberOfErrors(numberOfErrors + 1);
      setNumberOfClicks(numberOfClicks + 1);
    }
  }

  const onTestClick = () => {
    if (isInTestMode) {
      setActionIndex(0);
      setIsInTestMode(false);
    } else {
      setDialogOpen(true);

      setDialogTitle(`Scenario ${scenarioIndex+1}`);

      const currentScenario = scenarios[scenarioIndex];

      let test = currentScenario.actions.map((action, index) => {
        return (
            <Typography key={index}>
              Step {index + 1}. Click on {menuNames[action.menuItemIndex-1]} menu and select a {foodOptions[action.menuItemIndex-1][action.foodOptionIndex-1].title}.
            </Typography>
        )
      });

      setDialogContent((
        <>
        <Typography variant="h3" marginBottom={"10px"}>
              Please complete the following scenario:
        </Typography>
          {test}
          <Typography>
            Then click checkout.
          </Typography>
          <Typography marginTop={"20px"}>
            A timer will start to measure the time taken to finish the scenario upon closing this dialog.
          </Typography>
          <Typography marginTop={"20px"}>
            This scenario will also persist on the settings pane, so you can follow these instructions.
          </Typography>
        </>
      ));

      setNumberOfClicks(0);
      setNumberOfErrors(0);
    }
  }

  const onTestStartDialogClose = () => {
    setDialogOpen(false);
    setIsInTestMode(!isInTestMode);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <SettingsContainer menu={menu} widths={foodWidths} heights={foodHeights} xSpacings={foodXSpacings}
        ySpacings={foodYSpacings}
        setWidths={setFoodWidths} setHeights={setFoodHeights} setXSpacings={setFoodXSpacings}
        setYSpacings={setFoodYSpacings}
        isInTest={isInTestMode} onTestClick={onTestClick}
        currentAttemptClicks={numberOfClicks} currentAttemptErrors={numberOfErrors}
        scenarioNumber={scenarioIndex + 1} attemptNumber={attemptNumber + 1}
        timeElapsedFormatted={timeElapsedFormatted}
        actions={scenarios[scenarioIndex].actions} actionIndex={actionIndex}
      />
      <MenuContainer
        handleClick={onMenuClick}
        rowSpacing={100}
        buttonWidth={100}
        buttonHeight={100}
      />

      <FoodOptionsContainer
        isInTest={isInTestMode}
        onCheckoutClick={onCheckoutClick}
        layout={menu}
        onClick={onFoodOptionClick}
        foodOptions={foodOptions}
        xSpacing={foodXSpacings[menu - 1]}
        ySpacing={foodYSpacings[menu - 1]}
        height={foodHeights[menu - 1]}
        width={foodWidths[menu - 1]}
      />
      <PopUpDialog title={dialogTitle} content={dialogContent} open={dialogOpen} onClose={onTestStartDialogClose} />
    </Box>
  );
}

export default TestPage;
