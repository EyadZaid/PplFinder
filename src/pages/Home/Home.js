import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch, useFavoriteUsersFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();
  const {favorites, setFavorits} = useFavoriteUsersFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} favorites={favorites} setFavorits={setFavorits} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
