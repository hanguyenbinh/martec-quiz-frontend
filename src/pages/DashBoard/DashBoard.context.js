import React from "react"

const DashBoardContext = React.createContext();

export const DashboardProvider = DashBoardContext.Provider;
export const DashboardConsumer = DashBoardContext.Consumer;

export default DashBoardContext