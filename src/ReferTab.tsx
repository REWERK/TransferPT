import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Refer1 from './Refer1';

const Refer4: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        TabIndicatorProps={{
            style: {
                height: 7.5,
                borderRadius: '20px 20px 0 0',
                backgroundColor: '#2c53b6',
              },
            }}
            sx={{
              '& .Mui-selected': {
                color: 'black',
              },
            }}
          >
          <Tab label="ส่งต่อ" style={{ fontWeight: 'bold'}} />
          <Tab label="ประเมิณทางคลินิค" style={{ fontWeight: 'bold'}} />
          <Tab label="ยา/บริการ/หัตถการ" style={{ fontWeight: 'bold'}} />
          <Tab label="ตรวจทานห้องปฏิบัติการ Refer" style={{ fontWeight: 'bold'}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <Refer1 />
          </div>
          {/* Add more fields as needed */}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Tab 2 */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Content for Tab 3 */}
      </TabPanel>
      {/* Add more TabPanel components for each tab */}
    </Box>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default Refer4;
