export type HistoryTypes = {
  [year: number]: HistoryMonthItemTypes[];
};

export type HistoryMonthItemTypes = {
  month: number;
  list: string[];
};
