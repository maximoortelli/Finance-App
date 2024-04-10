import { useSelector } from 'react-redux';
import CompaniesList from '../components/CompaniesList';
import logo from '../assets/images/finance-chart.png';
import SearchBar from '../components/SearchBar';

const Home = () => {
  let companies = useSelector((state) => state.companies);

  if (companies.filteredCompanies.length === 0) {
    companies = companies.companies;
  } else {
    companies = companies.filteredCompanies;
  }

  return (
    <>
      <div className="container hero d-flex gap-3">
        <img src={logo} alt="finance app logo" className="logo w-50 p-3" />
        <div className="align-self-center">
          <h1 className="strong">Stocks</h1>
          <span className="this">
            {companies.length}
            &nbsp;companies
          </span>
        </div>
      </div>
      <div
        className="container barra mt-2 p-3 d-flex justify-content-between align-items-center"
        style={{ background: 'var(--dark-pink)' }}
      >
        <h4 className="mb-0">Stats by Company</h4>
        <SearchBar />
      </div>
      <div className="companies__list">
        <CompaniesList companies={companies} />
      </div>
    </>
  );
};

export default Home;
