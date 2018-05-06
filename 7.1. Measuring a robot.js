function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
  let robot1Turns = [];
  let robot2Turns = [];

  for (let i = 0; i < 100; i++) {
    let randomState = VillageState.random();
    robot1Turns.push(robotPerformance(randomState, robot1, memory1));
    robot2Turns.push(robotPerformance(randomState, robot2, memory2));
  }

  function robotPerformance(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }

  let robot1Avg = robot1Turns.reduce((a,b) => a+b) / 100;
  let robot2Avg = robot2Turns.reduce((a,b) => a+b) / 100;

  console.log(`Robot 1 took ${robot1Avg} turns on average.`);
  console.log(`Robot 2 took ${robot2Avg} turns on average.`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
