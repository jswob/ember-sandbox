export function initialize(appInstance) {
  let logger = appInstance.lookup("logger:main");

  logger.log("Hello from the instance initializer!");
}

export default {
  name: "logger",
  initialize
};
