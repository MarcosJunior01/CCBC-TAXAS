import ExportForm from './components/ExportForm';
import ExportInfo from './components/ExportInfo';
import ExportChart from './components/ExportChart';
import Header from './components/Header';
import './styles/dashboard.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="dashboard">
        <main className="main-panel">
          <ExportForm />
          <ExportChart />
        </main>

        <aside className="sidebar">
          <ExportInfo />
        </aside>
      </div>
    </div>
  );
}

export default App;
