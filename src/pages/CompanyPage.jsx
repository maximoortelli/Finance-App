import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const CompanyPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const companySymbol = queryParams.get('symbol');

  const companies = useSelector((state) => state.companies.companies);

  const company = companies.filter(
    (company) => company.symbol === companySymbol,
  )[0];

  return (
    <>
      <div className="container hero d-flex align-items-center">
        <img
          src={company.image}
          alt={company.companyName}
          className="logo mt-2 w-50"
        />
        <div className="w-100 text-center ">
          <h1 className="strong">{company.symbol}</h1>
          <span className="price">{company.price}</span>
        </div>
      </div>
      <h5
        className="container mt-2 py-4 text-center homet"
        style={{ background: 'var(--dark-pink)' }}
      >
        {company.companyName}
        &nbsp;info
      </h5>
      <div className="company__data">
        <ListGroup>
          {Object.keys(company)
            .filter((value) => value !== 'image')
            .map((value) => (
              <ListGroup.Item
                key={value}
                className="company__data-item border-0 tabla"
              >
                <div className="d-flex justify-content-between">
                  <span>{value}</span>
                  <div>
                    <span className="p-3">{company[value]}</span>
                    <FaArrowRight
                      className="FaArrowRight"
                      size={22}
                      color="white"
                    />
                  </div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </>
  );
};

export default CompanyPage;
