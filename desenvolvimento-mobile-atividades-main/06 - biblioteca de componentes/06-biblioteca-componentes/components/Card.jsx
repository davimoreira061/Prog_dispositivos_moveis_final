import { Card, Title, Paragraph } from "react-native-paper";

const CardComponent = ({backgroundColor}) => {
  return (
    <>
    <Card style={{backgroundColor: backgroundColor ? backgroundColor : '#F0F0F0', marginTop: 10}}>
      <Card.Content style={{alignItems:'center'}}>
        <Title>This is a title</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel
          asperiores laboriosam adipisci esse omnis at ut explicabo praesentium
          aspernatur nam porro deleniti nostrum accusantium qui delectus,
          placeat vero illum.
        </Paragraph>
      </Card.Content>
    </Card>
    </>
  );
};

export default CardComponent;
