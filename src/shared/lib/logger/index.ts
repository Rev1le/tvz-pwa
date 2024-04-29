import Logger from "js-logger";

Logger.useDefaults();

function catchResponse(e: any) {
  Logger.warn(`${e.message} => ${e.config.url}`)
}

export {
  Logger,
  catchResponse
}