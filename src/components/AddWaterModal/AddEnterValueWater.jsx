import Typography from 'components/Typography/Typography';
import { EnterValueWater, Input, Text } from './AddWaterModal.styled';

export const AddEnterValueWater = () => {
  return (
    <EnterValueWater>
      <label>
        <Typography styled="ListTitle">
          <Text>Enter the value of the whater used:</Text>
        </Typography>
        <Input
          type="number"
          name="weight"
          // max={200}
          min={50}
          step={50}
          placeholder="50"
          // onChange={handleInputChange}
        />
      </label>
    </EnterValueWater>
  );
};