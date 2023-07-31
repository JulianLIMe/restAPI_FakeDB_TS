/* An Enum is an object containing specific parameters with static
 constants with specific values, it can be a set of types, numeric or 
 string values that can be used in anywhere in the code */

// If you use Enums this file cannot be called types.d.ts (definitions), it must be called types.ts
// Or save these Enums in another file and import them wherever they are needed.


//export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
//export type Visibility = "great" | "good" | "ok" | "poor";

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
