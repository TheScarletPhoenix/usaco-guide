import * as React from 'react';
import { useIsUserDataLoaded } from '../context/UserDataContext/UserDataContext';
import { useSetLastVisitDate } from '../context/UserDataContext/properties/lastVisit';

export const useUpdateStreakEffect = ({
  setLastViewedModule,
}: {
  /**
   * If specified, in addition to updating number of pageviews,
   * will also update last viewed module
   */
  setLastViewedModule?: string;
}) => {
  const setLastVisitDate = useSetLastVisitDate();
  const isLoaded = useIsUserDataLoaded();

  React.useEffect(() => {
    if (isLoaded) {
      setLastVisitDate({
        lastVisitDate: new Date().getTime(),
        lastViewedModule: setLastViewedModule,
      });
    }
  }, [isLoaded]);
};
