import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import {useFavoriteUsersFetch } from "hooks";
import * as S from "./style";

const Favorites = () => {
  const {favorites,setFavorits} = useFavoriteUsersFetch();

  return (
      <S.Favorites>
          <S.Content>
              <S.Header>
                  <Text size="64px" bold>
                      Favorites
                  </Text>
              </S.Header>
              <UserList users={favorites??[]} isLoading={false} favorites={favorites??[]} setFavorits={setFavorits}/>
          </S.Content>
      </S.Favorites>
  );
};

export default Favorites;