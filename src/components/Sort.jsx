
import RNPickerSelect from 'react-native-picker-select';
import { View } from 'react-native';

const Sort = ({setSelectedSorting}) => {
  
  return  <View style={{height: 50, padding:20 }}>
    <RNPickerSelect
      onValueChange={(itemValue ) =>
        setSelectedSorting(itemValue)
        }
      items={[
          { label: "Latest Repositories", value: "Latest" },
          { label: "Highest Rated Repositories", value: "Highest" },
          { label: "Lowest Rated Repositories", value: "Lowest" },
        ]}
      />
  </View>
    }
export default Sort;