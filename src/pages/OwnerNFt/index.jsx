import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Staking from './Staking';
import UnStaking from './UnStaking';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="Nft Staking" sx={{
              marginLeft: "24px",
              marginRight: "24px",
          }}>
            <Tab
              label={
                <ul
                  className={`nav nav-tabs mb-6 flex items-center justify-center border-b ${
                    value === 0 ? 'bg-white' : 'bg-jk'
                  } border-jacarta-100 dark:border-jacarta-600`}
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover: dark:hover:text-white"
                      id="activity-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#activity"
                      type="button"
                      role="tab"
                      aria-controls="activity"
                      aria-selected="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-5 w-5 fill-current"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z"
                        />
                      </svg>
                      <span className="font-display text-base font-medium">Stake NFTs</span>
                    </button>
                  </li>
                </ul>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <ul
                  className={`nav nav-tabs mb-6 flex items-center justify-center border-b ${
                    value === 1 ? 'bg-white' : 'bg-lhk'
                  } border-jacarta-100 dark:border-jacarta-600`}
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover: dark:hover:text-white"
                      id="activity-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#activity"
                      type="button"
                      role="tab"
                      aria-controls="activity"
                      aria-selected="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-5 w-5 fill-current"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z"
                        />
                      </svg>
                      <span className="font-display text-base font-medium">Unstake NFTs</span>
                    </button>
                  </li>
                </ul>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Staking />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <UnStaking />
        </CustomTabPanel>
      </Box>
    );
  }
  
