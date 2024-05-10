import React from "react";

import { AreaChart, LineChart } from "nr1";

import { Grid, GridItem } from "nr1";

const index = () => {
  return (
    <div className="heading">
      <p>joban</p>
      <AreaChart
        accountId={4438270}
        query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI3MHxJTkZSQXxOQXw4NDYyODI3NjQ0MjcyMDU1OTIz') TIMESERIES AUTO"
        fullWidth
      />
    </div>
  );
};

export default index;
