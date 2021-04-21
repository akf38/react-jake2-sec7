import styled from "styled-components";
import { Card } from "../../atoms/card/card";
import { UserIconWithName } from "../../Molecules/user/UserIconWithName";
import { memo } from "react";

export const UserCard = memo((props) => {
  console.log("UserCard");
  const { user } = props;
  return (
    <Card>
      <UserIconWithName name={user.name} image={user.image} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
