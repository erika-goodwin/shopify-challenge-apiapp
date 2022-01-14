import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import PlaceholderLoading from "react-placeholder-loading";

export const LoadingSpinerComponent = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {promiseInProgress && (
        <div className="loadingContainer">
          <PlaceholderLoading
            shape="circle"
            width={100}
            height={100}
            colorStart="rgb(198, 198, 214)"
            colorEnd="rgb(140, 140, 150)"
          />
        </div>
      )}
    </>
  );
};
