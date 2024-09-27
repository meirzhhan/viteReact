import { MainLayout } from '../shared/layouts/MainLayout';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  return (
    <div className="App app_light">
      <MainLayout
        content={<AppRouter></AppRouter>}
        sidebar={<div>Sidebar</div>}
      />
    </div>
  );
}

export default App;
