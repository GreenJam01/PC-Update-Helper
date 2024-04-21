import {useState, useLayoutEffect} from 'react';
import {HashRouter, Router} from 'react-router-dom';
import type {BrowserHistory} from 'history';

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

function HistoryRouter({
  basename,
  children,
  history,
}: HistoryRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <HashRouter
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </HashRouter>
  );
}

export default HistoryRouter;
