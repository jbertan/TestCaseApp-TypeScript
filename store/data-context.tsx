import * as React from "react";
import { Data } from "../pages/home";
import { useState } from "react";

interface ctx {
  lastData: Data;
  data: Data[];
  scoreData: Data[];
  addLastData: (data: Data) => void;
  addData: (data: Data) => void;
  addArrData: (data: Data[]) => void;
  removeData: (dataId: number) => void;
  readMe: () => void;
  addPoint: (point: number) => void;
  addCompleted: (data: Data) => void;
  point: number;
}
export const DataContext = React.createContext<ctx>({
  point: 0,
  data: [],
  scoreData: [],
  addCompleted: (data: Data) => {},
  addData: (data: Data) => {},
  addArrData: (data: Data[]) => {},
  removeData: (dataId: number) => {},
  readMe: () => {},
  addPoint: (point: number) => {},
  lastData: { id: 0, title: "", description: "", point: 0, image: "" },
  addLastData: (lastData: Data) => {},
});
type DataProviderProps = {
  children: React.ReactNode;
};
export const DataContextProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<Data[]>([]);
  const [point, setPoint] = useState<number>(0);
  const [scoreData, setScoreData] = useState<Data[]>([]);
  const [lastData, setLastData] = useState<Data>({
    id: 0,
    title: "",
    description: "",
    point: 0,
    image: "",
  });
  const addCompleted = (scoreData: Data) => {
    setScoreData((prevState) => {
      return prevState.concat(scoreData);
    });
  };
  const addLastData = (lastData: Data) => {
    setLastData(lastData);
  };

  const addData = (data: Data) => {
    setData((prevState) => {
      return prevState.concat(data);
    });
  };
  const readMe = () => {
    console.log("readME");
  };
  const addArrData = (data: Data[]) => {
    setData((prevState) => {
      return prevState.concat(data);
    });
  };
  const addPoint = (pointAdd: number) => {
    setPoint((prevState) => {
      return prevState + pointAdd;
    });
  };
  const removeData = (dataId: number) => {
    setData((prevState) => {
      return prevState.filter((data) => data.id !== dataId);
    });
  };
  const contextValue: ctx = {
    data,
    addData,
    addArrData,
    removeData,
    readMe,
    addPoint,
    point,
    addCompleted,
    scoreData,
    lastData,
    addLastData,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
