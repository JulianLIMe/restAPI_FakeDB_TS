import diaryData from "../fackeDB/diary.json"; // resolveJsonModule Enable importing .json files
import {
  DiaryEntry,
  NonSensitiveInfoDiaryEntry,
  NewDiaryEntry,
} from "../types";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];
/* The _as_ keyword is a Type Assertion which tells the compiler to consider the object as another type 
than the compiler infer the object to be */

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const diary = diaries.find((e) => e.id === id);
  if (diary) {
    const { comment, ...restOfDiary } = diary;
    return restOfDiary;
  }
  return undefined; // Must return undefine because there is in types.d.ts the condition noImplicitReturns: true
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    // return diaryData as NonSensitiveInfoDiaryEntry[];  This continue using the key comment from diaryData, then:

    /* return diaryData.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    }) as NonSensitiveInfoDiaryEntry[]; */

    return diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    });
  };

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry,
  };
  diaries.push(newDiary);
  return newDiary;
};
