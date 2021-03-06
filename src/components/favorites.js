import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { years } from "../constants/constanst";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [year, setYear] = useState(2014);
  return (
    <>
      <Row className="mb-2 pb-5">
        <Col md={4}>
          <h6 className="text-muted">Select year</h6>
        </Col>
        <Col md={6}>
          <DropdownButton
            id="dropdown-variants-transparent"
            variant="transparent"
            title={year}
          >
            {years.map((year, i) => {
              return (
                <Dropdown.Item
                  eventKey={i}
                  key={i}
                  onClick={() => {
                    setYear(year);
                  }}
                >
                  {year}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </Col>
      </Row>

      {store.favorites !== null ? (
        <>
          {store.favorites.map((tag) => {
            return (
              <Col
                key={tag.id}
                md={12}
                className="px-5 py-2  search-item-result"
              >
                <Row>
                  <Col
                    md={10}
                    onClick={() =>
                      actions.fetchPrices(tag.name, tag.slug, year)
                    }
                  >
                    {tag.name}
                  </Col>
                  <Col md={2}>
                    <img
                      src="../img/fav.png"
                      className="img-fluid"
                      alt=""
                      onClick={() => actions.remove_from_favorite(tag)}
                    />
                  </Col>
                </Row>
              </Col>
            );
          })}
        </>
      ) : (
        store.search_tags_result === null && (
          <Col className="text-center">
            <h4>No tienes favoritos aun</h4>
          </Col>
        )
      )}
    </>
  );
};
