import { useContext } from "react";
import { Context } from "../store/appContext";
import { Col, Row } from "react-bootstrap";


export const Favorites = () => {
  const {store, actions} = useContext(Context)
  return (
    <>
      {store.favorites !== null ? (
        <>
          {store.favorites.map((tag) => {
            return (
              <Col
                key={tag.id}
                md={12}
                className="px-5 py-2  search-item-result"
                onClick={() => actions.remove_from_favorite(tag)}
              >
                <Row>
                  <Col md={10}>{tag.name}</Col>
                  <Col md={2}>
                    <img src="../img/fav.png" className="img-fluid" alt="" />
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