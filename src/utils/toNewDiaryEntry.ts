import { NewDiaryEntry, Weather, Visibility } from "../types";

const parseComment = (commentFromRequest: any): string => {
  if (typeof commentFromRequest !== "string") {
    throw new Error("Incorrect or missing comment");
  }
  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather");
  }
  return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missing visibility");
  }
  return visibilityFromRequest;
};

const isString = (string: any): boolean => {
  // const string = "im string" --> typeOf(string) === "string"
  // const newString = new String("Im other string") --> newString instanceOf String === "string"
  return typeof string === "string" || string instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWeather = (weather: any): boolean => {
  //return ["sunny", "rainy", "cloudy", "windy", "stormy"].includes(string);
  return Object.values(Weather).includes(weather);
};

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility);
};

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    comment: parseComment(object.comment),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};
