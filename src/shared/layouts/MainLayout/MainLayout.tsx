import { ReactElement, memo } from 'react';

import cl from './MainLayout.module.scss';

interface MainLayoutProps {
  content: ReactElement;
  sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { content, sidebar } = props;

  return (
    <div className={cl.Main}>
      <div className={cl.Main__content}>{content}</div>
      <div className={cl.Main__sidebar}>{sidebar}</div>
    </div>
  );
});
